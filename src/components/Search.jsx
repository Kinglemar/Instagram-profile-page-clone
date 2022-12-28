import { useState } from 'react'
import Tile from './Tile'
import Variables from '../services/user'


export default function Search ({searchFunction}) {
    const [user, updateUser] = useState(Variables)
    let arr = user
    const gallery = arr.filter((el) => {
        return el?.name?.toLowerCase().includes(searchFunction?.toLowerCase())
      })
    console.log({gallery})

    const deleteUser = (el) => {
        let newUser = user
        let tray = newUser.filter((innerEl) => innerEl.uid !== el.uid)
        updateUser(tray)
    }

    // updateUser(up)
    return (
        <div className="search-comp">
            <div className="search-header flex justify-between">
                <h4 className="_aacp">Recent</h4>
                <button onClick={() => {
                    updateUser([])
                }} className="clear-btn">Clear all</button>
            </div>

            {(user.length > 0 ) ? user.map((el, index) => {
                return (<Tile key={index} user={el} deleteUser={() => {
                    deleteUser(el)
            }} />)
            }) : 
            <div className='p-8 text-14 text-center'>
                {'No recent search'}    
            </div>}
        </div>

    )
}