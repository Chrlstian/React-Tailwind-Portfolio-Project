
import LikeComments from "./blogs/LikeComments";


export default function BlogCard(props){

    return(
        <>
        <div className="p-2 md:p-8 md:pt-0 lg:p-8 xl:p-40 xl:pt-8 xl:pb-8">
            <div className="p-2 hover:border hover:border-gray-500 rounded">
                <div className="max-w-screen-2xl md:flex md:items-center 2xl:m-auto">
                    <div className="w-full">
                        <img className="rounded border border-txt" src={props.item.imgBanner} alt="banner"/>
                    </div>
                    <div className="flex flex-col gap-3 mt-2 md:pl-10 lg:p-10 lg:pt-5 lg:pb-5">
                        <div className="flex items-center">
                            <img className='w-10 h-10 rounded-full border' src={props.item.profile} alt="Christian Benson profile"/>
                            <p className={`${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>Christian Benson <br />{props.item.month} . {props.item.time}</p>
                        </div>
                        <h2 className={`font-bold md:text-xl lg:text-3xl xl:text-4xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>{props.item.title}</h2>
                        <p className="text-txt md:text-lg">{props.item.description}</p>
                        <LikeComments views={props.item.views} comment={props.item.comments}/>
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