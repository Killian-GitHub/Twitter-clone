import React from 'react'

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined'
import PollOutlinedIcon from '@mui/icons-material/PollOutlined'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

import './style.css'

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__left">
          <img
            className="tweetBox__image"
            src="https://via.placeholder.com/150"
            alt="User"
          />
        </div>
        <div className="tweetBox__right">
          <div className="tweetBox__input">
            <input placeholder="What's happening?" type="text" />
          </div>
          <div className="tweetBox__submit">
            <div className="tweetBox__submit__option">
              <InsertPhotoOutlinedIcon className="tweetBox__submit__option__icon" />
              <GifBoxOutlinedIcon className="tweetBox__submit__option__icon" />
              <PollOutlinedIcon className="tweetBox__submit__option__icon" />
              <SentimentSatisfiedOutlinedIcon className="tweetBox__submit__option__icon" />
              <InsertInvitationOutlinedIcon className="tweetBox__submit__option__icon" />
              <FmdGoodOutlinedIcon className="tweetBox__submit__option__icon" />
            </div>
            <button className="tweetBox__submit__button" type="submit">
              Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TweetBox
