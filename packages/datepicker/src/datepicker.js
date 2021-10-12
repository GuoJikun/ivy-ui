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
            .calendar {
                padding: 10px;
                position: absolute;
                background-color: white;
                z-index: 10;
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
            </style>
            <div class="input">
                <input type="text" readonly />
            </div>
            <div class="calendar">
                <div class="calendar-header">
                    <div class="calendar-header-inner">
                        <div>
                            <el-icon name="d-arrow-left" @click.native="prevYear"></el-icon>
                            <el-icon name="arrow-left" @click.native="prevMonth"></el-icon>
                        </div>
                        <div class="calendar-header-date">{{ curYearAndMonth }}</div>
                        <div>
                            <el-icon name="arrow-right" @click.native="nextMonth"></el-icon>
                            <el-icon name="d-arrow-right" @click.native="nextYear"></el-icon>
                        </div>
                    </div>
                    <div class="calendar-header-utils">
                        <el-button @click="goCurDate" type="text">今天</el-button>
                    </div>
                </div>
                <div class="calendar-body">
                    <ul class="calendar-body-inner">
                        <li class="calendar-body-inner-item calendar-body-inner-item-title">周日</li>
                        <li class="calendar-body-inner-item calendar-body-inner-item-title">周一</li>
                        <li class="calendar-body-inner-item calendar-body-inner-item-title">周二</li>
                        <li class="calendar-body-inner-item calendar-body-inner-item-title">周三</li>
                        <li class="calendar-body-inner-item calendar-body-inner-item-title">周四</li>
                        <li class="calendar-body-inner-item calendar-body-inner-item-title">周五</li>
                        <li class="calendar-body-inner-item calendar-body-inner-item-title">周六</li>
                        
                    </ul>
                </div>
            </div>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "closed",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.days = [];
        this.date = null;
        this.month = null;
        this.year = null;
        this.init();
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
        this.days = this.generatorCalenderPanel();
    }
    generatorCalenderPanel() {
        return generatorMountDay(this.month, this.year);
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
        console.log(this.value);
    }
}
