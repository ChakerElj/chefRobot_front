import {LitElement,html,css} from 'https://cdn.skypack.dev/lit';

export class RobotReply extends LitElement {

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
            
        }
        .loader {
            border: 2px solid #f3f3f3; /* Light grey */
            border-top: 2px solid var(--fill-orange); /* Blue */
            border-radius: 50%;
            width: 20px;
            height: 20px;
            margin-bottom: 2rem;
            display: inline-block;
            animation: spin 2s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }`

    constructor() {
        super();
        this.text = "I will generat your recipe"
    }
    render(){
        return html`
                <div class="robot-bubble">
                    <img src="../images/bot.png" alt="">
                    <p id="prompt">${this.text}</p>
                    <div class="loader">
                        
                    </div>

                </div>
            `
    }

}
customElements.define("robot-reply",RobotReply)