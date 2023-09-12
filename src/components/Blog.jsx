import PropTypes from 'prop-types';
import bookmark from '../assets/bookmark.svg'
import { IoIosDoneAll } from 'react-icons/Io';

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
    const { title, cover, hashtags, author_img, author, posted_date, reading_time } = blog;
    // console.log(blog);
    return (
        <div>
            <div className=''>
                <img src={cover} className="w-full rounded-lg" alt={`cover of ${title}`} />
            </div>
            <div className='flex justify-between my-4'>
                {/* author info div */}
                <div className='flex items-center'>
                    <div >
                        <img className='w-16' src={author_img} alt="" />
                    </div>
                    <div className='ml-6'>
                        <h1>{author}</h1>
                        <p className="text-gray-500">
                            <span>{posted_date}</span>(4 days ago)<span></span>
                        </p>
                    </div>
                </div>
                {/* read and bookmark info */}
                <div className='flex justify-center items-center gap-6 font-medium'>
                    <p className="text-gray-700 text-lg">{reading_time} minutes to read</p>
                    <button onClick={() => handleBookmark(blog)}><img src={bookmark} className='w-6' alt="" /></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold my-3'>{title}</h1>
            {
                hashtags.map((hash, idx) => <a href="" key={idx} className='mr-4 '>#{hash}</a>)
            }
            <div className='my-2'>
                <button className='underline text-purple-800 w-fit flex items-end' onClick={() => handleMarkAsRead(reading_time)}>Mark as Read <IoIosDoneAll></IoIosDoneAll></button>
            </div>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}
export default Blog;