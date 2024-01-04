import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Main from './Layout/Main';
import Error from './pages/Error';
import Product from './pages/Product';

const router =  createBrowserRouter([
  {path:"",element:<Main/>,
  errorElement: <Error/>
  ,
  children:[
    {path:"/",element: <Home/>},
    {path:'/about',element: <About/>},
    {path:'/product/:id',element:<Product/>}
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
