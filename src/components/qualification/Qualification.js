import { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My EDUCATION</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            EDUCATION
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(2)}

          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Eperience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Web Development</h3>
                <span className="qualification__subtitle">Go My Code</span>
                <div className="qualification__calendar">
                  <i className="uil uil--calendar-alt"></i> 02-04-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React Js</h3>
                <span className="qualification__subtitle">Go My Code</span>
                <div className="qualification__calendar">
                  <i className="uil uil--calendar-alt"></i> 04-06-2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> ...</h3>
                <span className="qualification__subtitle">...</span>
                <div className="qualification__calendar">
                  <i className="uil uil--calendar-alt"></i> ...
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">...</h3>
                <span className="qualification__subtitle">...</span>
                <div className="qualification__calendar">
                  <i className="uil uil--calendar-alt"></i> ...
                </div>
              </div>
            </div>
          </div>

          <div  className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> work At Home</h3>
                <span className="qualification__subtitle">Made A Various Projects</span>
                <div className="qualification__calendar">
                  <i className="uil uil--calendar-alt"></i> 
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">...</h3>
                <span className="qualification__subtitle">...</span>
                <div className="qualification__calendar">
                  <i className="uil uil--calendar-alt"></i> ...
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">... </h3>
                <span className="qualification__subtitle">...</span>
                <div className="qualification__calendar">
                  <i className="uil uil--calendar-alt">...</i> 
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
