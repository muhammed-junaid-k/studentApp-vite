import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Row,Col, Toast} from 'react-bootstrap'
import { getStudent } from '../api/fetchApi';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { editStudent } from '../api/fetchApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {

  const [student,setStudent]=useState({
    student_name:"",age:"",place:"",email:""
  })

  const {id}=useParams()

  const navigate=useNavigate()
   

  useEffect(()=>{
    getStudent(id).then((res)=>{
      console.log(res.data);
      setStudent(res.data)
    })
  },[])

  const studUpdate=()=>{
    editStudent(id,student).then((res)=>{
      toast("student data updated")
      navigate('/')
    })
  }

  return (
    <div>
    <Row>
      <Col sm={2}></Col>
      <Col sm={8} className='mt-5 text-center'>
      <h1>Edit Student</h1>
      <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
      <Form.Control type="text" placeholder="abc" onChange={(e)=>{setStudent({...student,student_name:e.target.value})}} value={`${student.student_name}`}/>
    </FloatingLabel>
    <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
      <Form.Control type="number" placeholder="23" onChange={(e)=>{setStudent({...student,age:e.target.value})}} value={`${student.age}`}/>
    </FloatingLabel>
    <FloatingLabel controlId="floatingPlace" label="Place" className="mb-3">
      <Form.Control type="text" placeholder="calicut" onChange={(e)=>{setStudent({...student,place:e.target.value})}} value={`${student.place}`}/>
    </FloatingLabel>
    <FloatingLabel controlId="floatingEmail" label="Email">
      <Form.Control type="email" placeholder="abc@gmail.com" onChange={(e)=>{setStudent({...student,email:e.target.value})}} value={`${student.email}`}/>
    </FloatingLabel>
    <div>
      <button className='btn btn-success' onClick={studUpdate}>Update</button>
    </div>
      </Col>
    </Row>
  </div>  )
}

export default Edit