import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-ig navbar-$(props.mode) bg-light`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">your suggestion</a>
        <a className="nav-link" href="/">special writings</a>
        <a className="nav-link disabled"><abbr title="contact us"></abbr></a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
