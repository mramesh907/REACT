// import React from 'react'

// const Card = (props) => {
//     console.log(props.user)
//   return (
//     <div>
//         <h1 className='text-3xl'>
//             Username is {props.user}
//         </h1>
//     </div>
//   )
// }

// export default Card





// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className='bg-white text-black inline-block p-6 rounded m-3'>
//         <h1>{props.user}</h1>
//         <h2>{props.city}, {props.age}</h2>
//         <button>Add Friend</button>
//     </div>
//   )
// }

// export default Card


import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white text-black inline-block p-6 rounded m-3'>
        <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
         <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
        <h2>{props.city}, {props.age}</h2>
        <h4 className='text-blue-500'>{props.profession}</h4>
       <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-5'>Add Friend</button>
    </div>
  )
}

export default Card