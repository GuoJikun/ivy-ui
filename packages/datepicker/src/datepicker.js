import { getCurYearAndMonth, generatorMountDay } from "./utils.js";
import { $_border_base, $_color_primary } from "../../ivy-ui/src/utils/var.js";
import dayjs from "dayjs";

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
                display: none;
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
                padding: 0 12px;
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
            .wrap-body-item,
            .wrap-body-item-title {
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
            .wrap-body-item:hover{
                background: var(--color-primary, ${$_color_primary});
                color: white;
            }

            /*箭头*/
            .arrow-btn {
                display: inline-flex;
                overflow: hidden;
                width: 14px;
                height: 14px;
                text-align: center;
                line-height: 14px;
                cursor: pointer;
            }
            .arrow-btn:hover{
                color: var(--color-primary, ${$_color_primary});
            }
            </style>
            
            <div class="input">
                <input type="text" readonly  class="input-inner" />
            </div>
            <div class="wrap">
                <div class="wrap-header">
                    <div>
                        <span class="arrow-btn prev-year">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 36L12 24L24 12" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 36L24 24L36 12" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                        <span class="arrow-btn prev-month">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M31 36L19 24L31 12" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </div>
                    <span class="wrap-header-date"></span>
                    <div>
                        <span class="arrow-btn next-month">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M19 12L31 24L19 36" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                        <span class="arrow-btn next-year">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M12 12L24 24L12 36" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 12L36 24L24 36" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                    </div>
                </div>
                <div class="wrap-body"></div>
            </div>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$input = this._shadowRoot.querySelector(".input");
        this.$inputText = this._shadowRoot.querySelector(".input-inner");
        this.$body = this._shadowRoot.querySelector(".wrap");
        this.pane = this._shadowRoot.querySelector(".wrap-body");
        this.$title = this._shadowRoot.querySelector(".wrap-header-date");
        this.$prevMonth = this._shadowRoot.querySelector(".prev-month");
        this.$nextMonth = this._shadowRoot.querySelector(".next-month");
        this.$prevYear = this._shadowRoot.querySelector(".prev-year");
        this.$nextYear = this._shadowRoot.querySelector(".next-year");

        this.initData();
    }

    static get observedAttributes() {
        return ["value", "placeholder", "format"];
    }

    connectedCallback() {
        this.$input.addEventListener("click", () => {
            this.$body.style.display = "block";
        });

        this.pane.addEventListener("click", ev => {
            const classNameList = ev.target.classList || [];
            if ([...classNameList].includes("wrap-body-item")) {
                const type = ev.target.getAttribute("type");
                const value = ev.target.textContent;
                this.curDateClick({ type, value });
                this.$body.style.display = "none";
            }
        });
        window.addEventListener(
            "click",
            ev => {
                const target = ev.target;
                if (!this.contains(target)) {
                    this.$body.style.display = "none";
                }
            },
            true
        );
        this.$prevMonth.addEventListener("click", () => {
            this.prevMonth();
        });
        this.$nextMonth.addEventListener("click", () => {
            this.nextMonth();
        });
        this.$prevYear.addEventListener("click", () => {
            this.prevYear();
        });
        this.$nextYear.addEventListener("click", () => {
            this.nextYear();
        });
        this.initDate();
        this.render();
    }

    get value() {
        return this.getAttribute("value") || new Date();
    }
    set value(text) {
        this.setAttribute("value", text);
    }

    get format() {
        return this.getAttribute("format") || "YYYY-MM-DD";
    }
    set format(text) {
        this.setAttribute("format", text);
    }

    get placeholder() {
        return this.getAttribute("placeholder");
    }
    set placeholder(text) {
        this.setAttribute("placeholder", text);
    }

    initData() {
        this.year = null;
        this.month = null;
        this.date = null;
        this.previewYear = null;
        this.previewMonth = null;
    }

    getDateText() {
        const dateObj = dayjs(`${this.year}-${this.month}-${this.date}`);
        const cur = dateObj.format(this.format);
        return cur;
    }

    initDate() {
        const { month, year, date } = getCurYearAndMonth(this.value);
        this.year = this.previewYear = year;
        this.month = this.previewMonth = month;
        this.date = date;
    }

    render() {
        const data = this.generatorCalenderPanel();
        this.pane.innerHTML = data.join("");
        this.value = this.getDateText();
        this.$inputText.value = this.value;
        this.$title.innerText = `${this.previewYear}年${this.previewMonth}月${this.date}日`;
    }
    generatorCalenderPanel() {
        const data = generatorMountDay(this.previewMonth, this.previewYear);
        const dates = data.map(c => {
            if (c.type === 0 && c.value === this.date) {
                return `<div class="wrap-body-item is-active" type="${c.type}">${c.value}</div>`;
            } else {
                return `<div class="wrap-body-item" type="${c.type}">${c.value}</div>`;
            }
        });
        const start = `<div class="wrap-body-item-title">周日</div>
                        <div class="wrap-body-item-title">周一</div>
                        <div class="wrap-body-item-title">周二</div>
                        <div class="wrap-body-item-title">周三</div>
                        <div class="wrap-body-item-title">周四</div>
                        <div class="wrap-body-item-title">周五</div>
                        <div class="wrap-body-item-title">周六</div>`;

        return [start, ...dates];
    }
    nextMonth() {
        if (this.previewMonth === 12) {
            this.previewYear = this.previewYear + 1;
            this.previewMonth = 1;
        } else {
            this.previewMonth = this.previewMonth + 1;
        }
        this.render();
    }
    prevMonth() {
        if (this.previewMonth === 1) {
            this.previewYear = this.previewYear - 1;
            this.previewMonth = 12;
        } else {
            this.previewMonth = this.previewMonth - 1;
        }
        this.render();
    }
    nextYear() {
        this.previewYear = this.previewYear + 1;
        this.render();
    }
    prevYear() {
        this.previewYear = this.previewYear - 1;
        this.render();
    }
    curDateClick(item) {
        const { type, value } = item;
        this.date = parseInt(value);
        if (type === "-1") {
            this.prevMonth();
        } else if (type === "1") {
            this.nextMonth();
        } else {
            this.render();
        }
        this.year = this.previewYear;
        this.month = this.previewMonth;
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
}
