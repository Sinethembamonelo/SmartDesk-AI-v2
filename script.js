window.onload = function () {
 
  document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("chatBox").innerHTML =
      "SmartDesk AI is ready 🤖 Start chatting below!";
  });
 
  document.getElementById("sendBtn").addEventListener("click", function () {
 
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
 
    const userMessage = input.value.trim();
 
    if (userMessage === "") return;
 
    chatBox.innerHTML += "<p><b>You:</b> " + userMessage + "</p>";
 
    let response = "";
 
    if (userMessage.toLowerCase() === "hi") {
      response = "Hello! I'm SmartDesk AI 🤖";
    }
    else if (userMessage.toLowerCase() === "finish project") {
      response = "Great job finishing your project 🎉";
    }
    else {
      response = "I received: " + userMessage;
    }
 
    chatBox.innerHTML += "<p><b>AI:</b> " + response + "</p>";
 
    input.value = "";
 
    chatBox.scrollTop = chatBox.scrollHeight;
  });
 
};