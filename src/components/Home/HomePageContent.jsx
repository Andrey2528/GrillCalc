import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import {
    calculateMeatAmount,
    calculateCookedMeat,
    calculateAlcoholAmount,
} from '@/utils/calculations';
import {
    PeopleInput,
    MeatSelector,
    HungerSlider,
    DurationSelector,
    AlcoholSelector,
} from '@/components/Form';

const meatTypes = ['Свинина', 'Яловичина', 'Баранина', 'Курка', 'Овочі'];
const strongAlcohols = ['Горілка', 'Коньяк', 'Віскі'];
const lightAlcohols = ['Вино', 'Пиво', 'Сидр'];
const durationOptions = ['1-5 годин', '5-7 годин', '12 годин', '3 дні'];
const alcoholOptions = ['Немає', 'Міцний', 'Неміцний'];

const HomePageContent = () => {
    const [people, setPeople] = useState(4);
    const [meat, setMeat] = useState('Свинина');
    const [hunger, setHunger] = useState(3);
    const [duration, setDuration] = useState('1-5 годин');
    const [alcohol, setAlcohol] = useState('Немає');
    const [alcoholType, setAlcoholType] = useState('');
    const [specificAlcohol, setSpecificAlcohol] = useState('');

    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname + window.location.search,
        });
    }, []);

    const rawMeat = calculateMeatAmount(meat, people, hunger);
    const cookedMeat = calculateCookedMeat(rawMeat, meat);
    const alcoholAmount = alcohol === 'Немає' ? '0' : calculateAlcoholAmount(specificAlcohol, alcoholType, people, duration);

    return (
        <div className="bg-gradient-to-br from-gray-800 via-red-700 to-orange-600 min-h-screen flex items-center justify-center">
            <div className="bg-gray-900 max-w-lg w-full p-8 rounded-2xl shadow-2xl">
                <h1 className="text-4xl font-extrabold text-orange-400 text-center mb-8">
                    Шашличний калькулятор
                </h1>
                <form className="space-y-8">
                    <PeopleInput people={people} setPeople={setPeople} />
                    <MeatSelector meat={meat} setMeat={setMeat} meatTypes={meatTypes} />
                    <HungerSlider hunger={hunger} setHunger={setHunger} />
                    <DurationSelector duration={duration} setDuration={setDuration} durationOptions={durationOptions} />
                    <AlcoholSelector
                        alcohol={alcohol}
                        setAlcohol={setAlcohol}
                        alcoholType={alcoholType}
                        setAlcoholType={setAlcoholType}
                        specificAlcohol={specificAlcohol}
                        setSpecificAlcohol={setSpecificAlcohol}
                        alcoholOptions={alcoholOptions}
                        strongAlcohols={strongAlcohols}
                        lightAlcohols={lightAlcohols}
                    />
                    <div className="space-y-4">
                        <label className="block text-lg font-semibold text-orange-300">
                            Ваш рецепт шашличного відпочинку:
                        </label>
                        <div className="p-4 bg-gray-800 rounded-lg text-center font-bold text-orange-200">
                            <p>Сирого м'яса візьми: {rawMeat} КГ</p>
                            <p>Готового м'яса вийде: {cookedMeat} КГ</p>
                            {alcohol !== 'Немає' && <p>Алкоголю: {alcoholAmount} Л</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomePageContent;