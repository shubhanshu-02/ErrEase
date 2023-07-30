import { Configuration, OpenAIApi } from 'openai';
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix =
  'I got this error while coding. Tell me why this happened in 5 lines.\n';
const finalPromptPrefix = 'I got this error while coding. Only tell me what should be done to fix this error 3 lines.\n';

const generateAction = async (req, res) => {
  const { inputError, inputLanguage } = req.body;

  // Run first prompt
  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `${basePromptPrefix}
    Error:${inputError}\n
    Language:${inputLanguage}\n`,
    temperature: 0.7,
    max_tokens: 100,
  });

  const baseChoice = baseCompletion.data.choices.pop();

  // Run second prompt with prefix, including inputLanguage
  const finalPrompt = `${finalPromptPrefix}
  Error:${inputError}\n
  Language:${inputLanguage}\n`;


  const prefixCompletion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: finalPrompt,
    temperature: 0.7,
    max_tokens: 150,
  });

  const finalChoice = prefixCompletion.data.choices.pop();

  res.status(200).json({ baseChoice, finalChoice });
};

export default generateAction;
