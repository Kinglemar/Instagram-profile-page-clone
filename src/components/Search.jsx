import { useState } from 'react'
import Tile from './Tile'
import Variables from '../services/user'


export default function () {
    const [user, updateUser] = useState(Variables)
    const deleteUser = (el) => {
        let newUser = user
        let tray = newUser.filter((innerEl) => innerEl.uid !== el.uid)
        updateUser(tray)
    }
    return (
        <div className="search-comp">
            <div className="search-header flex justify-between">
                <h4 className="_aacp">Recent</h4>
                <button onClick={() => {
                    updateUser([])
                }} className="clear-btn">Clear all</button>
            </div>

            {(user.length > 0 ) ? user.map((el) => {
                return (<Tile user={el} deleteUser={() => {
                    deleteUser(el)
            }} />)
            }) : 
            <div className='p-8 text-14 text-center'>
                {'No recent search'}    
            </div>}
        </div>

    )
}