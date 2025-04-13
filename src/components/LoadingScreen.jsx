import { useEffect, useState } from "react";
import daisy from '.././images/daisy.png';

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [scale, setScale] = useState(0.5); 
    const fullText = "<Rymbrent Rabano />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            setScale(0.5 + (index / fullText.length) * 0.5);
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setScale(1.3);
                setTimeout(() => setScale(1), 200);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col sm:flex-row items-center justify-center p-4 gap-4 sm:gap-8">
        
            <img 
                src={daisy}
                alt="Loading graphic"
                className="w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 object-contain transition-transform duration-100 ease-linear"
                style={{ transform: `scale(${scale})` }}
            />
            
            <div className="flex flex-col items-center sm:items-start">
                <div className="mb-4 text-3xl sm:text-4xl font-mono font-bold text-white">
                    {text} 
                    <span className="animate-blink ml-1 text-yellow-300">|</span>
                </div>
                <div className="w-[350px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                    <div 
                        className="h-full bg-yellow-300 shadow-[0_0_15px_#3b82f6] animate-loading-bar" 
                        style={{ width: `${(text.length / fullText.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
};