import React from 'react'

import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import './style.css'

function Post({ avatar, displayName, userName, verified, text, image }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <img src="https://via.placeholder.com/150" alt="Avatar" />
      </div>
      <div className="post__body">
        <MoreHorizIcon className="post__body__option" />
        <h3>
          <a href="/">awwwards.</a>
          <span className="post__body__user">
            <VerifiedRoundedIcon className="post__body__badge" />
            @awwwards
          </span>
        </h3>
        <div className="post__body__text">
          <p>
            I wish I had known about this a couple years ago: A really detailed,
            interactive diagram of WebGL’s internal, global state object, where
            you can see how each WebGL API call affects said object.
          </p>
        </div>
        <img src="https://via.placeholder.com/400" alt="" />
        <div className="post__body__footer">
          <ChatBubbleOutlineOutlinedIcon className="post__body__footer__icon" />
          <RepeatOutlinedIcon className="post__body__footer__icon" />
          <FavoriteBorderOutlinedIcon className="post__body__footer__icon" />
          <IosShareOutlinedIcon className="post__body__footer__icon" />
        </div>
      </div>
    </div>
  )
}

export default Post
