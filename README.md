

# ErrEase - Simplifying Error Understanding and Solutions for Developers

ErrEase is project designed to empower developers in their quest for bug-free code. As developers dive into the intricacies of programming, they often encounter perplexing error messages that can hinder progress and cause frustration. ErrEase comes to the rescue with its powerful implementation of the OpenAI GPT language model, providing developers with clear and concise explanations of these enigmatic error messages in plain, easy-to-understand language. Gone are the days of deciphering complex technical jargon, as ErrEase breaks down each error into simple terms, enabling developers of all levels to grasp the root cause instantly.

## Features

- **Error Understanding**: ErrEase helps developers understand error messages they encounter during coding.

- **Step-by-step Solutions**: Not only does ErrEase identify the problem, but it also offers step-by-step solutions and recommendations.

- **Multi-language Support**: ErrEase supports various programming languages, making it accessible to developers worldwide.

- **Free Tier**: ErrEase utilizes the free tier of the OpenAI API, encouraging developers to use it sincerely and patiently if the API is slow to respond.

## How to Use

1. Enter the error message you encountered in the main input box.

2. Optionally, provide the tech stack or programming language used in the secondary input box.

3. Click on the "Get Error Info" button to generate explanations and solutions.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/HiLakshya/ErrEase.git
cd ErrEase
```

2. Install the required dependencies.

```bash
npm install
```

3. Set up your OpenAI API key by creating a `.env` file at the root of the project and adding the following line:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual API key.

### Running the Application

Start the development server:

```bash
npm run dev
```

The application should now be running at `http://localhost:3000`.

### How it Works

- ErrEase uses the powerful GPT language model from OpenAI to generate explanations and solutions for the provided error messages.

- When you input an error message, ErrEase sends a request to the OpenAI API, which processes the input and generates responses.

- The responses are then presented to you, providing meaningful insights and actionable solutions.

### Contribute

- If you encounter any issues or have suggestions for improvements, feel free to [open an issue](https://github.com/HiLakshya/ErrEase/issues) or submit a pull request.

- Help us improve ErrEase by contributing your expertise to the project. We welcome contributions of all types, from bug fixes to new features.

## Credits

- This project was created by [Lakshya Kandpal](https://github.com/HiLakshya).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute this code as permitted by the license.

---

Thank you for your interest in ErrEase. Happy coding and bug hunting! 🚀🐛
```
