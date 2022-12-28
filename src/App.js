import { Navbar, ProfileBio } from './components/entry'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './services/dexie'
import '../src/assets/css/App.css'
import '../src/assets/css/index.css'
import '../src/assets/css/profile.css'
import '../src/assets/css/gallery.css'
import PicturesComp from './components/PicturesComp'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  let allPhotos = useLiveQuery(() => db.archive.toArray(), [])
 
  return (
    <>
      <ChakraProvider>
        <div className="scroll-smooth">
          <div className="nav-line bg-white">
            <Navbar />
          </div>
          <div className="w-100 mt-14">
            <ProfileBio count={allPhotos ? allPhotos.length : 0} following={2} />
            <PicturesComp />
          </div>
        </div>
      </ChakraProvider>

    </>
  )
}

export default App
