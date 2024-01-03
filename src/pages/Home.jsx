import { useNavigate } from "react-router-dom"
const Home = () => {
const Navigate = useNavigate();

    const go = ()=>{

        setTimeout(() => {
            Navigate("/about")
        }, 3000);
    }
  return (
    <div>
      {/* <Navbar/> */}
        
        <h1>
      This is homePage.    
    </h1>
    <button onClick={go}>Go to about</button>
    </div>
  )
}

export default Home