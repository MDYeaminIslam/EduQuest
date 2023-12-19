import React, { useState } from 'react';
import * as openai from 'openai';
// import { Appwrite, FunctionRuntime, PromiseResult } from 'appwrite';

// const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY;
// const APPWRITE_FUNCTION_ID = process.env.REACT_APP_APPWRITE_FUNCTION_ID; // Replace with your function ID

// const appwrite = new Appwrite(); // Initialize Appwrite

// // Appwrite function (optional)
// async function getAnswerFromOpenAI(question: string): Promise<string> {
//   const response = await openai.completion.create({
//     model: 'GPT-3.5', // Replace with your chosen model
//     prompt: question,
//     apiKey: OPENAI_KEY,
//   });
//   return response.data.text;
// }

// function App() {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setQuestion(event.target.value);
//   };

//   const handleSubmit = async () => {
//     if (APPWRITE_FUNCTION_ID) {
//       // Use Appwrite function (optional)
//       const result = await appwrite.functions.execute(APPWRITE_FUNCTION_ID, {
//         question,
//       }) as PromiseResult<string>;
//       setAnswer(result.data);
//     } else {
//       // Direct OpenAI call
//       const answerFromOpenAI = await getAnswerFromOpenAI(question);
//       setAnswer(answerFromOpenAI);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={question} onChange={handleChange} />
//       <button onClick={handleSubmit}>Ask your question</button>
//       {answer && <p>{answer}</p>}
//     </div>
//   );
// }

//export default App;
