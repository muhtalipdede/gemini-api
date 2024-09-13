const dotenv = require('dotenv');
dotenv.config();

const geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/';
const model = 'gemini-1.5-flash';
const modelUrl = `${geminiUrl}${model}`;
const apiKey = process.env.API_KEY;

const generateContent = async (text) => {
    const body = {
        contents: [{
            parts: [{
                text,
            }],
        }],
    };
    const response = await fetch(modelUrl + ':generateContent' + `?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return response.json();
}

module.exports = {
    generateContent,
};