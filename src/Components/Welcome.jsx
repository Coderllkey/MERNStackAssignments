import { useDispatch } from "react-redux"
import { authActions } from "../store/AuthReducer";

const Welcome = () => {
    const dispatch = useDispatch();
    const loginHandler = ()=>{
        dispatch(authActions.login())
    }
  return (
    <div className='text-center  font-bold'>
        <button onClick={loginHandler} className='bg-sky-300 px-4 py-1 rounded-full border-2 border-sky-300 hover:bg-white hover:text-sky-300 focus:text-sky-500'>Login to Redux Counter</button>
    </div>
  )
}

export default Welcome