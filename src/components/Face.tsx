import React, { useEffect, useState } from "react";
import { Face as FaceEnum } from './utils';

const Face: React.FC = () => {
    const [face, setFace] = React.useState<FaceEnum>(FaceEnum.Smile);


    useEffect(() => {
        const handleMousedown = (): void => {
          setFace(FaceEnum.Oh);
        }
      
        const handleMouseup = (): void => {
          setFace(FaceEnum.Smile);
        }
      
        window.addEventListener('mousedown', handleMousedown);
        window.addEventListener('mouseup', handleMouseup);
        
        return () => {
          window.removeEventListener('mousedown', handleMousedown);
          window.removeEventListener('mouseup', handleMouseup);
        }
      }, []);


    return (
        <main className= "">
            <div className="bg-[#c0c0c0] border-4 text-3xl
             border-l-white border-t-white border-r-[#7b7b7b] border-b-[#7b7b7b] 
             active:border-t-[#7b7b7b] active:border-b-white active:border-l-[#7b7b7b] active:border-r-white
             w-12 h-12 flex items-center justify-center cursor-pointer">
                <span role="img" aria-label="Face">{face}</span>
            </div>
        </main>
    );
}

export default Face;    
