import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'
import { getAllStudents } from '../api/fetchApi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteStudent } from '../api/fetchApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Home() {

  const [students,setStudents]=useState([])
  const navigate=useNavigate()


  useEffect(()=>{
    getAllStudents().then((result)=>{
      console.log(result);
      setStudents(result.data)
    })
  },[])
  

  const deleteStud = (id)=>{
    deleteStudent(id).then((res)=>{
      toast("student deleted")
      navigate('/')
    })
  }

  return (
    <>
    <Header/>
    <div className='mt-5'>
    <Row>
      <Col sm={2}></Col>
      <Col sm={8}>
        <h2 className='text-center text-primary'>Student list</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>PLACE</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
           {
            students.length>0?
              students.map((stud)=>(
                <tr>
                <td>{stud.id}</td>
                <td>{stud.student_name}</td>
                <td>{stud.age}</td>
                <td>{stud.place}</td>
                <td>{stud.email}</td>
                <td>
                  <Link to={`edit/${stud.id}`} className='btn btn-info'>Update</Link>
                  <button className='btn btn-danger' onClick={()=>{deleteStud(`${stud.id}`)}}>Delete</button>
                </td>
              </tr>
              ))

            : <h1>no students</h1>
           }
          </tbody>
        </table>
      </Col>
    </Row>
      
    </div>
    <Footer/>
    </>
  )
}

export default Home