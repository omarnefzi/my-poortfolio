import { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState,setToggleState]=useState(0)
  const toggleTab =(index)=>{
    setToggleState(index)
  }


  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title"> Product <br /> Designer</h3>
          </div>
          <span className="services__button" onClick={()=> toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className= {toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}  >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

              <h3 className="services__modal-title"> Js Website</h3>
              <p className="services__modal-description">Providing quality work to client.</p>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I developer the user interface.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Performance Optimization:.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                I developer  e-commerce site.
                </p>
              </li>
            </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">React <br /> Website</h3>
          </div>
          <span className="services__button" onClick={()=> toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

              <h3 className="services__modal-title"> React Website</h3>
              <p className="services__modal-description">Providing quality work to client.</p>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Showcase your expertise in building responsive and dynamic web .
                </p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                
                  Single-Page Applications .
                </p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Component Libraries and UI Frameworks
                </p>
              </li>
            </ul>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Services;
