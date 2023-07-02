import './Skills.css'
import FrontEnd from './FrontEnd'
import ReactSkills from './ReactSkills'


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
    <FrontEnd />
    <ReactSkills />
      </div>
    </section>
  )
}

export default Skills