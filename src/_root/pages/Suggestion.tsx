import React, { useState } from 'react';
import { Occupation, Difficulty, occupations } from './Suggestion_data'; // Import the data from Suggestion_data.tsx

function Suggestion() {
  const [selectedOccupation, setSelectedOccupation] =
    useState<Occupation | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);
  const [suggestions, setSuggestions] = useState<string[] | null>(null);

  const handleOccupationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedOccupationValue = event.target.value;
    const chosenOccupation = occupations.find(
      (occupation) => occupation.label === selectedOccupationValue
    );
    setSelectedOccupation(chosenOccupation || null);
    setSelectedDifficulty(null); // Reset difficulty when occupation changes
    setSuggestions(null); // Reset suggestions when occupation changes
  };

  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDifficultyValue = event.target.value;
    const chosenDifficulty = selectedOccupation?.difficulties.find(
      (difficulty) => difficulty.level === selectedDifficultyValue
    );
    setSelectedDifficulty(chosenDifficulty || null);
    if (chosenDifficulty) {
      setSuggestions(chosenDifficulty.suggestions);
    } else {
      setSuggestions(null);
    }
  };

  const handleSubmit = () => {
    setSelectedDifficulty(null);
    setSelectedOccupation(null);
    setSuggestions(null);
    console.log('Submitted!');
  };

  // const renderSuggestions = () => {
  //   if (!suggestions) return null;

  //   return (
  //     <ul>
  //       {suggestions.map((suggestion) => (
  //         <li key={suggestion}>{suggestion}</li>
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <div className="container mx-auto p-4 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar">
      <h1 className="block text-green-300 font-bold mb-2 text-5xl text-center mt-4 p-4">Choose your path</h1>

      <div className="mb-4">
        <label htmlFor="occupation" className="block mb-2 text-white">
          Select your desired occupation:
        </label>
        <datalist id="occupations">
          {occupations.map((occupation) => (
            <option key={occupation.label} value={occupation.label}>
              {occupation.label}
            </option>
          ))}
        </datalist>
        <input
          id="occupation"
          list="occupations"
          placeholder="Choose your occupation"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedOccupation?.label || ''} // If selectedOccupation is null, use an empty string
          onChange={handleOccupationChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="difficulty" className="block mb-2 text-white">
          Select your difficulty level:
        </label>
        <datalist id="difficulties">
          {selectedOccupation?.difficulties?.map((difficulty) => (
            <option key={difficulty.level} value={difficulty.level}>
              {difficulty.level}
            </option>
          ))}
        </datalist>
        <input
          id="difficulty"
          list="difficulties"
          placeholder="Choose your difficulty"
          disabled={!selectedOccupation}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedDifficulty?.level || ''} // If selectedDifficulty is null, use an empty string
          onChange={handleDifficultyChange}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Refresh
      </button>

      <div className="mt-6">
        {suggestions && suggestions.length > 0 && (
          <div>
            <h2 className="text-4xl mb-2 font-bold text-center text-green-200 ">
              Suggestions That you need
            </h2>
            <div className='mt-5'>
              <ol className='text-xl text-white'>
                {suggestions.map((suggestion, index) => (
                  <li key={suggestion} className="mb-1">
                    {index + 1}. {suggestion}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Suggestion;
