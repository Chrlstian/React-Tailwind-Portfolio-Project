
export default function WorkCard(props){
    return(
        <>
        <div className="p-2 md:p-8 md:pt-0 lg:p-8 xl:p-40 xl:pt-8 xl:pb-8">
            <div className="p-2 hover:border hover:border-gray-500 rounded">
                <div className="max-w-screen-2xl md:flex lg:items-center 2xl:m-auto gap-0">
                    <div className="w-full md:pt-4 ">
                        <img className="rounded border border-txt" src={props.item.img} alt="banner"/>
                    </div>
                    <div className="flex flex-col gap-3 mt-2 md:pl-10 lg:p-10 lg:pt-5 lg:pb-5 w-full">
                        <h2 className={`font-bold text-xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{props.item.title}</h2>
                        <p className="text-txt md:text-xl">{props.item.date} <br /><span>{props.item.location}</span></p>
                        <p className="text-txt md:text-lg">{props.item.description}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 mb-8">
            <hr className="w-full max-w-xs m-auto border border-txt"/>
        </div>
        </>
    );
}