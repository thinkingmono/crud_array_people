import { useState } from 'react'
import People from './components/People'
import './App.css'

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: 'Alejandro Garcia',
      role: 'Frontend Developer',
      img: 'https://bootdey.com/img/Content/avatar/avatar1.png'
    },
    {
      id: 2,
      name: 'Pepito Perez',
      role: 'Backend Developer',
      img: 'https://bootdey.com/img/Content/avatar/avatar2.png'
    },
    {
      id: 3,
      name: 'Pancracia Silva',
      role: 'QA',
      img: 'https://bootdey.com/img/Content/avatar/avatar3.png'
    },
  ])

  return (
    <>
      <People people={people} setPeople={setPeople} />
    </>
  )
}

export default App
