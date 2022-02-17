import React from 'react'
import TweetBox from '../TweetBox'
import Post from '../Post'
import db from '../../firebase'

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

import './style.css'

function Feed() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    )
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header__title">Home</h2>
        <AutoAwesomeIcon className="feed__header__icon" />
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          avatar={post.avatar}
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default Feed
