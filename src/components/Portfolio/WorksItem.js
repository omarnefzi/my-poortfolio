import React from 'react'

const WorksItem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.img} alt={item.title} className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href={item.href} target='_blank' rel="noreferrer"  className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItem