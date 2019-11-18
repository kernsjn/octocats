import React from 'react'
import Cat from './Cat'

import Brennatocat from '../images/Brennatocat.png'
import Filmtocats from '../images/filmtocats.png'
import Fintechtocat from '../images/Fintechtocat.png'
import Scubatocat from '../images/scubatocat.png'
import Sentrytocat from '../images/Sentrytocat_octodex.jpg'
import Snowtocat from '../images/snowtocat_final.jpg'
import Surftocat from '../images/surftocat.png'
import Vinyltocat from '../images/vinyltocat.png'

const cats = [
  {
    imageUrl: Brennatocat,
    imageAlt: 'Detective Brenna',
    catName: 'Brennatocat',
    catNumber: '#147'
  },
  {
    imageUrl: Filmtocats,
    imageAlt: 'Director Cat',
    catName: 'Filmtocats',
    catNumber: '#146'
  },
  {
    imageUrl: Fintechtocat,
    imageAlt: 'Lady coder cat',
    catName: 'Fintechtocat',
    catNumber: '#148'
  },

  {
    imageUrl: Scubatocat,
    imageAlt: 'Scuba Cat',
    catName: 'Scubatocat',
    catNumber: '#140'
  },
  {
    imageUrl: Sentrytocat,
    imageAlt: 'Fire Cat',
    catName: 'Sentrytocat',
    catNumber: '#145'
  },
  {
    imageUrl: Snowtocat,
    imageAlt: 'Snow Kittie',
    catName: 'Snowtocat ',
    catNumber: '#137'
  },
  {
    imageUrl: Surftocat,
    imageAlt: 'Surfs up',
    catName: 'Surftocat',
    catNumber: '#142'
  },
  {
    imageUrl: Vinyltocat,
    imageAlt: 'Play me some tunes',
    catName: 'Vinyltocat',
    catNumber: '#139'
  }
]

const CreateCat = () => {
  return (
    <ul className="cat-list">
      {cats.map(cat => {
        return (
          <Cat
            imageUrl={cat.imageUrl}
            imageAlt={cat.imageAlt}
            catName={cat.catName}
            catNumber={cat.catNumber}
            userName={cat.userName}
          />
        )
      })}
    </ul>
  )
}

export default CreateCat
