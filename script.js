const input = document.getElementById("myInput");
const message = document.getElementById("message");
const responseDiv = document.getElementById("response");
let timeoutId = null;

input.addEventListener("keydown", async (event) => {
  if (event.key === "Enter" && input.value.trim() !== "") {
    console.log("hi");
    const userInput = input.value.trim();

    // Show message
    clearTimeout(timeoutId);
    message.classList.remove("hidden");
    timeoutId = setTimeout(() => {
      message.classList.add("hidden");
    }, 3000);

    // Disable input while waiting
    input.disabled = true;
    responseDiv.textContent = "Thinking...";

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer [api key here]"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
          temperature: 0.7
        })
      });

      const data = await res.json();
      console.log("Raw API response:", data);
      const reply = data.choices?.[0]?.message?.content || "No response.";
      responseDiv.textContent = reply;
    } catch (err) {
      console.error(err);
      responseDiv.textContent = "Failed to fetch OpenAI response.";
    }

    input.disabled = false;
  }
});

setInterval(() => {
  const blossom = document.createElement("div");
  blossom.classList.add("blossom");
  blossom.textContent = "🌸";
  blossom.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(blossom);

  setTimeout(() => {
    blossom.remove();
  }, 5000);
}, 300);
