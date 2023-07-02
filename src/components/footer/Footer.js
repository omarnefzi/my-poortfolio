import './Footer.css'

const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Omar</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Porojects</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.facebook.com"  rel="noreferrer" className="footer__social-link" target='_blank' >
    <i className="bx bxl-facebook"></i>
    </a>
    <a href="https://www.instagram.com" rel="noreferrer" className="footer__social-link" target='_blank' >
    <i className="bx bxl-instagram"></i>
    </a>
    <a href="https://twitter.com"  rel="noreferrer" className="footer__social-link" target='_blank' >
<i className="bx bxl-twitter"></i>
      
    </a>
        </div>

        <span className='footer__copy'>OmarNefzi. All rights reserved</span>
      </div>
     </footer>
  )
}

export default Footer