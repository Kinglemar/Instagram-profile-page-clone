import { Bio, Gallery, Navbar, ProfileBio } from './components/entry'
import '../src/assets/css/App.css'
import '../src/assets/css/index.css'
import '../src/assets/css/bio.css'
import '../src/assets/css/profile.css'
import PicturesComp from './components/PicturesComp'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <ChakraProvider>
        <div className="w-100 bg-white nav-line">
          <Navbar />
          <ProfileBio count={24} following={2}/>
          <PicturesComp>

          </PicturesComp>
          {/* <div className="container">
          
        </div> */}
        </div>
      </ChakraProvider>

    </>
  )
}

export default App
