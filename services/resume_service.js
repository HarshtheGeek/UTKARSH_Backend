import axios from "axios";

const apikey = process.env.API_KEY

async function occupationAnalyzer(occupationString) {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: `You are a vocational skill assessor.

Generate exactly 7 short, real-life, scenario-based questions for:

Occupation: ${occupationString}
Input: ${occupationString}

LANGUAGE:

* Detect input language and reply in same language
* If mixed (Hinglish), reply similarly
* If unclear, use simple Hindi
* Keep language conversational and easy

RULES:

* No theory or definitions
* Test practical experience & decision-making
* Easy for skilled worker, hard for beginner
* Max 15–18 words per question
* Answerable in 1–2 spoken sentences

COVER:

* 2 troubleshooting
* 2 job scenarios
* 1 safety
* 1 tools/material
* 1 experience-based judgment

OUTPUT:

* Only numbered list (1–7)
* No extra text`
              }
            ]
          }
        ]
      },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 20000
      }
    );

    // Extract text safely
    const result =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    return result;
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    throw error;
  }
}

export default occupationAnalyzer;