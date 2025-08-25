import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {
  return (
    <>
      <div className="w-full flex flex-wrap font-sans">
        <Header/>
        <Container/>
        <Footer/>
      </div>
    </>
  )
}

export default App
