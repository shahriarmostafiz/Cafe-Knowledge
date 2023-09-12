import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    return (
        <ol >
            <li className="text-2xl font-medium border rounded-xl p-4 m-4 bg-rose-50">
                {bookmark.title}

            </li>
        </ol>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;