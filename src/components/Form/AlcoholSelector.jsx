import React from 'react';
import Button from '@/components/Button';

const AlcoholSelector = ({
    alcohol,
    setAlcohol,
    alcoholType,
    setAlcoholType,
    specificAlcohol,
    setSpecificAlcohol,
    alcoholOptions,
    strongAlcohols,
    lightAlcohols,
}) => {
    return (
        <div className="space-y-4">
            <label className="block text-lg font-semibold text-orange-300">
                5. Алкоголь?
            </label>
            <div className="flex gap-3 flex-wrap">
                {alcoholOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="alcohol"
                            value={option}
                            checked={alcohol === option}
                            onChange={() => {
                                setAlcohol(option);
                                setAlcoholType(option);
                                setSpecificAlcohol('');
                            }}
                            className="form-radio text-orange-500"
                        />
                        <span className="text-orange-200">{option}</span>
                    </label>
                ))}
            </div>
            {alcoholType === 'Міцний' && (
                <div className="flex gap-3 flex-wrap">
                    {strongAlcohols.map((type) => (
                        <Button
                            key={type}
                            isActive={specificAlcohol === type}
                            label={type}
                            onClick={() => setSpecificAlcohol(type)}
                        />
                    ))}
                </div>
            )}
            {alcoholType === 'Неміцний' && (
                <div className="flex gap-3 flex-wrap">
                    {lightAlcohols.map((type) => (
                        <Button
                            key={type}
                            isActive={specificAlcohol === type}
                            label={type}
                            onClick={() => setSpecificAlcohol(type)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AlcoholSelector;