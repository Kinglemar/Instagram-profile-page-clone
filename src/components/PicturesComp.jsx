
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import Base64URL from '../services/convertToBase64'
import Card from '../components/Utils/Card'
import { db } from '../services/dexie'
import Dialogue from './Utils/Dialogue'
import Loader from './Utils/Loader'


export default function PicturesComp() {
    let allPhotos = useLiveQuery(() => db.archive.toArray(), [])
    var load = allPhotos
    const [open, setOpen] = useState(false)
    const [action, setAction] = useState(false)
    const [fetching, setFetcher] = useState(true)
    var pic = null
    const uploadPhoto = async (event) => {
        pic = event.target.files[0]
        let response = await Base64URL(pic)

        db.archive.add({
            image: response,
            uid: Math.random()
        })
    }

    setTimeout(() => {
        setFetcher(false)
    }, 3000)

    const BulkDelete = () => {
        allPhotos?.length > 0 && setOpen(true)
    }

    const yesDelete = () => {
        setAction(true)
        let arr = load
        let ids = []
        for (let x = 0; x < arr.length; x++) {
            ids.push(arr[x].id)
        }
        setTimeout(() => {
            ids.length > 0 && db.archive.bulkDelete(ids)
        }, 2000)
        setTimeout(() => {
            setOpen(false)
            setAction(false)
        }, 2000)


    }

    const Cards = allPhotos?.map((el, index) => {
        return (<Card deletePicture={(event) => {
            removePhoto(el.id)
        }} key={index} picture={el} />)
    })
    const Loaders = allPhotos?.map((el, index) => {
        return (<Loader />)
    })

    const removePhoto = (id) => {
        allPhotos = allPhotos.map((el) => el.id !== id)
        db.archive.delete(id)
    }
    return (
        <section className="grey-back">
            <div className="line galleria">
                {allPhotos?.length > 0 ?
                    <div className="pt-14 picture-comp">
                        { fetching ? Loaders : Cards}
                    </div> :
                    <div className="p-40 text-base text-center">No pictures here click the plus icon to add. </div>
                }

            </div>

            <input type="file" onChange={(event) => { uploadPhoto(event) }} className="hidden" accept="image/*" name="photo" id="addPhotoInput" />
            <label title="Add picture" htmlFor="addPhotoInput">
                <svg aria-label="New post" className="add-button cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
            </label>

            <div onClick={BulkDelete}>
                <label title="Delete all" htmlFor=""><svg className="delete" xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 28 28"><path fill="currentColor" d="M16.5 6a2.5 2.5 0 0 0-5 0h5ZM10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-.508 6.095A7.5 7.5 0 0 0 14.401 26h-3.889a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5H10Zm16 14.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Zm-6.5-.707l-2.646-2.647a.5.5 0 0 0-.708.708l2.647 2.646l-2.647 2.646a.5.5 0 0 0 .708.708l2.646-2.647l2.646 2.647a.5.5 0 0 0 .708-.708L20.207 20.5l2.647-2.646a.5.5 0 0 0-.708-.708L19.5 19.793Z" /></svg></label>
            </div>

            <Dialogue count={allPhotos?.length} isOpen={open} spinner={action} clicked={() => {
                yesDelete()
            }} onClose={() => setOpen(false)} />
        </section>
    )
}