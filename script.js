document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("chatBox").innerHTML = "SmartDesk AI is ready. Start chatting below!";
});

document.getElementById("sendBtn").addEventListener("click", function () {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const userMessage = input.value.trim();
    if (userMessage === "") {
        return;
    }

    chatBox.innerHTML += "<p><b>You:</b> " + userMessage + "</p>";
    chatBox.innerHTML += "<p><b>AI:</b> I received: " + userMessage + "</p>";
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
});