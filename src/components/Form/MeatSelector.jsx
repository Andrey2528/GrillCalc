import React from 'react';
import Button from '@/components/Button';

const MeatSelector = ({ meat, setMeat, meatTypes }) => {
    return (
        <div className="space-y-4">
            <label className="block text-lg font-semibold text-orange-300">
                2. Що смажимо?
            </label>
            <div className="flex gap-3 flex-wrap">
                {meatTypes.map((type) => (
                    <Button
                        key={type}
                        isActive={meat === type}
                        label={type}
                        onClick={() => setMeat(type)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MeatSelector;