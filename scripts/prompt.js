import API from "./API.js"

export function writeHumanPrompt() {
    let promptText = document.querySelector("#chatbot");
    const sendButton = document.querySelector(".send-icon");
    promptText.addEventListener("input", () => {

        let humanPrompt = promptText.value;
        const sendButton = document.querySelector(".send-icon");
        if (humanPrompt.length === 0 || !humanPrompt) {
            sendButton.disabled = true ;
        }
        else {
            sendButton.disabled = false;
        }
    })
    sendButton.addEventListener("click",displayPrompt);

}
function displayPrompt (prompt) {
    const chatbotContainer = document.querySelector(".human-container");
    const humanPrompt = document.createElement("prompt-human");
    humanPrompt.text = document.querySelector("#chatbot").value ;
    chatbotContainer.appendChild(humanPrompt);
    document.querySelector("#chatbot").value = null;
    getRobotData(humanPrompt.text).then(r => console.log(r));
}

function populateData(recipeObject) {
   const ingredients = recipeObject.ingredients.join(", ");
   const ingredientsContainer = document.querySelector(".list-of-ingredients");
   ingredientsContainer.textContent = ingredients ;
   let stepsHTML = '';
   const stepsContainer = document.querySelector(".steps-recipe");

   recipeObject.steps.forEach((step) =>{

       stepsHTML += `<li>${step}</li> `
   });
   stepsContainer.innerHTML = stepsHTML;
   document.querySelector("#timer").textContent = recipeObject.duration;
   document.querySelector("#recipe-img").src=recipeObject.image;

}

function generateTimerAndRecipeSection(recipeObject){
    const recipeContainer = document.querySelector(".recipe-section");
    recipeContainer.style.display = "grid";
    document.querySelector("robot-reply").remove();
    document.querySelector(".timer-section").style.display = "flex"
    document.querySelector(".main-container").style.height = "100%";
    document.querySelector(".chatbot-section").style.height = "100%";
    document.querySelector(".chatbot-section").style.display = "block";
    document.querySelector(".main-container").style.gridTemplateColumns = "2fr 1fr";
    document.querySelector(".main-container").style.marginTop = "1rem ";
    populateData(recipeObject)
}

function convertJson(chatResponse) {


        try {
            return JSON.parse(chatResponse) ;
        } catch (error) {
            console.error('Parsing error:', error);
        }

}

async function getRobotData(humanPrompt){

  const robotReply = document.createElement("robot-reply");
    const robotContainer = document.querySelector(".robot-container");
    robotContainer.appendChild(robotReply);
    robotReply.text = "Sure i will generate you this recipe" ;
  const chatResponse = await  API.chatbotResponse(humanPrompt).then((r) => {
      console.log(r.substring(r.indexOf("{"),r.indexOf("}")+1));

      let recipeObject = convertJson(r.substring(r.indexOf("{"),r.indexOf("}")+1));
      generateTimerAndRecipeSection(recipeObject)
  });



}


