
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";

export default function Blogs(props){
    
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