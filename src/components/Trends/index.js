import React from 'react'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import './style.css'

function Trends({ category, title, tweets }) {
  return (
    <a href="/" className="trends">
      <MoreHorizIcon className="trends__option" />
      <div className="trends__header">
        <p className="trends__category">{category} · Trending</p>
        <p className="trends__title">{title}</p>
        <p className="trends__tweets">{tweets} Tweets</p>
      </div>
    </a>
  )
}

export default Trends
