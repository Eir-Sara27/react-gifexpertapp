import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories=['One Punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    //const handleAdd= () =>{
        //setCategories([...categories,'HunterXHunter']);//Agregar un elemento al componente
        //setCategories(cats=>[...cats,'HunterXHunter']);//Importante
        
    //}
//Se manda la referencia a setCategories en el propio componente de AddCategory
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            

            <ol>
               {
                   categories.map(category=>(
                       <GifGrid 
                       key={category}
                       category={category} 
                       />
                   ))

                       //return <li key={category}>{category}</li>//id de bases de datos para poder referenciarlos
                   
               }
            </ol>
            
        </>
    )
}
