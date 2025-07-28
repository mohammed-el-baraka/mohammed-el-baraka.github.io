// File path: netlify/functions/gemini.js

// This function runs on a server, not in the browser.
// Your API key is safe here.
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
exports.handler = async function (event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) {
        const errorData = await response.text();
        console.error('Gemini API Error:', errorData);
        return { statusCode: response.status, body: `API Error: ${errorData}` };
    }

    const result = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error('Serverless function error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
