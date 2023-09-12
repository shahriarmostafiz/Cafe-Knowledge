import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "./blog";

const Blogs = ({ handleBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3 p-4">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark}></Blog>)
            }

        </div>
    );
};
Blogs.propTypes = {
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}

export default Blogs;