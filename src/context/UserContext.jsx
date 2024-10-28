import React, { createContext } from 'react'
export const DataContext=createContext()



const UserContext = ({children}) => {
//   const username = "Ramesh"

    const userData={
        username:"Ramesh Maity",
        age:22,
        city:"Kolkata"
    }


//   console.log(props.children);
// console.log({children})
  return (
    <div>
      <DataContext.Provider value={userData}>
        {children}
        </DataContext.Provider>
    </div>
  );
}

export default UserContext