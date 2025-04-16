import axios from "axios"

export const commonapi = async(httpmethod,url,reqbody)=>{


    const config={
        method: httpmethod,
        url,
        data: reqbody,
        headers:{"Content-Type":"application/json"}
    }

    await axios(config).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}