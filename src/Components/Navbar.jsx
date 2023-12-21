import { useSelector, useDispatch } from "react-redux"
import { authActions } from "../store/AuthReducer"

const Navbar = () => {
    const isLogin = useSelector(state=>state.auth.isLogin)
    const dispatch = useDispatch()

    const logoutHandler = ()=>{
        dispatch(authActions.logout())
    }
  return (
        <nav className='flex justify-between bg-sky-300 mb-5 '>
            <h1 className='text-2xl font-bold text-white p-2 '>Redux toolkit</h1>
            {isLogin && (
 <ul className='flex p-2 '>
 <li className='mx-2 pt-1'>My Record</li>
 <li className='mx-2 pt-1'>Profile</li>
 <li>
     <button onClick={logoutHandler} className='bg-white text-sky-300 px-3 py-1 rounded-lg mx-2'>Logout</button>
 </li>
</ul>
            )}
           
        </nav>
    )
}

export default Navbar