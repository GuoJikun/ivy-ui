import { $_border_radius, $_border_color_base, $_color_primary, $_shadow_base } from "../../ivy-ui/src/utils/var.js";

export default class TimePicker extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    position: relative;
                }
                .input {
                    position: relative;
                    display: inline-block;
                    width: 224px;
                    color: #cacaca;
                }
                .input-inner {
                    background-color: #fff;
                    background-image: none;
                    border-radius: var(--border-radius, ${$_border_radius});
                    border: 1px solid var(--border-color, ${$_border_color_base});
                    box-sizing: border-box;
                    color: #606266;
                    display: inline-block;
                    font-size: inherit;
                    height: 34px;
                    line-height: 34px;
                    outline: none;
                    padding: 0 30px 0 15px;
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    width: 100%;
                }
                .input-inner::-webkit-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .input-inner::-moz-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .input-inner:-moz-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .input-inner:-ms-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .input-inner:active,
                .input-inner:hover,
                .input-inner:focus {
                    border-color: var(--color-primary, ${$_color_primary});
                }
                .input-icon {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 6px;
                    z-index: 1;
                    pointer-events: none;
                    display: block;
                    width: 1em;
                    height: 1em;
                    vertical-align: -0.15em;
                    fill: currentColor;
                    overflow: hidden;
                }

                .drop {
                    display: inline-block;
                    position: absolute;
                    top: 42px;
                    left: 0;
                    z-index: 10;
                    border-radius: var(--border-radius, ${$_border_radius});
                    background-color: #ffffff;
                    line-height: 30px;
                    margin: 5 px 0;
                }

                .drop-wrap{
                    background-color: white;
                    box-shadow: var(--box-shadow, ${$_shadow_base});
                    border: 1px solid var(--border-color, ${$_border_color_base});
                    position: relative;
                    box-sizing: border-box;
                    border-radius: var(--border-radius, ${$_border_radius});
                }
                .drop-wrap-scroll {
                    padding: 5px 0;
                }

                .drop-wrap-item {
                    display: inline-block;
                    width: 60px;
                    height: 200px;
                    overflow-y: scroll;
                }

                .time-item{
                    margin:0;
                    line-height: 30px;
                    height: 30px;
                    padding: 0 10px;
                }
                

                :host([disabled]) {
                    cursor: not-allowed;
                }
                :host([disabled]) .input-inner {
                    background-color: #f5f7fa;
                    border-color: #e4e7ed;
                    color: #c0c4cc;
                    cursor: not-allowed;
                }

                .arrow-top,
                .arrow-top::after {
                    position: absolute;
                    display: block;
                    width: 0;
                    height: 0;
                    border-color: transparent;
                    border-style: solid;
                    border-width: 6px;
                }
                
                .arrow-top {
                    z-index: 1;
                    filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
                    top: -6px;
                    left: 37px;
                    margin-right: 3px;
                    border-top-width: 0;
                    border-bottom-color: var(--border-color, ${$_border_color_base});
                }
                
                .arrow-top::after {
                    content: ' ';
                    top: 1px;
                    margin-left: -6px;
                    border-top-width: 0;
                    border-bottom-color: #ffffff;
                }

                .drop-footer{
                    text-align: right;
                    font-size: 12px;
                    border-top: 1px solid var(--border-color, ${$_border_color_base});
                }
                .drop-footer>span:last-child {
                    color: var(--color-primary, ${$_color_primary});
                    margin-left: 12px;
                }
            </style>
            <div class="input">
                <input class="input-inner" />
                <div class="input-icon">
                    <slot>
                        <svg viewBox="0 0 1024 1024">
                            <path d="M512 896q163.008-4 271.488-112.512T896 512q-4-163.008-112.512-271.488T512 128q-163.008 4-271.488 112.512T128 512q4 163.008 112.512 271.488T512 896z m0 64q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960zM480 256q14.016 0 23.008 8.992T512 288v256q0 14.016-8.992 23.008T480 576t-23.008-8.992T448 544V288q0-14.016 8.992-23.008T480 256z m0 256h256q32 0 32 32t-32 32h-256q-32 0-32-32t32-32z"  ></path>
                        </svg>
                    </slot>
                </div>
            </div>
            <div class="drop">
                <div class="arrow-top"></div>
                <div class="drop-wrap">
                    <div class="drop-wrap-scroll">
                        <div class="drop-wrap-item">
                            <p class="time-item">00</p>
                            <p class="time-item">01</p>
                            <p class="time-item">02</p>
                            <p class="time-item">03</p>
                            <p class="time-item">04</p>
                            <p class="time-item">05</p>
                            <p class="time-item">06</p>
                            <p class="time-item">07</p>
                            <p class="time-item">08</p>
                            <p class="time-item">09</p>
                            <p class="time-item">10</p>
                            <p class="time-item">11</p>
                            <p class="time-item">12</p>
                            <p class="time-item">13</p>
                            <p class="time-item">14</p>
                            <p class="time-item">15</p>
                            <p class="time-item">16</p>
                            <p class="time-item">17</p>
                            <p class="time-item">18</p>
                            <p class="time-item">19</p>
                            <p class="time-item">20</p>
                            <p class="time-item">21</p>
                            <p class="time-item">22</p>
                            <p class="time-item">23</p>
                        </div>
                        <div class="drop-wrap-item">
                            <p class="time-item">00</p>
                            <p class="time-item">01</p>
                            <p class="time-item">02</p>
                            <p class="time-item">03</p>
                            <p class="time-item">04</p>
                            <p class="time-item">05</p>
                            <p class="time-item">06</p>
                            <p class="time-item">07</p>
                            <p class="time-item">08</p>
                            <p class="time-item">09</p>
                            <p class="time-item">10</p>
                            <p class="time-item">11</p>
                            <p class="time-item">12</p>
                            <p class="time-item">13</p>
                            <p class="time-item">14</p>
                            <p class="time-item">15</p>
                            <p class="time-item">16</p>
                            <p class="time-item">17</p>
                            <p class="time-item">18</p>
                            <p class="time-item">19</p>
                            <p class="time-item">20</p>
                            <p class="time-item">21</p>
                            <p class="time-item">22</p>
                            <p class="time-item">23</p>
                            <p class="time-item">24</p>
                            <p class="time-item">25</p>
                            <p class="time-item">26</p>
                            <p class="time-item">27</p>
                            <p class="time-item">28</p>
                            <p class="time-item">29</p>
                            <p class="time-item">30</p>
                            <p class="time-item">31</p>
                            <p class="time-item">32</p>
                            <p class="time-item">33</p>
                            <p class="time-item">34</p>
                            <p class="time-item">35</p>
                            <p class="time-item">36</p>
                            <p class="time-item">37</p>
                            <p class="time-item">38</p>
                            <p class="time-item">39</p>
                            <p class="time-item">40</p>
                            <p class="time-item">41</p>
                            <p class="time-item">42</p>
                            <p class="time-item">43</p>
                            <p class="time-item">44</p>
                            <p class="time-item">45</p>
                            <p class="time-item">46</p>
                            <p class="time-item">47</p>
                            <p class="time-item">48</p>
                            <p class="time-item">49</p>
                            <p class="time-item">50</p>
                            <p class="time-item">51</p>
                            <p class="time-item">52</p>
                            <p class="time-item">53</p>
                            <p class="time-item">54</p>
                            <p class="time-item">55</p>
                            <p class="time-item">56</p>
                            <p class="time-item">57</p>
                            <p class="time-item">58</p>
                            <p class="time-item">59</p>
                        </div>
                        <div class="drop-wrap-item">
                            <p class="time-item">00</p>
                            <p class="time-item">01</p>
                            <p class="time-item">02</p>
                            <p class="time-item">03</p>
                            <p class="time-item">04</p>
                            <p class="time-item">05</p>
                            <p class="time-item">06</p>
                            <p class="time-item">07</p>
                            <p class="time-item">08</p>
                            <p class="time-item">09</p>
                            <p class="time-item">10</p>
                            <p class="time-item">11</p>
                            <p class="time-item">12</p>
                            <p class="time-item">13</p>
                            <p class="time-item">14</p>
                            <p class="time-item">15</p>
                            <p class="time-item">16</p>
                            <p class="time-item">17</p>
                            <p class="time-item">18</p>
                            <p class="time-item">19</p>
                            <p class="time-item">20</p>
                            <p class="time-item">21</p>
                            <p class="time-item">22</p>
                            <p class="time-item">23</p>
                            <p class="time-item">24</p>
                            <p class="time-item">25</p>
                            <p class="time-item">26</p>
                            <p class="time-item">27</p>
                            <p class="time-item">28</p>
                            <p class="time-item">29</p>
                            <p class="time-item">30</p>
                            <p class="time-item">31</p>
                            <p class="time-item">32</p>
                            <p class="time-item">33</p>
                            <p class="time-item">34</p>
                            <p class="time-item">35</p>
                            <p class="time-item">36</p>
                            <p class="time-item">37</p>
                            <p class="time-item">38</p>
                            <p class="time-item">39</p>
                            <p class="time-item">40</p>
                            <p class="time-item">41</p>
                            <p class="time-item">42</p>
                            <p class="time-item">43</p>
                            <p class="time-item">44</p>
                            <p class="time-item">45</p>
                            <p class="time-item">46</p>
                            <p class="time-item">47</p>
                            <p class="time-item">48</p>
                            <p class="time-item">49</p>
                            <p class="time-item">50</p>
                            <p class="time-item">51</p>
                            <p class="time-item">52</p>
                            <p class="time-item">53</p>
                            <p class="time-item">54</p>
                            <p class="time-item">55</p>
                            <p class="time-item">56</p>
                            <p class="time-item">57</p>
                            <p class="time-item">58</p>
                            <p class="time-item">59</p>
                        </div>
                    </div>
                    <div class="drop-footer">
                        <span>取消</span>
                        <span>确定</span>
                    </div>
                </div>
                
            </div>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["value", "disabled", "placeholder"];
    }

    set value(value) {
        this.setAttribute("value", value);
    }
    get value() {
        return this.getAttribute("value");
    }

    set disabled(value) {
        this.setAttribute("disabled", value);
    }
    get disabled() {
        return this.getAttribute("disabled");
    }

    set placeholder(value) {
        this.setAttribute("placeholder", value);
    }
    get placeholder() {
        return this.getAttribute("placeholder");
    }

    connectedCallback() {
        this.$input = document.querySelector(".input-inner");
        this.$drop = document.querySelector(".drop");
        this.$input.addEventListener("click", ev => {
            // this.dispatchEvent(new CustomEvent('onchange'))
            // this.
        });
    }
}
