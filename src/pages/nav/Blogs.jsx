
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";

// import imgCardProfile from '../../assets/images/Christian Profile.jpg';
// import imgCardBanner from '../../assets/images/card-laptop-1.webp';
// import imgCardBanner1 from '../../assets/images/card-laptop-2.webp';

// const blogData = [
//     {
//         id: 1,
//         profile: imgCardProfile,
//         month: 'March 21',
//         time: '1 min',
//         title: 'PLAYING WITH CODES',
//         description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
//         views: '16',
//         comments: '4',
//         likes: 16,
//         imgLike: false,
//         imgBanner: imgCardBanner
//     },
//     {
//         id: 2,
//         profile: imgCardProfile,
//         month: 'March 21',
//         time: '2 min',
//         title: "A DAY IN A LIFE OF A POOR DEVELOPER",
//         description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
//         views: '41',
//         comments: '10',
//         likes: 24,
//         imgLike: false,
//         imgBanner: imgCardBanner1
//     }
//   ];

export default function Blogs(props){
    
    // create an object of data
    const renderBlog =  props.blogData.map(item => (
        <Link to={`/blogs/${item.id}`}>
            <BlogCard key={item.id} item={item} lightMode={props.lightMode} />
        </Link>
    ))

    return(
        <>
            <h2 className={`text-center font-bold text-2xl mt-10 md:text-3xl lg:text-4xl xl:text-5xl ${props.lightMode ? 'text-primary' : 'text-gray-200'}`}>Blogs of My Life</h2>
            {renderBlog}
        </>
    );
}