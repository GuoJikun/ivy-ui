import { getCurYearAndMonth, generatorMountDay } from "./utils.js";
import { $_border_base, $_color_primary } from "../../ivy-ui/src/utils/var";

function mergeData(list) {
    if (list === undefined) {
        return false;
    }
    return this.days.map((item, i) => {
        if (list === undefined) {
            return {
                ...item,
                hasSchedule: false,
            };
        } else {
            return {
                ...item,
                hasSchedule: list[i] === 1 ? true : false,
            };
        }
    });
}

export default class DatePicker extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");
        template.innerHTML = `
            <style>
            :host {
                position: relative;
            }
            .wrap {
                padding: 10px;
                position: absolute;
                background-color: white;
                z-index: 10;
                width: 280px;
                box-shadow: 0px 0px 9px 2px rgb(0 0 0 / 37%);
                border-radius: 4px;
            }
            .calendar-header {
                padding: 0 12px;
                line-height: 32px;
                position: relative;
            }
            .input {
                display: inline-block;
            }
            .input>input[type="text"] {
                height: 32px;
                width: 224px;
                box-sizing: border-box;
                border: ${$_border_base};
                outline: none;
                transition: all 0.3s;
            }
            .input>input[type="text"]:hover,
            .input>input[type="text"]:focus {
                border-color: var(--color-primary, ${$_color_primary});
            }

            .wrap-header{
                display: flex;
                justify-content: space-between;
            }
            .wrap-body{
                display: flex;
                flex-wrap: wrap;
            }
            .wrap-body-item{
                flex: 0 0 30px;
                height: 30px;
                margin: 5px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 20px;
                transition: background-color 0.3s, color 0.2s;
                cursor: pointer;
            }
            .wrap-body-item[type="-1"],
            .wrap-body-item[type="1"]{
                color: #999999;
            }
            .is-active {
                color: var(--color-primary, ${$_color_primary});
            }
            .wrap-body-item:not(.wrap-body-item-header):hover{
                background: var(--color-primary, ${$_color_primary});
                color: white;
            }
            </style>
            <div class="input">
                <input type="text" readonly />
            </div>
            <div class="wrap">
                <div class="wrap-header">
                    <div>
                        <el-icon name="d-arrow-left" @click.native="prevYear"></el-icon>
                        <el-icon name="arrow-left" @click.native="prevMonth"></el-icon>
                    </div>
                    <span class="wrap-header-date"></span>
                    <div>
                        <el-icon name="arrow-right" @click.native="nextMonth"></el-icon>
                        <el-icon name="d-arrow-right" @click.native="nextYear"></el-icon>
                    </div>
                </div>
                <div class="wrap-body"></div>
            </div>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.pane = this._shadowRoot.querySelector(".wrap-body");
        this.$title = this._shadowRoot.querySelector(".wrap-header-date");

        this.days = [];
        this.date = null;
        this.month = null;
        this.year = null;
    }

    static get observedAttributes() {
        return ["value", "placeholder"];
    }

    get value() {
        return this.getAttribute("value") || new Date();
    }
    set value(text) {
        this.setAttribute("value", new Date(text));
    }

    get placeholder() {
        return this.getAttribute("placeholder");
    }
    set placeholder(text) {
        this.setAttribute("placeholder", text);
    }

    goCurDate() {
        const { month, year, date } = getCurYearAndMonth();
        this.year = year;
        this.month = month;
        this.date = date;
        this.days = this.generatorCalenderPanel();
        this.curDateClick({ value: date });
    }
    init() {
        const { month, year, date } = getCurYearAndMonth(this.value);
        this.year = year;
        this.month = month;
        this.date = date;
        const data = this.generatorCalenderPanel(date);
        this.pane.innerHTML = data.join("");
        this.$title.innerText = `${this.year}年 ${this.month}月 ${this.date}日`;
    }
    generatorCalenderPanel(cur) {
        const data = generatorMountDay(this.month, this.year);
        const dates = data.map(c => {
            if (c.type === 0 && c.value === cur) {
                return `<div class="wrap-body-item is-active" type="${c.type}">${c.value}</div>`;
            } else {
                return `<div class="wrap-body-item" type="${c.type}">${c.value}</div>`;
            }
        });
        const start = `
                        <div class="wrap-body-item wrap-body-item-title">周日</div>
                        <div class="wrap-body-item wrap-body-item-title">周一</div>
                        <div class="wrap-body-item wrap-body-item-title">周二</div>
                        <div class="wrap-body-item wrap-body-item-title">周三</div>
                        <div class="wrap-body-item wrap-body-item-title">周四</div>
                        <div class="wrap-body-item wrap-body-item-title">周五</div>
                        <div class="wrap-body-item wrap-body-item-title">周六</div>`;

        return [start, ...dates];
    }
    nextMonth() {
        if (this.month === 12) {
            this.year = this.year + 1;
            this.month = 1;
        } else {
            this.month = this.month + 1;
        }
        this.days = this.generatorCalenderPanel();
        this.$emit("month-change", ...[this.month, this.year]);
    }
    prevMonth() {
        if (this.month === 1) {
            this.year = this.year - 1;
            this.month = 12;
        } else {
            this.month = this.month - 1;
        }
        this.days = this.generatorCalenderPanel();
        this.$emit("month-change", ...[this.month, this.year]);
    }
    nextYear() {
        this.year = this.year + 1;
        this.days = this.generatorCalenderPanel();
    }
    prevYear() {
        this.year = this.year - 1;
        this.days = this.generatorCalenderPanel();
    }
    curDateClick(item) {
        const { type, value } = item;
        if (type === -1) {
            this.prevMonth();
        } else if (type === 1) {
            this.nextMonth();
        }
        this.checkValue = `${this.year}-${this.month}-${value}`;
        this.$emit("change", new Date(this.checkValue));
    }
    isTheDate(day) {
        if (day.type === 0) {
            const cur = getCurYearAndMonth();
            const check = getCurYearAndMonth(`${this.year}-${this.month}-${day.value}`);
            return cur.year === check.year && cur.month === check.month && cur.date === check.date;
        } else {
            return false;
        }
    }
    isTheChecked(day) {
        if (day.type === 0) {
            const cur = getCurYearAndMonth(this.checkValue);
            const check = getCurYearAndMonth(`${this.year}-${this.month}-${day.value}`);
            return cur.year === check.year && cur.month === check.month && cur.date === check.date;
        } else {
            return false;
        }
    }

    connectedCallback() {
        console.log(this.pane, document.querySelector(".calendar-body"), 'document.querySelector(".calendar-body")');
        if (this.pane) this.init();
    }
}
