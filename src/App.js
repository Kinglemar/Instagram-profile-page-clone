import { Bio, Gallery, Navbar } from './components/entry'
import '../src/assets/css/App.css'
import '../src/assets/css/index.css'

const App = () => {
  return (
    <>
      <div className='w-100 bg-white nav-line'>
        <Navbar />
        <div className="container">
          <Bio />
          <Gallery />
        </div>
      </div>
    </>
  )
}

export default App
