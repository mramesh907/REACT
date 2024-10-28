import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header2 = () => {
    const username=useContext(DataContext)
  return (
    <div>
        <h1>Hello ! {username}</h1>
    </div>
  )
}

export default Header2