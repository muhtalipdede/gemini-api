const { generateContent } = require('../client/gemini');

const contentController = {
    async generate(req, res) {
        const { text } = req.body;
        const response = await generateContent(text);
        res.json(response);
    }
};

module.exports = contentController;