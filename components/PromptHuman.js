import {LitElement,html,css} from 'https://cdn.skypack.dev/lit';



export class PromptHuman extends LitElement {
    static get properties() {
        return {
            text : {type: String}
        }
    }
    static styles = css` .human-bubble {
    align-items: flex-end;
    display: flex;
    flex-flow: row-reverse;
    } 
    .human-bubble >img{
            height: 1.8rem;
            bottom: 5px;
            left: 3px;} 
        #prompt-h{
            font-weight: bold;
            font-size: 1rem;
            background-color: var(--fill-orange);
            color: var(--fill-white);
            padding: 1.2rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 50px;
            border-bottom-right-radius: initial;}`

    constructor() {
        super();
        this.text = "";
    }
    render() {
        return html`<div class="human-bubble">
            <img src="../images/chef.png" alt="">
            <p id="prompt-h">${this.text}</p>

        </div>`;
    }


}
customElements.define('prompt-human',PromptHuman);

