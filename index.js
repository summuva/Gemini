const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({model:"gemini-pro"})
    const prompt = "crea un poema a la luna"
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    console.log(text)
}

run()
