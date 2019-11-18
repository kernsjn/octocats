import React from 'react'

const Cat = props => {
  return (
    <li class="catContainer">
      <img src={props.imageUrl} alt={props.imageAlt} />
      <section>
        <p>
          {props.catNumber} <span>{props.catName}</span>
        </p>
      </section>
    </li>
  )
}

export default Cat
