import React from 'react'
import SidebarOption from '../SidebarOption'

import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import TagIcon from '@mui/icons-material/Tag'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

import './style.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__icon" />
      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={TagIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PersonOutlineIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />
      <button className="sidebar__button">
        <p className="sidebar__button__large">Tweet</p>
        <ModeEditIcon className="sidebar__button__small" />
      </button>
    </div>
  )
}

export default Sidebar
