
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { ReactDOM } from 'react';
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
import StudentManagement from './assets/StudentManagement';
import Graph from './graph';
import { Bar } from 'react-chartjs-2';


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

    <div className=' p-2 color-H ' >


      <span className=' text-white pl-8 text-3xl  font-semibold    ' >  E-LIBRARY</span>
      <span className='text-white  text-3xl font-semibold   ml-60 pl-72  ' >Dashboard</span>

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
      <MenuList className='  p-0 color ' >
        <div className='  text-white  h-screen w-60 p-2 ' >
          <span className='   pl-7  conta   ' > <  AccountCircleIcon color='White' />  Uer Name</span>  <br />
          <span className=' text-xs  pl-12  ' >Online</span>


          <input className='mt-3  rounded-md border-solid  container-fluid  bg-slate-200 ' type="text" placeholder='Serch...' />

          <div className=' p-2  mt-10  ' >
            {/* <div className='pl-6 mt-2 ' > <Link to='/' key='/' >  Home </Link> <span className=' float-right   ' >  <HomeIcon  /> </span></div> */}

            <div className='pl-6 mt-2 ' > <Link to='Studentmanager' key='/Studentmanager' >  Student Manager </Link>  <span className=' float-right   ' >  <FaceIcon   /> </span> </div>
            <div className='pl-6 mt-2 ' > <Link to='Booksmanager' key='/Booksmanager' >  Books Manager </Link> <span className=' float-right   ' >  <LibraryBooksIcon   /> </span>  </div>
           




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
  <div>
<Graph/>
  </div>
  </>
  )

}
function BooksManager() {
  return (

    <>
  <div>   
    {/* <span className='    pl-0 '   ><FaceIcon sx={{ fontSize: 40 }} /></span>   */}
        <span>    
          <span className='  p-2 font-sans text-4xl  pb-3 flex  felx  justify-center      text-white  font-semibold bg-blue-600    '> <span className='  '  > <LibraryAddCheckIcon sx={{ fontSize: 40 }} /> LIBRARY MANAGEMENT SYSTEM</span> </span></span>



     <div className=' w-auto   h-auto  pt-10   ' >




<div className=" p-2 font-medium bg-white	 ">
  <div className=' pl-2 pt-2 pb-2   text-3xl flex justify-between' >Books Manager
  
  </div>
  <table >
    <thead className=' text-black font-sans font-semibold bg-white' >
      <tr className='' >
        <th className='p-2' >Name</th>
        <th className='p-2' >ISBN</th>
        <th className='p-2'>Catagory</th>
        <th className='p-2'>Quantity</th>
        <th className='p-2'>Available</th>
        <th className='p-2'>Price</th>
        <th className='  btn btn-info    ml-72 ' ><button className='  ' >View</button></th>






      </tr>
    </thead>
    <tbody className=' text-black font-sans font-medium bg-white'>
      <tr >


        <td className='p-2  ' >Abdul Hadi</td>
        <td className='p-2'> 1423025461</td>
        <td className='p-2'> Physyology</td>
        <td className='p-2'> 10</td>
        <td className='p-2'> 10</td>
        <td className='p-2'>250$</td>
        <th className='  btn btn-info    ml-72 ' ><button className='  ' >View</button></th>


        
       








      </tr>
      <tr>
        <td className='p-2'>Muhammad Hammad</td>
        <td className='p-2'> 1423025461</td>
        <td className='p-2'>Two one Act</td>
        <td className='p-2'>5</td>
        <td className='p-2'>5</td>
        <td className='p-2'>500$</td>
        <th className='  btn btn-info    ml-72 ' ><button className='  ' >View</button></th>


    







      </tr>
      <tr>
        <td className='p-2  ' >Ammar</td>
        <td className='p-2'> 1423025461</td>
        <td className='p-2'> Science</td>
        <td className='p-2'> 10</td>
        <td className='p-2'> 10</td>
        <td className='p-2'>250$</td>
        <th className='  btn btn-info    ml-72 ' ><button className='  ' >View</button></th>


 
      </tr>
      <tr>
        <td className='p-2  ' >Anaus</td>
        <td className='p-2'> 1423025461</td>
        <td className='p-2'> Astrology</td>
        <td className='p-2'> 10</td>
        <td className='p-2'> 10</td>
        <td className='p-2'>250$</td>
        <th className='  btn btn-info    ml-72 ' ><button className='  ' >View</button></th>




      </tr>
      <tr>
        <td className='p-2  ' >Amir</td>
        <td className='p-2'> 1423025461</td>
        <td className='p-2'> Technology</td>
        <td className='p-2'> 10</td>
        <td className='p-2'> 10</td>
        <td className='p-2'>250$</td>
        <th className='  btn btn-info    ml-72 ' ><button className='  ' >View</button></th>


       

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
    <div>   
    {/* <span className='    pl-0 '   ><FaceIcon sx={{ fontSize: 40 }} /></span>   */}
        <div>    
          <div className='  p-2 font-sans text-4xl  pb-3 flex  felx  justify-center      text-white  font-semibold bg-blue-600    '> <span className='  '  > <LibraryAddCheckIcon sx={{ fontSize: 40 }} /> LIBRARY MANAGEMENT SYSTEM</span> </div></div>


  </div>
    <div className='  pt-5 pl-2 ' >
      
      <StudentManagement/>
    </div>
    </>
  )





}


function Content() {
  return <div>
    <Routes>
      {/* <Route path='/' element={<Home />} >  </Route> */}
      <Route path='/Studentmanager' element={<StudentManager />} >  </Route>
    

      <Route path='/Booksmanager' element={<BooksManager/>} >  </Route>

    </Routes>
  </div>
}

export default App
