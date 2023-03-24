import logo from './logo.svg';
import './styles/main.css';
// import SendIcon from '@mui/icons-material/Send';
// import CheckIcon from '@mui/icons-material/Check';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import {SideBar,NavBar,Profile,Home} from './Container/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { RouterProvider,Route,Outlet ,createBrowserRouter} from 'react-router-dom';
function App() {
  console.log('app')
  const Layout=()=>{
    return <div>
      <NavBar/>
      <div className='d-xs-flex-column d-md-flex  col-12'> 
      <span className='col-xs-12 col-md-4'><SideBar/></span>
      <span className='col-xs-12 col-md-8'><Outlet/></span>
      </div>
    </div>
  }
  const router=createBrowserRouter([
   
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
             path:'/',
             element:<Home/>
        },
        {
          path:'/Profile',
          element:<Profile/>
        }
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
