import React from 'react'

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined'
import PollOutlinedIcon from '@mui/icons-material/PollOutlined'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

import db from '../../firebase'

import './style.css'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = React.useState('')
  const [showTweetImageInput, setShowTweetImageInput] = React.useState(false)
  const [tweetImage, setTweetImage] = React.useState('')

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'CloneUser',
      userName: 'anonymous',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://i1.sndcdn.com/avatars-000245472345-2odmx5-t240x240.jpg'
    })

    setTweetMessage('')
    setTweetImage('')
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__left">
          <img
            className="tweetBox__avatar"
            src="https://i1.sndcdn.com/avatars-000245472345-2odmx5-t240x240.jpg"
            alt="User"
          />
        </div>
        <div className="tweetBox__right">
          <div className="tweetBox__input__message">
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening?"
              type="text"
            />
          </div>
          {showTweetImageInput && (
            <input
              onChange={(e) => setTweetImage(e.target.value)}
              value={tweetImage}
              className="tweetBox__input__image"
              placeholder="Insert a GIF"
              type="text"
            ></input>
          )}
          <div className="tweetBox__submit">
            <div className="tweetBox__submit__option">
              <InsertPhotoOutlinedIcon className="tweetBox__submit__option__icon" />
              <GifBoxOutlinedIcon
                onClick={(e) =>
                  !showTweetImageInput
                    ? setShowTweetImageInput(true)
                    : setShowTweetImageInput(false)
                }
                className="tweetBox__submit__option__icon"
              />
              <PollOutlinedIcon className="tweetBox__submit__option__icon" />
              <SentimentSatisfiedOutlinedIcon className="tweetBox__submit__option__icon" />
              <InsertInvitationOutlinedIcon className="tweetBox__submit__option__icon" />
              <FmdGoodOutlinedIcon className="tweetBox__submit__option__icon" />
            </div>
            <button
              onClick={sendTweet}
              className="tweetBox__submit__button"
              type="submit"
            >
              Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TweetBox
