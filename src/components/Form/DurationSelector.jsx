import React from 'react';
import Button from '@/components/Button';

const DurationSelector = ({ duration, setDuration, durationOptions }) => {
    return (
        <div className="space-y-4">
            <label className="block text-lg font-semibold text-orange-300">
                4. Як довго плануємо відпочивати?
            </label>
            <div className="flex gap-3 flex-wrap">
                {durationOptions.map((option) => (
                    <Button
                        key={option}
                        isActive={duration === option}
                        label={option}
                        onClick={() => setDuration(option)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DurationSelector;