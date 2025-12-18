const languageSelect = document.getElementById("languageSelect");

async function sendMessage() {
  const userMsg = input.value.trim();
  if (!userMsg) return;

  addMessage(userMsg, "user");
  input.value = "";

  const selectedLang = languageSelect.value;

  try {
    const res = await fetch("https://YOUR-BACKEND-URL/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userMsg,
        language: selectedLang
      })
    });

    const data = await res.json();
    addMessage(data.reply, "bot");

  } catch {
    addMessage("⚠️ Server error", "bot");
  }
}
