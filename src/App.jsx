import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import { func } from 'prop-types'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  function handleBookmark(blog) {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const [markAsRead, setMarkAsRead] = useState(0)
  function handleMarkAsRead(time) {
    let newTimeSum = markAsRead + time;
    setMarkAsRead(newTimeSum)
  }
  // console.log(markAsRead);


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>

        <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>

      </div>
    </>
  )
}

export default App
