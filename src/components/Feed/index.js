import React from 'react'
import TweetBox from '../TweetBox'
import Post from '../Post'

import './style.css'

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header__title">Home</h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  )
}

export default Feed
