// Netlify Serverless Function for Secure AI Calls using Environment Variables
// GEMINI_API_KEY is configured in Netlify Dashboard: Site Configuration > Environment Variables

exports.handler = async function(event, context) {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY;

    if (!apiKey) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                error: 'GEMINI_API_KEY environment variable is not configured in Netlify dashboard.' 
            })
        };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        const { action, reportMarkdown, language = 'en', customPrompt } = body;

        let systemPrompt = '';
        const langName = language === 'fr' ? 'French' : 'English';

        if (action === 'explain') {
            systemPrompt = `You are an AI engineering assistant for Mohammed El Baraka's portfolio. Using the following technical project report, provide a clear, structured 3-paragraph explanation: 1. Core Engineering Problem & Context, 2. Technical & Mathematical Architecture (algorithms/tools), 3. Key Results & Value. Write in ${langName}.\n\nReport:\n${reportMarkdown || ''}`;
        } else if (action === 'summarize') {
            systemPrompt = `You are an AI assistant for Mohammed El Baraka's engineering portfolio. Using the following technical project report, provide a punchy 3-bullet executive summary covering what was built, algorithms used, and measurable results. Use bold keywords. Write in ${langName}.\n\nReport:\n${reportMarkdown || ''}`;
        } else if (customPrompt) {
            systemPrompt = `You are an AI engineering assistant for Mohammed El Baraka's portfolio. Answer the following question based on the project report in ${langName}.\n\nQuestion: ${customPrompt}\n\nReport:\n${reportMarkdown || ''}`;
        } else {
            systemPrompt = `Summarize this engineering project report in ${langName}:\n\n${reportMarkdown || ''}`;
        }

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;

        const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: systemPrompt }] }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            return {
                statusCode: response.status,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: `Gemini API error: ${errorText}` })
            };
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';

        return {
            statusCode: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ success: true, text })
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: err.message || 'Internal Server Error' })
        };
    }
};
