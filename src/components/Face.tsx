import React from "react";


const Face: React.FC = () => {
    return (
        <main className= "">
            <div className="bg-[#c0c0c0] border-4 text-3xl
             border-l-white border-t-white border-r-[#7b7b7b] border-b-[#7b7b7b] 
             w-12 h-12 flex items-center justify-center cursor-pointer">
                <span role="img" aria-label="Face">😃</span>
            </div>
        </main>
    );
}

export default Face;    