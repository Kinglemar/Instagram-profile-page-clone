import { useState, useEffect } from 'react'
import picture from '../assets/img/annie.jpeg'
import CustomModal from './Utils/Modal'
import Preloader from './Utils/Preloader'
import { db } from '../services/dexie'
import Base64URL from '../services/convertToBase64'


export default function ProfileBio({ count, followers, following }) {
    const [openModal, setOpenModal] = useState(false)
    const [loading, setPreloader] = useState(false)
    const [avatar, setAvatar] = useState(picture)
    const [userDetails, setUserDetails] = useState({
        name: 'Dimeji Ogunleye',
        username: 'stripedCanvas'
    })

    const objectData = userDetails

    useEffect(() => {
        const setData = async () => {
            const userDetailsFromDb = await db.bio.get('info')
            userDetailsFromDb && setUserDetails(userDetailsFromDb)

            const profilePhotoFromDb = await db.bio.get('profile')
            profilePhotoFromDb && setAvatar(profilePhotoFromDb)
        }

        setData()
    }, [])

    const setPictureInput = async (event) => {
        let output = event.target.files[0]
        const newProfile = await Base64URL(output)
        setAvatar(newProfile)
        await db.bio.put(newProfile, 'profile')
    }

    const updateUserDetails = async (event) => {
        event.preventDefault()
        setUserDetails(objectData)
        await db.bio.put(objectData, 'info')
    }

    return (
        <section className="profile-section">
            <div className="section">
                <header className="items-stretch adjust flex shrink-0 relative header-margin">
                    <div className="shrink-0 flex justify-center flex-col h-[12rem] relative growth">
                        <div className="avatar" >
                            <canvas className="img-canvas" height="336" width="336">
                            </canvas>
                            <span className="img-span curve block shrink-0 overflow-y-hidden overflow-x-hidden relative" role="link" tabIndex="-1">
                                <label className="cursor-pointer hover:opacity-70" title="Click to edit photo" htmlFor="photo"><img alt="oops" src={avatar} className="" draggable="false" /></label>
                            </span>
                        </div>
                    </div>

                    <div className="hidden">
                        <input type="file" accept="image/*" name="photo" id="photo" onChange={setPictureInput} />
                    </div>

                    {/* //second section */}

                    <section className="p-0  flex flexd flexb flexg">
                        <div className="h-[48px] mb-5 flex items-center flex-row relative shrink">

                            <a className="cursor-pointer bg-transparent h-[18px] no-underline inline p-0 relative shrink" href="/" tabIndex="0">
                                <h2 className=" _aacs _aada">{userDetails.username}</h2>
                            </a>


                            <div className="flex  items-stretch flex-col flexf  ml-2">
                                <span className="bg-logo" title="Verified"></span>
                            </div>


                            <div className="flex items-center ml-5">
                                <button onClick={() => {
                                    setOpenModal(true)
                                }} className="ml-2 px-3 py-1 text-sm btn-broder font-semibold"> Edit</button>
                                <div className="h-[30px] ml-2">
                                    <button className="btn btn-broder" type="button">
                                        <div className="flex  px-5" style={{ height: '100%' }}>
                                            <div className="">
                                                <div className="flex" style={{ 'height': '18px' }}>
                                                    <svg aria-label="Following" className="_ab6-" color="#262626" fill="#262626" height="15" role="img" viewBox="0 0 95.28 70.03" width="20"><path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0Zm19-50.8A19 19 0 1 1 64.32 0a19.05 19.05 0 0 1 18.91 19.18ZM14.76 50.01a5 5 0 0 1-3.37-1.31L.81 39.09a2.5 2.5 0 0 1-.16-3.52l3.39-3.7a2.49 2.49 0 0 1 3.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 0 1 3.52 0l3.53 3.58a2.49 2.49 0 0 1 0 3.52L18.23 48.57a5 5 0 0 1-3.47 1.44Z"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div className="ml-2 flex flex-col items-stretch  " style={{ width: '34px' }}>
                                    <button className="btn _acap btn-broder _aj1-" type="button">
                                        <div className="flex items-center" style={{ height: '18px', }}>
                                            <span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}>
                                                <svg aria-label="Down chevron icon" className="_ab6-" color="#000000" fill="#000000" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ul className="flex text-base mb-5">
                            <li className="mr-10"><div className="_aacx _aacu"><span className="numb"><span>{count}</span></span> post{count > 1 ? 's' : ''}</div></li>
                            <li className="mr-10"><a className="_aacx _aacu" href="/annieleibovitz/followers/" tabIndex="0"><div className=""><span className="numb"><span>1M</span></span> followers</div></a></li>
                            <li className="mr-10"><div className="_aacx _aacu"><span className="numb"><span>{following}</span></span> following</div></li>
                        </ul>

                        <div className="flex flex-col _aa_c">
                            <span className="_aacl text-base m-0 numb inline leading-6 _aade">{userDetails?.name}</span>
                            <a className="text-base " href="/" > <div className="link-tag">bit.ly/3NArNmg</div></a>
                            <a href="/" tabIndex="0">
                                <div className="mt-3.5">
                                    <div className="text-base _aacl _aacn _aacv fancy-link _aad6">Followed by <span className="_aaai">antonelaroccuzzo</span>
                                        , <span className="_aaai">klayphotography</span>, and <span className="_aaai">adadegram</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                </header>

                {/* modal */}

                <div className="">
                    <CustomModal title={'Edit bio'} footer={false} openModal={openModal} closeModal={() => {
                        setOpenModal(false)
                        setPreloader(false)
                    }}>
                        <div className="">
                            <div className="h-[17rem] flex flex-col justify-center">
                                <div className="phone mx-auto phone">
                                    <div className="mb-2">
                                        <small className="text-base text-gray-700">First name</small>
                                    </div>
                                    <input defaultValue={userDetails?.name} className="border border-gray-600 p-3 h-[3rem] w-full rounded" onChange={(event) => {
                                        event.preventDefault()
                                        objectData.name = event.target.value
                                    }} type="text" name="nameOfUser" />
                                </div>
                                <div className="phone mx-auto phone">
                                    <div className="mb-2 mt-1">
                                        <small className="text-base text-gray-700">Username</small>
                                    </div>
                                    <input defaultValue={userDetails?.username} className="border border-gray-600 p-3 h-[3rem] w-full rounded" onChange={(event) => {
                                        event.preventDefault()
                                        objectData.username = event.target.value
                                    }} type="text" name="aboutUser" />
                                </div>
                                <div className="phone mx-auto phone">
                                    <button onClick={(event) => {
                                        setPreloader(true)
                                        setTimeout(() => {
                                            updateUserDetails(event)
                                        }, 2000)
                                        setTimeout(() => {
                                            setOpenModal(false)
                                            setPreloader(false)
                                        }, 2000)
                                    }} className="border min-h-[3.3rem] border-gray-600 p-2 bg-sky-500/75 my-5 font-bold text-white  w-full rounded">
                                        {loading ? <span><Preloader /></span> : <span>Save</span>}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </CustomModal>
                </div>
            </div>
        </section>
    )
}