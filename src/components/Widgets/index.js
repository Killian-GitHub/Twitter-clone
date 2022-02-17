import React from 'react'
import Trends from '../Trends'

import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'
import SettingsIcon from '@mui/icons-material/Settings'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import './style.css'

function Widgets() {
  const [searchActive, setSearchActive] = React.useState(false)
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__input__searchIcon" />
        <input
          onFocus={(e) => setSearchActive(true)}
          className="widgets__input__input"
          placeholder="Search Twitter"
          type="text"
        />
        {searchActive && (
          <CancelIcon
            onClick={(e) => setSearchActive(false)}
            className="widgets__input__cancelIcon"
          />
        )}
      </div>
      <div className="widgets__trends">
        <div className="widgets__trends__header">
          <h2 className="widgets__trends__header__title">Trends for you</h2>
          <SettingsIcon className="widgets__trends__header__icon" />
        </div>
        <Trends category="Education" title="OpenClassrooms" tweets="150K" />
        <Trends category="Technology" title="React" tweets="16K" />
        <Trends category="Technology" title="Vue.js" tweets="10K" />
        <Trends category="Technology" title="WordPress" tweets="19K" />
        <Trends category="Technology" title="Node.js" tweets="8K" />
        <div className="widgets__trends__more">Show more</div>
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
        <p className="widgets__footer__copyright">© 2022 Twitter clone.</p>
      </div>
    </div>
  )
}

export default Widgets
