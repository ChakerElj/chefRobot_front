import {writeHumanPrompt} from "./prompt.js";
import {PromptHuman} from "../components/PromptHuman.js";
import {RobotPrompot} from "../components/RobotPrompot.js";
import {RobotReply} from "../components/RobotReply.js";

window.addEventListener("DOMContentLoaded",()=>{
        const recipeContainer = document.querySelector(".recipe-section");
        recipeContainer.style.display = "none";
        document.querySelector(".timer-section").style.display = "none"
        document.querySelector(".main-container").style.height = "100%";
        document.querySelector(".chatbot-section").style.height = "500px";
        document.querySelector(".main-container").style.gridTemplateColumns = "1fr";
        document.querySelector(".main-container").style.margin = "2rem ";


        writeHumanPrompt();
    }

    )

