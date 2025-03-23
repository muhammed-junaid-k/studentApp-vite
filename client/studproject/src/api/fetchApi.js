import { data } from "react-router-dom";
import commonApi from "./commonApi";

export const getAllStudents=()=>{
    return commonApi("GET","http://127.0.0.1:8000/student/","")
}

export const addStudent=(data)=>{
    return commonApi("POST","http://127.0.0.1:8000/student/",data)
}

export const deleteStudent=(id)=>{
    return commonApi("DELETE",`http://127.0.0.1:8000/student/${id}/`,"")
}

export const getStudent=(id)=>{
    return commonApi("GET",`http://127.0.0.1:8000/student/${id}/`,"")
}

export const editStudent=(id,data)=>{
    return commonApi("GET",`http://127.0.0.1:8000/student/${id}/`,data)
}