import React from 'react'
import Trends from '../Trends'

import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'
import SettingsIcon from '@mui/icons-material/Settings'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import './style.css'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__input__searchIcon" />
        <input
          className="widgets__input__input"
          placeholder="Search Twitter"
          type="text"
        />
        <CancelIcon className="widgets__input__cancelIcon" />
      </div>
      <div className="widgets__trends">
        <div className="widgets__trends__header">
          <h2 className="widgets__trends__header__title">Trends for you</h2>
          <a href="/">
            <SettingsIcon className="widgets__trends__header__icon" />
          </a>
        </div>
        <Trends category="Football" title="Ronaldo" tweets="160K" />
        <Trends category="Football" title="Ronaldo" tweets="160K" />
        <Trends category="Football" title="Ronaldo" tweets="160K" />
        <Trends category="Football" title="Ronaldo" tweets="160K" />
        <Trends category="Football" title="Ronaldo" tweets="160K" />
        <a href="/" className="widgets__trends__more">
          Show more
        </a>
      </div>
      <div className="widgets__footer">
        <ul className="widgets__footer__links">
          <li>
            <a href="/">Terms of Service</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Cookie Policy</a>
          </li>
          <li>
            <a href="/">Accessibility</a>
          </li>
          <li>
            <a href="/">Ads info</a>
          </li>
          <li>
            <a href="/">
              More
              <MoreHorizIcon className="widgets__footer__links__icon" />
            </a>
          </li>
        </ul>
        <p className="widgets__footer__copyright">© 2022 Twitter, Inc.</p>
      </div>
    </div>
  )
}

export default Widgets
