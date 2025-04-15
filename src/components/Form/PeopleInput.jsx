import React from 'react';

const PeopleInput = ({ people, setPeople }) => {
    return (
        <div className="space-y-4">
            <label className="block text-lg font-semibold text-orange-300">
                1. Скільки вас?
            </label>
            <input
                type="number"
                min="1"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full p-3 border border-orange-500 rounded-lg shadow-sm bg-gray-800 text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
        </div>
    );
};

export default PeopleInput;