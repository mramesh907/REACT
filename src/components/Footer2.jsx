import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer2 = () => {
    const user=useContext(DataContext)
  return (
    <div>
        <h1>{user} ! This is Footer</h1>
    </div>
  )
}

export default Footer2