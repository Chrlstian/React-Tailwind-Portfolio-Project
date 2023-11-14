
export default function ExperienceCard(props){

    const url = props.item.siteLink;
    
    return(
        <div className={`border border-gray-500 p-4 flex flex-col gap-4 rounded bg-primary hover:border-0 ${props.lightMode ? 'hover:shadow-lg hover:shadow-black' : 'hover:shadow-lg hover:shadow-btnB'}`}>
            <div className="w-fit border border-gray-500 p-2 font-semibold rounded"> 
                <h3 className="text-btnB">{props.item.stack}</h3>
            </div>
            <a href={url} target="_blank"  rel="noopener noreferrer" className="text-blue-500 underline md:no-underline md:hover:underline cursor-pointer">
                <h2 className="font-bold text-gray-200 text-xl">{props.item.name}</h2>
            </a>
            <p className="text-gray-300 md:text-lg">{props.item.description}</p>
        </div>
    );
}