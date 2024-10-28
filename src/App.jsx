// refce
// npm run dev
// import React from 'react'

// const App = () => {
//     const user="Ramesh"
//     const age=22
//   return (
//     <div>
//         <h1>Hello {user},{age}</h1>
//         <h1>Hello 2</h1>
//     </div>
//   )
// }

// export default App

// function call:-
// import React from 'react'

// const App = () => {
//     const user='Ramesh'
//    const abc= ()=>{
//         console.log("Hello")

//    }
//     // abc()
//   return (
//     <div>
//         <h1>Username is {user}</h1>
//         <button onClick={abc}>Change User</button>
//     </div>
//   )
// }

// export default App

// react hooks

// import React, { useState } from 'react'

// const App = () => {
//     // const a=10
//     // const [a, setUser] = useState(10)
//     // const changeA= ()=>{
//     //     console.log("Changed")
//     //     setUser(20)
//     // }
//     const [num, setnum] = useState(0)
//     // const IncrementClick= ()=>{
//     //     setnum(num+1)
//     // }
//     // const DecrementClick= ()=>{
//     //     setnum(num-1)
//     // }
//   return (
//     <div>
//         <h3>Number is {num}</h3>
//         <button onClick={()=>{
//         setnum(num+1)
//         }}>Increment</button>
//         <button onClick={()=>
//         setnum(num-1)
//         }>Decrement</button>
//     </div>
//   )
// }

// export default App

//

// taillwind
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//         <h2 className='text-5xl bg-pink-700 text-white'>Hello Ramesh</h2>
//         <h2>Hello</h2>
//     </div>
//   )
// }

// export default App

// formhandling:----
// import React from 'react'

// const App = () => {
//   const submitHandler= (e)=>{
//     e.preventDefault()
//     console.log("Hello",e)
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input className='px-4 py-3 text-xl m-5 rounded' type="text" placeholder="Enter your name"/>
//         <button className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded m-5 text-white'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// Example -2
// two way binding
// import React, { useState } from 'react'

// const App = () => {
//   const [username, setusername] = useState('')

//   const submitHandler= (e)=>{
//     e.preventDefault()
//     console.log(username)

//     setusername('')
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input
//         value={username}
//         onChange={(e)=>{
//           // console.log(e.target.value)
//           setusername(e.target.value)
//         }}
//          className='px-4 py-3 text-xl m-5 rounded' type="text" placeholder="Enter your name"/>
//         <button className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded m-5 text-white'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// fragments:--------
// import React from 'react'

// const App = () => {
//   useSt
//   return (
//     <>
//     <h1>Hello</h1>
//     <h2>Hello</h2>
//     </>
//   )
// }

// export default App

// Component:------
// import React from 'react'
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Footer/>
//     </>
//   )
// }

// export default App

// props and props talling(data pass on components):----

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   const user='Ramesh'
//   return (
//     <div>
//       <Card user={user}/>
//     </div>
//   )
// }

// export default App

// Ex-2

// import React from 'react'
// import Card from './components/Card'

// const App = () => {

// const users=[
//     {
//         "name": "Rohit Sharma",
//         "city": "Mumbai",
//         "age": 30,
//         "profession": "Software Engineer",
//         "profile_photo": "/assets/profilephoto.png"
//     },
//     {
//         "name": "Sneha Gupta",
//         "city": "Bengaluru",
//         "age": 27,
//         "profession": "Data Analyst",
//         "profile_photo": "https://images.app.goo.gl/jDGsp44cfK3H1JiZ9"
//     },
//     {
//         "name": "Aman Verma",
//         "city": "Delhi",
//         "age": 35,
//         "profession": "Teacher",
//         "profile_photo": "https://images.app.goo.gl/jDGsp44cfK3H1JiZ9"
//     },
//     {
//         "name": "Priya Nair",
//         "city": "Chennai",
//         "age": 29,
//         "profession": "UI/UX Designer",
//         "profile_photo": "https://images.app.goo.gl/jDGsp44cfK3H1JiZ9"
//     },
//     {
//         "name": "Vikram Patel",
//         "city": "Ahmedabad",
//         "age": 40,
//         "profession": "Entrepreneur",
//         "profile_photo": "https://images.app.goo.gl/jDGsp44cfK3H1JiZ9"
//     }
// ]

// // users.forEach(function(elem){
// // console.log(elem)
// // })

// // // users.map(()=>{
// //   return "hii"
// // })

//   return (
//     <div>
//      <div className="p10">
//        {/* <Card  user="Ramesh" age="22" city="KOlkata"  /> */}

//        {users.map((elem,idx)=>{
//         return <Card key={idx} photo={elem.profile_photo} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession}  />
//        })}
//      </div>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Ex from './components/Ex'

// const App = () => {
//   return (
//     <div>
//       <Ex name="ramesh" />
//     </div>
//   )
// }

// export default App

// Integrating API:-----------------
// import axios from "axios";
// import React, { useState } from "react";
// import CardAPI from "./components/CardAPI";

// const App = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");

//     setData(response.data);
//     // console.log(data);
//   };

//   return (
//     <div className="p-10">
//       <button
//         onClick={getData}
//         className="bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">
//         Get Data
//       </button>
//       <div className="p-5 mt-5 bg-gray-950">
//         {data.map((elem,idx)=>{
//           // return <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3">
//           //   <img className="h-40" src={elem.download_url}></img>
//           //   <h1>{elem.author}</h1>
//           //  </div>
//           return <CardAPI photo={elem.download_url} author={elem.author}/>
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;



// Ex- I want without btn click to reload
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import CardAPI from "./components/CardAPI";

// const App = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");

//     setData(response.data);
//     // console.log(data);
//   }
//   //   useEffect:
//   // useEffect(() => {
//   //   getData()
  
   
//   // },[])
//   // useRef
//   // react toastify
//   // redux toolkit
  

//   return (
//     <div className="p-10">
      
//       <div className="p-5 mt-5 bg-gray-950">
//         {data.map((elem,idx)=>{
//           return <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3">
//             <img className="h-40" src={elem.download_url}></img>
//             <h1>{elem.author}</h1>
//            </div>
          
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;




// router DOM:-
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from "./pages/Home";
// import About from './pages/About'
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Header from './components/Header';


// const App = () => {
//   return (
//     <div>
//       <Header/>
//      <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/about' element={<About/>} />
//       <Route path='/contact' element={<Contact/>} />
//       <Route path='/product' element={<Product/>} />
//      </Routes>
//     </div>
//   )
// }

// export default App



// context API:-to centralize data
import React, { useContext } from 'react'
import Header2 from './components/Header2'
import Section from './components/Section'
import Footer2 from './components/Footer2'
import { DataContext } from './context/UserContext'



const App = () => {
  const data= useContext(DataContext)
  // console.log(data)
  return (
    <div>
      <h1>This is APP.js {data.username} ,{data.age}, {data.city}</h1>
      {/* <Header2/>
      <Section/>
      <Footer2/> */}
    </div>
  )
}

export default App
