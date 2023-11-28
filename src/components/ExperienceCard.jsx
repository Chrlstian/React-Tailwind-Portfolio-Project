
export default function ExperienceCard(props){

    const url = props.item.siteLink;

    // Check if the component is being rendered in wordpress.jsx
    const isIcon = props.isIcon || false;
    
    const renderGitHubLink = !isIcon && props.item.gitHub ? (
        <a href={props.item.gitHub} target="_blank" rel="noopener noreferrer">
            <img className="w-7 h-7 rounded-full" src={props.item.icon} alt="github logo" />
        </a>
    ) : null;

    return(
        <div className={`border border-gray-500 p-4 flex flex-col gap-4 rounded bg-primary hover:border-0 ${props.lightMode ? 'hover:shadow-lg hover:shadow-black' : 'hover:shadow-lg hover:shadow-btnB'}`}>
            <div className="flex justify-between items-center">
                <div className="w-fit border border-gray-500 p-2 font-semibold rounded">
                    <h3 className="text-btnB">{props.item.stack}</h3>
                </div>
                {renderGitHubLink}
                {/* <a href={props.item.gitHub} target="_blank" rel="noopener noreferrer">
                    <img className="w-7 h-7 rounded-full" src={props.item.icon} alt="github logo" />
                </a> */}
            </div>
            <a href={url} target="_blank"  rel="noopener noreferrer" className="text-blue-500 underline md:no-underline md:hover:underline cursor-pointer">
                <h2 className="font-bold text-gray-200 text-xl"><abbr title="Visit the app">{props.item.name}</abbr></h2>
            </a>
            <p className="text-gray-300 md:text-lg">{props.item.description}</p>
        </div>
    );
}