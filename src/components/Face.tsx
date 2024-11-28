import React from "react";
import { face } from "./utils";

const Face: React.FC = () => {
    return (
        <main className= "">
            <div className="bg-[#c0c0c0] border-4 text-3xl
             border-l-white border-t-white border-r-[#7b7b7b] border-b-[#7b7b7b] 
             active:border-t-[#7b7b7b] active:border-b-white active:border-l-[#7b7b7b] active:border-r-white
             w-12 h-12 flex items-center justify-center cursor-pointer">
                <span role="img" aria-label="Face">{face.smile}</span>
            </div>
        </main>
    );
}

export default Face;    