
import { useState } from 'react';

// like/heart images/icons
import imgLike1 from '../../assets/images/like-1.webp';
import imgLike2 from '../../assets/images/like-2.webp';

export default function LikeComments(props){
    // state for like/heart button
    const [like, setLike] = useState(false);
    const [num, setNum] = useState(24);

    function handleLike(){
        const likeNumber = like ? -1 : 1;

        setLike(prevLike => !prevLike);
        setNum( prevNum => prevNum + likeNumber );

    }
   
    return(
        <div className="flex justify-between mt-3">
            <div className="flex gap-2 text-txt ">
                <p className='md:text-lg'> {props.views}views</p>
                <p className='md:text-lg'> {props.comment}comments</p>
            </div>
            <div className="flex text-txt items-center">
                <p>{num}</p>
                <img className="w-5 h-5" onClick={handleLike} src={like ? imgLike2 : imgLike1} alt="like"/>
            </div>
        </div>
    );
}