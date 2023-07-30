import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Info from './info';
import LakshyaPNG from '../assets/hey_png_png.png';
const Home = () => {
  const [newsItems, setNewsItems] = useState([
    'Breaking News: ErrEase v1.0.1 Released!🚀',
    '🚩Notice: This project uses the free tier of OpenAI API which have daily limit for requests. Please use it sincerely and be patient if the API is slow to respond.🫶',
    'New Feature: Multi-language Support Added✅ ',
    '🚩Notice: This project uses the free tier of OpenAI API which have daily limit for requests. Please use it sincerely and be patient if the API is slow to respond.🫶',
    '🚩Looking for Contributors - Contribute to ErrEase🫂',
    '🚩Notice: This project uses the free tier of OpenAI API which have daily limit for requests. Please use it sincerely and be patient if the API is slow to respond.🫶'
    ,'Breaking News: ErrEase v1.0.1 Released!🚀',
    '🚩Notice: This project uses the free tier of OpenAI API which have daily limit for requests. Please use it sincerely and be patient if the API is slow to respond.🫶',
    'New Feature: Multi-language Support Added✅ ',
    '🚩Notice: This project uses the free tier of OpenAI API which have daily limit for requests. Please use it sincerely and be patient if the API is slow to respond.🫶',
    '🚩Looking for Contributors - Contribute to ErrEase🫂',
    '🚩Notice: This project uses the free tier of OpenAI API which have daily limit for requests. Please use it sincerely and be patient if the API is slow to respond.🫶'
    
  ]);
  const getDuplicateNewsItems = (items, count) => {
    const duplicatedItems = [];
    for (let i = 0; i < 45; i++) {
      duplicatedItems.push(...items);
    }
    return duplicatedItems;
  };

  const infiniteNewsItems = getDuplicateNewsItems(newsItems, 3);
  const [inputError, setinputError] = useState('');
  const [inputLanguage, setInputLanguage] = useState('');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const onInputChange = (event) => {
    setinputError(event.target.value);
  };

  const onInputLanguageChange = (event) => {
    setInputLanguage(event.target.value);
  };

  const generateAction = useCallback(async () => {
    if (isGenerating) return;

    console.log('input:', inputError);
    console.log('inputLanguage:', inputLanguage);

    setIsGenerating(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputError, inputLanguage }), // Include inputLanguage in the body
    });
    const data = await response.json();
    const { baseChoice, finalChoice } = data;
    setOutput(
      `Meaning:${baseChoice.text}
      \nSolution:${finalChoice.text}
      `
    );

    setIsGenerating(false);
  }, [inputError, inputLanguage, isGenerating]);


  useEffect(() => {
    const keydownHandler = async (event) => {
      if ((event.metaKey || event.ctrlKey) && event.code === 'Enter') {
        event.preventDefault();
        await generateAction();
      }
    };

    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [generateAction]);

  return (
    <div className="root">
      <div className="container">
        <div className="header">
        </div>
        <div>
          <div className="header-title">
            <h1>ErrEase</h1>
          </div>
          <div className="header-subtitle">
            <h2> Simplifying Error Understanding and Solutions for Developers with GPT</h2>
          </div>
        </div>
        <div className="prompt-container">
          {/* Textarea for main input */}
          <textarea
            className="prompt-box"
            value={inputError}
            onChange={onInputChange}
            placeholder="Enter the error you got..."
          />

          {/* Input field for inputLanguage */}
          <textarea
            type="text"
            className="prompt-box-language"
            value={inputLanguage}
            onChange={onInputLanguageChange}
            placeholder="Enter tech stack / language used(optional)..."
          />
          <div className="prompt-buttons">

            <a
              className={
                isGenerating ? 'generate-button loading' : 'generate-button'
              }
              onClick={generateAction}
            >
              <div className="generate">
                {isGenerating ? <span class="loader"></span> : <p>Get Error Info 🔎</p>}
              </div>
            </a>
          </div>
        </div>
        {output && (
          <div className="output">
            <div className="output-header-container">
              <div className="output-header">
                <h3>Error Meaning and Solution</h3>
              </div>
            </div>
            <div className="output-content">
              <p>{output}</p>
            </div>
          </div>
        )}
        
        <div>
        </div>
        <div className="ticker-container">
          <div className="ticker">
            {infiniteNewsItems.map((item, index) => (
              <div key={index} className="ticker__item">
                {item}
              </div>
            ))}
          </div>
        </div>
        

        < Info />

      </div>
      <div className="badge-container grow">
        <a
          href="https://lakshyakandpal.bio.link/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <p>😀dev dev dev</p>
          </div>
        </a>
      </div>

    </div>
  );
};

export default Home;