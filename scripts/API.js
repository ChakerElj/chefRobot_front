import {PromptHuman}  from "../components/PromptHuman.js" ;
const API = {
    url : `http://localhost:8082/recipechat`,
    chatbotResponse : async (message) => {
        let url = new URL("http://localhost:8082/recipechat");
        url.searchParams.append('message', message);
        const result = await fetch(url);
            return await result.text();

    }
}
export default API ;