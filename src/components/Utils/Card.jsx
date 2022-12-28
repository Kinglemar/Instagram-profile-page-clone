export default function Card({ picture, deletePicture }) {
    return (
        <div>
            <div>
                <div className="_aagu h-[293px] w-[293px] relative mb-8 ">
                    <div className="img-wrapper floating rounded">
                        <img alt="Pixel" className="w-full h-full" src={picture.image} width="293px" height="293px" style={{ 'objectFit': 'cover' }} />
                    </div>
                    <div className="_aagw z-10 cursor-pointer action w-full h-full">
                        <div className=" carte">
                            <button onClick={deletePicture} className="absolute bg-transparent top-[8.2rem] left-[8.2rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}