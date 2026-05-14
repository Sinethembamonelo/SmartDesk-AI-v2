// When page loads, everything is ready
window.onload = function () {
 
  // START BUTTON
  document.getElementById("startBtn").addEventListener("click", function () {
 
    const chatBox = document.getElementById("chatBox");
 
    chatBox.innerHTML =
      "<p><b>SmartDesk AI:</b> Ready 🤖 Start chatting below!</p>";
  });
 
  // SEND BUTTON
  document.getElementById("sendBtn").addEventListener("click", function () {
 
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
 
    const message = input.value.trim();
 
    if (message === "") return;
 
    // Show user message
    chatBox.innerHTML += "<p><b>You:</b> " + message + "</p>";
 
    // Simple AI response
    let response = "";
 
    if (message.toLowerCase() === "hi") {
      response = "Hello 👋 I am SmartDesk AI!";
    } 
    else if (message.toLowerCase() === "help") {
      response = "I can reply to messages like a basic assistant 🤖";
    } 
    else if (message.toLowerCase() === "finish project") {
      response = "Great job finishing your project 🎉";
    } 
    else {
      response = "I received: " + message;
    }
 
    chatBox.innerHTML += "<p><b>AI:</b> " + response + "</p>";
 
    // Clear input
    input.value = "";
 
    // Auto scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  });
 
};