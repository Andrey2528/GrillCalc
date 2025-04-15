// Коефіцієнти втрати ваги під час приготування
export const weightLossFactors = {
    Свинина: 0.7,
    Яловичина: 0.65,
    Баранина: 0.68,
    Курка: 0.75,
    Овочі: 0.8,
};

// Базові кількості м'яса на людину
const baseMeatAmounts = {
    Свинина: 0.5,
    Яловичина: 0.4,
    Баранина: 0.45,
    Курка: 0.35,
    Овочі: 0.3,
};

// Базові кількості алкоголю на людину
const baseAlcoholAmounts = {
    Міцний: {
        Горілка: 0.2,
        Коньяк: 0.25,
        Віскі: 0.3,
    },
    Неміцний: {
        Вино: 0.5,
        Пиво: 1,
        Сидр: 0.7,
    },
};

// Коефіцієнти тривалості
const durationFactors = {
    '1-5 годин': 1,
    '5-7 годин': 1.5,
    '12 годин': 2,
    '3 дні': 5,
};

// Функція для розрахунку кількості м'яса
export const calculateMeatAmount = (type, people, hunger) => {
    const baseAmount = baseMeatAmounts[type] || 0;
    return (people * baseAmount * hunger).toFixed(1);
};

// Функція для розрахунку кількості готового м'яса
export const calculateCookedMeat = (rawMeat, type) => {
    return (rawMeat * weightLossFactors[type]).toFixed(1);
};

// Функція для розрахунку кількості алкоголю
export const calculateAlcoholAmount = (type, alcoholType, people, duration) => {
    const baseAmount = baseAlcoholAmounts[alcoholType]?.[type] || 0;
    const durationFactor = durationFactors[duration] || 1;
    return (people * baseAmount * durationFactor).toFixed(1);
};