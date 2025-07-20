//chatbot
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler")
let userMessage;
const API_KEY="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"; 
const createChatLi = (message, className) => {

const chatLi = document.createElement("li");

chatLi.classList.add("chat", className);

let chatContent = className === "outgoing" ? `<p>${message}</p>`:`<span class="material-symbols-outlined"> robot_2</span><p>${message}</p>`;
chatLi.innerHTML=chatContent;
return chatLi;
}
const generateResponse= (incomingChatLi) =>{
    const API_URL ="http://localhost:11434/api/chat";
    const messageElement =incomingChatLi.querySelector("p");
    console.log(API_KEY);
    const requestOptions = {
        method: "POST",
        mode: 'cors',
        headers:{
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "llama3.2",
            messages: [{role: "user",content: userMessage}],
            stream: false
        })
    }
    //send post req to api ,to get response
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        console.log(data)
        messageElement.textContent = data.message.content;
    }).catch((error) => {
        console.log(error)
        messageElement.textContent = "oops! something went wrong. please Try again.";
    })
}

const handleChat = () => {

userMessage = chatInput.value.trim();

if(!userMessage) return;

chatbox.appendChild(createChatLi(userMessage, "outgoing"));

setTimeout(()=> {
    //display thinking message.
    const incomingChatLi= createChatLi("Thinking...", "incoming")
    chatbox.appendChild(incomingChatLi);
    generateResponse(incomingChatLi);

},600);


}

sendChatBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click",() => document.body.classList.toggle("show-chatbot"));