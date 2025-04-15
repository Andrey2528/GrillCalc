import React from 'react';

const DurationSelector = ({ duration, setDuration, durationOptions }) => {
    return (
        <div className="space-y-4">
            <label className="block text-lg font-semibold text-orange-300">
                4. Як довго плануємо відпочивати?
            </label>
            <div className="flex gap-3 flex-wrap">
                {durationOptions.map((option) => (
                    <button
                        key={option}
                        type="button" // Встановлюємо тип кнопки як "button"
                        className={`px-4 py-2 border rounded-lg ${
                            duration === option
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-800 text-orange-200'
                        }`}
                        onClick={() => setDuration(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DurationSelector;
