
import { useState } from "react";

export default function CertCard(props) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
            className={`border border-gray-500 p-4 flex flex-col gap-4 rounded bg-primary relative ${props.lightMode ? 'hover:shadow-lg hover:shadow-black' : 'hover:shadow-lg hover:shadow-btnB'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
      >
        
            <img src={props.item.img} alt="Certificate of Christian Benson Capon" />
        
            {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <a
                        href={props.item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-gray-200 px-4 py-2 rounded" 
                    > 
                        Show
                    </a>
                </div>
            )}
      </div>
    );
  }
