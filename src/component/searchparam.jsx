import React from 'react'
import { useState } from 'react'
Animal = ["Rabbit" , "Dog" , "Cat" , "Cow" , "Brids"]
function searchparam() {
    const [location , setLocation] = useState('')
    const [Animal , setAnimal] = useState('')
    const [Breeds , setBreeds] = useState('')
    // const  Breeds = [];
   
    // const location = ''
    console.log(location)
    console.log(Animal)
    console.log(Breeds)
  return (
    <div className='searchparam'>
    <form>
        <label htmlFor="location">
            <input type="text" id ="location" name='location' value={location} placeholder='Location'
             onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label htmlFor="animals">
            <select name="animals" id="animals" value={Animal} onChange={(e) => setAnimal(e.target.value)}>
              {
                Animal.map((item , index) => (
                    <option value= {item} key={index}>{item}</option>
                ))
              }
            </select>

        </label>
        <label htmlFor="breed">
            <select name="breed" id="breed" value={breed} onChange={(e) => setBreeds(e.target.value)}
            disabled = {!Breeds.length < 1}>
              {
                Breeds.map((item , index) => (
                    <option value= {item} key={index}>{item}</option>
                ))
              }
            </select>

        </label>
    </form>
    </div>
  )
}

export default searchparam