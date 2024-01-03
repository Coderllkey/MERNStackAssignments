import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Main from './Layout/Main';

const router =  createBrowserRouter([
  {path:"",element:<Main/>, children:[
    {path:"/",element: <Home/>},
    {path:'/about',element: <About/>}
  ]},
 
])



function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
