import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, markAsRead }) => {
    return (
        <div className="w-1/3 my-4 p-4 rounded-lg h-fit bg-slate-100">
            <div>
                <h1 className="text-2xl font-medium border rounded-xl p-4 m-4 bg-rose-50">Time Spent Reading : {markAsRead}</h1>
            </div>
            <h1 className="text-2xl font-medium border rounded-xl p-4 m-4 bg-rose-50">Blogs Bookmarked:  {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;