import axios from 'axios'

const commonApi=(reqMethod,reqUrl,reqData)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        data:reqData,
        haeders:{"Content-Type":"application/json"}
    }
    return axios(config)
}

export default commonApi