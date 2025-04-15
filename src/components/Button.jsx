import React from 'react';

const Button = ({ isActive, label, onClick }) => {
    return (
        <button
            type="button"
            className={`px-4 py-2 border rounded-lg shadow-sm transition ${
                isActive
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-gray-800 text-orange-200 border-orange-400 hover:bg-orange-600'
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;