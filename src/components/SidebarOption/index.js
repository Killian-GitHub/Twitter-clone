import React from 'react'

import './style.css'

function SidebarOption({ active, text, Icon }) {
  return (
    <a
      href="/"
      className={`sidebarOption ${active && 'sidebarOption--active'}`}
    >
      <Icon className="sidebarOption__icon" />
      <h2 className="sidebarOption__text">{text}</h2>
    </a>
  )
}

export default SidebarOption
