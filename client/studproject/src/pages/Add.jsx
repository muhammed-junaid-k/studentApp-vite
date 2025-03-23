import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
import { addStudent } from '../api/fetchApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Add() {

  const[student,setStudent]=useState({
    student_name:"",age:"",place:"",email:""
  })

  const navigate=useNavigate()

  const addData=()=>{
    const{student_name,age,place,email}=student
  if(!student_name || !age || !place || !email){
    toast("invalid input")
  }
  else{
    addStudent(student).then((res)=>{
      console.log(res);
      toast("student added")
      navigate('/')
    })
  }
  }

  return (
    <div>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8} className='mt-5 text-center'>
        <h1>Add Student</h1>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="abc" onChange={(e)=>{setStudent({...student,student_name:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
        <Form.Control type="number" placeholder="23" onChange={(e)=>{setStudent({...student,age:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPlace" label="Place" className="mb-3">
        <Form.Control type="text" placeholder="calicut" onChange={(e)=>{setStudent({...student,place:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingEmail" label="Email">
        <Form.Control type="email" placeholder="abc@gmail.com" onChange={(e)=>{setStudent({...student,email:e.target.value})}}/>
      </FloatingLabel>
      <div>
        <button className='btn btn-success' onClick={addData}>Submit</button>
      </div>
        </Col>
      </Row>
    </div>
  )
}

export default Add