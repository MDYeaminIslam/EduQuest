import React, { useState } from 'react';

interface Difficulty {
  level: string;
  suggestions: string[];
}

interface Occupation {
  label: string;
  difficulties: Difficulty[];
}

const occupations: Occupation[] = [
  {
    label: 'Engineer',
    difficulties: [
      {
        level: 'basic',
        suggestions: [
          'Learn basic programming languages',
          'Take online courses',
        ],
      },
      {
        level: 'intermediate',
        suggestions: ['Build small projects', 'Join hackathons'],
      },
      {
        level: 'advanced',
        suggestions: [
          'Contribute to open source projects',
          'Get professional certifications',
        ],
      },
    ],
  },
  {
    label: 'Doctor',
    difficulties: [
      {
        level: 'basic',
        suggestions: [
          'Basic medical study',
          'Intermediate level Biology study',
        ],
      },
      {
        level: 'intermediate',
        suggestions: ['Build small projects', 'Join hackathons'],
      },
      {
        level: 'advanced',
        suggestions: [
          'Contribute to open source projects',
          'Get professional certifications',
        ],
      },
    ],
  },
  // Add more occupations with difficulties and suggestions here
];

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
    setSelectedDifficulty("" || null);
    setSelectedOccupation("" || null);
    setSuggestions("" || null);
  };

  const renderSuggestions = () => {
    if (!suggestions) return null;

    return (
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    );
  };


  return (
    <div className="p-6 bg-black-100 w-full min-h-screen">
      <h1 className="text-3xl mb-6 text-white ">Choose your path</h1>

      <div className="mb-4">
        <label htmlFor="occupation" className="block mb-2 text-white">Select your desired occupation:</label>
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
          className="border p-2 w-1/4 text-black"
          onChange={handleOccupationChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="difficulty" className="block mb-2 text-white">Select your difficulty level:</label>
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
          className="border p-2 w-1/4 text-black"
          onChange={handleDifficultyChange}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedOccupation || !selectedDifficulty}
        className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Refresh
      </button>

      <div className="mt-6">
        {suggestions && suggestions.length > 0 && (
          <div>
            <h2 className="text-2xl mb-2 text-white">Suggestions</h2>
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="mb-1">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Suggestion;