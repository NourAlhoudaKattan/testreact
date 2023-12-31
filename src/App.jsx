
import './App.css'
import Nav from './components/nav/Nav'
function App() { 

  return (
    <>
      <Nav menu={["home", "contactus","about"]} logo="Trippy" btn="sign in"/>
    </>
  )
}

export default App
