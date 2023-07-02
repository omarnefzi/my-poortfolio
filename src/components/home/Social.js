import React from 'react'

const Social = () => {
  return (
  <div className="home__social">
    <a href="mailto:foo@gmail.com"  className="home__social-icon" target='_blank' rel="noreferrer" >
    <i className="uil uil-fast-mail"></i>
    </a>
    <a href="https://www.linkedin.com/in/omar-nefzi-a41960264/" className="home__social-icon" target='_blank' rel="noreferrer" >
    <i className="uil uil-linkedin-alt"></i>
    </a>
    <a href="https://github.com/omarnefzi" className="home__social-icon" rel="noreferrer" target='_blank' >
<i className="uil uil-github-alt"></i>
      
    </a>
  </div>
  )
}

export default Social