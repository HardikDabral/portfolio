//Button from aceternity

import React from 'react';

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses
}: {
    title: string;
    icon: React.ReactNode;
    position: 'left' | 'right';
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className={`p-[3px] h-100 relative w-full md:w-60 md:mt-10 ${otherClasses}`}
            onClick={handleClick}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-800 border-[1px] rounded-lg" />
            <div className="flex items-center justify-center px-8 py-3 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                {position === 'left' && (
                    <span className="mr-2 px-1">
                        {icon}
                    </span>
                )}
                <span>{title}</span>
                {position === 'right' && (
                    <span className="ml-2 px-1">
                        {icon}
                    </span>
                )}
            </div>
        </button>
    );
};

export default MagicButton;
