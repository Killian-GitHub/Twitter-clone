import React from 'react'

import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import MessageIcon from '@mui/icons-material/Message'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto'

import './style.css'

function Post({ avatar, displayName, userName, verified, text, image }) {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <div className="post">
      <div className="post__avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="post__body">
        <MoreHorizIcon
          onClick={(e) =>
            !showModal ? setShowModal(true) : setShowModal(false)
          }
          className="post__body__option"
        />
        {showModal && (
          <ul className="post__body__modal">
            <li onClick={(e) => setShowModal(false)}>
              <MessageIcon />
              Unfollow UX design
            </li>
            <li onClick={(e) => setShowModal(false)}>
              <SentimentVeryDissatisfiedIcon />
              Not interested in this Tweet
            </li>
            <li onClick={(e) => setShowModal(false)}>
              <PersonAddIcon />
              Follow
            </li>
            <li onClick={(e) => setShowModal(false)}>
              <PlaylistAddIcon />
              Add/remove from Lists
            </li>
            <li onClick={(e) => setShowModal(false)}>
              <VolumeOffIcon />
              Mute
            </li>
            <li onClick={(e) => setShowModal(false)}>
              <NotInterestedIcon />
              Block
            </li>
            <li onClick={(e) => setShowModal(false)}>
              <CodeOffIcon />
              Embed Tweet
            </li>
            <li onClick={(e) => setShowModal(false)}>
              <AssistantPhotoIcon />
              Report Tweet
            </li>
          </ul>
        )}
        <h3>
          <a href="/">{displayName}</a>
          <span className="post__body__user">
            {verified && <VerifiedRoundedIcon className="post__body__badge" />}@
            {userName}
          </span>
        </h3>
        <div className="post__body__text">
          <p>{text}</p>
        </div>
        <img src={image} alt="" />
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
