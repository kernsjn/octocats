import React from 'react'
import CreateCat from './components/CreateCat'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <section>
      <NavBar />
      <main>
        <CreateCat />
      </main>
    </section>
  )
}

export default App
