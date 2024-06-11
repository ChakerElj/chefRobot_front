import {LitElement,html,css} from 'https://cdn.skypack.dev/lit';

export class RobotPrompot extends LitElement {

    static get properties(){
        return {
            text : {type : String}
        }
    }

    static styles = css`
        .robot-bubble {
            align-items: flex-end;
            display: flex;
        }
        .robot-bubble > img {
            height: 1.8rem;
            bottom: 5px;
            left: 3px;
        }
        #prompt {
            font-weight: bold;
            font-size: 1rem;
            background-color: #FEFBF6;
            padding: 1.2rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 50px;
            border-bottom-left-radius: initial;
            color: var(--fill-black-2);
            
        }`

        constructor() {
            super();
            this.text = "Give me your recipe name"
        }
        render(){
            return html`
                <div class="robot-bubble">
                    <img src="../images/bot.png" alt="">
                    <p id="prompt">${this.text}</p>

                </div>
            `
        }

}
customElements.define("robot-prompt",RobotPrompot)