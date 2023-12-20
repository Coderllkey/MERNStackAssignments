import { legacy_createStore as createStore} from 'redux'

const initialState = {counter: 0 , isShow:true};
const counterReducer  = ( state = initialState , action  )=>{
    let x = Math.floor(Math.random()*100);
    if(action.type === "increase"){
        return{
            counter:state.counter + 1,
            isShow: state.isShow
        }
    }
    if(action.type === "decrease"){
        return{
            counter:state.counter - 1,
            isShow: state.isShow
        }
    }
    if(action.type === "random"){
        return{
            counter:  x,
            isShow: state.isShow
        }
    }
    if(action.type ==="toggle"){
        return{
            isShow: !state.isShow,
            counter: state.counter
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;