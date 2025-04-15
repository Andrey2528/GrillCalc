import React from 'react';

const HungerSlider = ({ hunger, setHunger }) => {
    return (
        <div className="space-y-4">
            <label className="block text-lg font-semibold text-orange-300">
                3. Наскільки ви голодні?
            </label>
            <input
                type="range"
                min="1"
                max="5"
                value={hunger}
                onChange={(e) => setHunger(Number(e.target.value))}
                className="w-full accent-orange-500"
            />
        </div>
    );
};

export default HungerSlider;