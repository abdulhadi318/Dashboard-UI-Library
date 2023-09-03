
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Route, Router, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import FaceIcon from '@mui/icons-material/Face';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import { useState } from 'react';
import CRUD from './assets/CRUD';


function App() {


  return (
    <>

      <div>
        <div><Header /></div>

        <div>
          <Sidemenu />

        </div>
        <div>
          <Footer />
        </div>



      </div>
    </>
  )
}

function Header() {
  return (

    <div className=' p-2 bg-blue-500 flex   ' >


      <div className=' text-white pl-8 text-3xl  font-semibold    ' >  E-LIBRARY</div>
      <div className='text-white  text-3xl font-semibold   ml-60 pl-72  ' >Dashboard</div>

    </div>

  )
}
function Footer() {
  return (
    <div>
   
    </div>
  )
}
function Sidemenu() {
  return (

    <div className='  to-white flex flex-row mb-3 ' >
      <MenuList className='  p-0  ' >
        <div className=' bg-slate-950  text-white  h-screen w-60 p-2 ' >
          <span className='   pl-7  conta   ' > <  AccountCircleIcon color='White' />  Uer Name</span>  <br />
          <span className=' text-xs  pl-12  ' >Online</span>


          <input className='mt-3  rounded-md border-solid  container-fluid  bg-slate-200 ' type="text" placeholder='Serch...' />

          <div className=' p-2  mt-10  ' >
            <div className='pl-6 mt-2 ' > <Link to='/' key='/' >  Home </Link> <span className=' float-right   ' >  <HomeIcon fontSize="small" color='  action  ' /> </span></div>

            <div className='pl-6 mt-2 ' > <Link to='Studentmanager' key='/Studentmanager' >  Student Manager </Link>  <span className=' float-right   ' >  <FaceIcon fontSize="small" color='  action  ' /> </span> </div>
            <div className='pl-6 mt-2 ' > <Link to='Booksmanager' key='/Booksmanager' >  Books Manager </Link> <span className=' float-right   ' >  <LibraryBooksIcon fontSize="small" color='  action  ' /> </span>  </div>
           




          </div >


        </div>
      </MenuList>
      <Content />
    </div>
  )
}

function Home() {
  return (
  <>
  </>
  )

}
function BooksManager() {
  return (

    <>
  <div>   
    {/* <span className='    pl-0 '   ><FaceIcon sx={{ fontSize: 40 }} /></span>   */}
        <div>    
          <div className='  p-2 font-sans text-4xl  pb-3 flex  felx  justify-center      text-white  font-semibold bg-blue-600    '> <span className='  '  > <LibraryAddCheckIcon sx={{ fontSize: 40 }} /> LIBRARY MANAGEMENT SYSTEM</span> </div></div>



     <div className=' w-auto   h-auto  pt-10   ' >




<div className=" p-4 font-medium bg-white	 ">
  <div className=' pl-6 pt-4 pb-4   text-3xl flex justify-between' >Books Manager
  <div>
<button className='btn btn-primary' > Add Books</button>
  </div>
  </div>
  <table >
    <thead className=' text-black font-sans font-semibold bg-white' >
      <tr className='' >
        <th className='p-4' >Name</th>
        <th className='p-4' >ISBN</th>
        <th className='p-4'>Catagory</th>
        <th className='p-4'>Quantity</th>
        <th className='p-4'>Available</th>
        <th className='p-4'>Price</th>
        <th className='  btn btn-info  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >View</button></th>
        <th className='  btn btn-primary pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Edit</button></th>
        <th className='  btn btn-danger  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Delete </button></th>





      </tr>
    </thead>
    <tbody className=' text-black font-sans font-medium bg-white'>
      <tr >



        <td className='p-4 p ' >Abdul Hadi</td>
        <td className='p-4'> 1423025461</td>
        <td className='p-4'> Physyology</td>
        <td className='p-4'> 10</td>
        <td className='p-4'> 10</td>
        <td className='p-4'>250$</td>
        <th className='  btn btn-info  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >View</button></th>
        <th className='  btn btn-primary pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Edit</button></th>
        <th className='  btn btn-danger  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Delete </button></th>








      </tr>
      <tr>
        <td className='p-4'>Muhammad Hammad</td>
        <td className='p-4'> 1423025461</td>
        <td className='p-4'>Mony Making</td>
        <td className='p-4'>5</td>
        <td className='p-4'>5</td>
        <td className='p-4'>500$</td>
        <th className='  btn btn-info  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >View</button></th>
        <th className='  btn btn-primary pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Edit</button></th>
        <th className='  btn btn-danger  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Delete </button></th>







      </tr>
      <tr>
        <td className='p-4  ' >Ammar</td>
        <td className='p-4'> 1423025461</td>
        <td className='p-4'> Physyology</td>
        <td className='p-4'> 10</td>
        <td className='p-4'> 10</td>
        <td className='p-4'>250$</td>
        <th className='  btn btn-info  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >View</button></th>
        <th className='  btn btn-primary pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Edit</button></th>
        <th className='  btn btn-danger  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Delete </button></th>
      </tr>
      <tr>
        <td className='p-4  ' >Anaus</td>
        <td className='p-4'> 1423025461</td>
        <td className='p-4'> Physyology</td>
        <td className='p-4'> 10</td>
        <td className='p-4'> 10</td>
        <td className='p-4'>250$</td>
        <th className='  btn btn-info  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >View</button></th>
        <th className='  btn btn-primary pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Edit</button></th>
        <th className='  btn btn-danger  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Delete </button></th>

      </tr>
      <tr>
        <td className='p-4  ' >Amir</td>
        <td className='p-4'> 1423025461</td>
        <td className='p-4'> Physyology</td>
        <td className='p-4'> 10</td>
        <td className='p-4'> 10</td>
        <td className='p-4'>250$</td>
        <th className='  btn btn-info  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >View</button></th>
        <th className='  btn btn-primary pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Edit</button></th>
        <th className='  btn btn-danger  pl-6 pr-6  ml-2 ' ><button className=' p-1 ' >Delete </button></th>

      </tr>
   

    </tbody>
  </table>



</div>
</div>
</div>
       
    </>
    
    
   

 
  )

}
function StudentManager() {

  return(
    <>
    <div className='  pt-40 pl-10 ' >
      <CRUD/>
    </div>
    </>
  )





}


function Content() {
  return <div>
    <Routes>
      <Route path='/' element={<Home />} >  </Route>
      <Route path='/Studentmanager' element={<StudentManager />} >  </Route>
    

      <Route path='/Booksmanager' element={<BooksManager/>} >  </Route>

    </Routes>
  </div>
}

export default App
