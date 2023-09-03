import React from 'react'
import { useState } from 'react'
export default function CRUD() {

    const list =[
        {
          id: 1,
          name: "Hp",
          price: "222",
        },
        {
          id: 1,
          name: "Hp",
          price: "222",
        }
    
        
      ]
  const [ lists , setlist ] = useState(list);
 
  return (
    
    <div>
        <Addlist/>
      <table>
        {
            lists.map((current) =>(
                <tr>
                    <td>{current.name}</td>
                    <td>{current.name}</td>
                    <td>
                        
                        <button className=' btn btn-primary  ' >Edit</button>
                        <button className=' btn btn-primary  ' >Delete</button>
                   
                    </td>

                </tr>
            ) )
        }
      </table>
    </div>
  )
}
function Addlist(){
    function handlesubmit(event){
        const name = event.target.element.name.value;
        const price = event.target.element.name.price;
        const newlist = {
            id: 3,
            name,
            price,
        }
        setlist((prelist))

    }
    return(
        <form >
            <input type="text" name='name' placeholder='Enter Name' />
            <input type="text" name='name' placeholder='Enter Name' />
        <button type=' submit '></button>
        </form>
    )
}
