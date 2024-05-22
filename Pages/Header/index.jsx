import React, { useState } from 'react'
import "./style.css"
import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, NavLink } from 'react-router-dom'
function Header() {
  const [item, SetItem] = useState(JSON.parse(localStorage.getItem("usersData")) || [])
  const [data, setData] = useState(JSON.parse(localStorage.getItem("usersData")) || [])
  
  
  function deleteData (email){
  const updatedRows = data.filter((row)=> row.email !== email)
  setData(updatedRows) 
  localStorage.setItem('usersData', JSON.stringify(updatedRows))
  }
  
  function DeleteAll() {
  data.map(({email}) =>{
  const updatedRows = data.filter((item)=> item.email == email && item.email !== email)
  setData(updatedRows) 
  localStorage.setItem('usersData', JSON.stringify(updatedRows))
  })}
  
      function openModal() {
      main.classList.add("hidden");
    }
   
  return (
    <>
    <header className='header'>
    <div className="container header-container">
    <div className="logo">
        <h1>A<span className='logo-span'>PI</span></h1>
    </div>
    <nav className='nav'>
        <ul className='nav-list'>
        <NavLink className='nav-item'>Home</NavLink>
        <NavLink className='nav-item'>About</NavLink>
        <NavLink className='nav-item'>Contacts</NavLink>
            <button type="submit" className="homebtn">
              <Link to={"/signup"}>Sign Up</Link>
            </button>
        </ul>
    </nav>
    {item.map((data) => (
    <div  onClick={()=> { openModal() }}  className="avatar-div">
       <img 
       className='avatar' src={data.avatar}  />
       <p className='avatar-text'>{data.name}</p>
    </div>
       ))}
       
    </div>
    </header>
    <main className="container still ">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="tablerow">
              <TableCell>Users</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Avatar</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">
                <button onClick={() => {DeleteAll()}} className="deleteBtn">DeleteAll</button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((rows, index) => (
              <TableRow key={rows.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell  align="right">{rows.name}</TableCell>
                <TableCell align="right">
                <img src={rows.avatar} alt="" width={30}/> 
                </TableCell>
                <TableCell align="right">{rows.email}</TableCell>
                <TableCell align="right">{rows.password}</TableCell>
                 <TableCell align="right">
                 <img onClick={() => deleteData(rows.email)} src="../public/images/fr.png" alt=""  width={24}/>
                 </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>

    </>
  )
}

export default Header