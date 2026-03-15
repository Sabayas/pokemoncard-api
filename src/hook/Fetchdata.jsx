// import React, { use, useState } from 'react'
// import { useEffect } from 'react';

// const Fetchdata = () => {
//   const [apiData, setData] = useState([]);

//   const fetchpokemon = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then((res) => res.json())
//     .then((data) =>{
//       setData(data);
//     })
//     .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     fetchpokemon();
//     }, []);


//     console.log(apiData);
// if (apiData) {
//   return (
//     <div>
//       <h1>Pokemon Data</h1>
//       <ul>
//         <h1>{apiData.name}</h1>
//         <img src={apiData.sprites.front_default} alt={apiData.name} />
//       </ul>
//     </div>
//   )
// }
// };

// export default Fetchdata;

import React, { useEffect } from 'react' 
import { useState } from 'react';



const Fetchdata = () => {

  const [data, SetData] = useState([]);

// fetch data from the api function
  const fetchpokemon = () => {

  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((res) => res.json())
  .then((data) =>{
  SetData(data);
  })
  .catch((err) => console.log(err));

}

console.log(data);

// useEffect to call the fetchpokemon function when the component mounts
useEffect(() => {
  fetchpokemon();
}, []);

// condition to render the data if it exists
if (data) {
  return (
    <div><h1>{data.name}</h1>
  </div>
  )
}
};

export default Fetchdata;