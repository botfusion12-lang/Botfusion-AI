router.post("/", async (req, res) => {
  try {
    const { message, language } = req.body;

    const systemPrompt =
      language === "auto"
        ? "Detect the user's language and reply in the same language."
        : `Reply ONLY in ${language} language.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are BotFusion AI.
${systemPrompt}
Support 60+ languages.
Be friendly and clear.
`
        },
        { role: "user", content: message }
      ],
    });

    res.json({ reply: completion.choices[0].message.content });

  } catch (err) {
    res.status(500).json({ reply: "Server error" });
  }
});
