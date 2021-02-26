

export const postData = async(url:RequestInfo,data: any): Promise<any> => {
    const token = await getData(`/user/refresh_token`)
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": token,
            "Content-type":"application/json"
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
}


export const getData = async (url:RequestInfo,token?:any):Promise<any> => {
    const response = await fetch(url, {
        headers: {
            "Authorization": token
        }
    })
    const result = await response.json()
    return result
}

export const deleteData = async (url:RequestInfo):Promise<any> => {
    const token = await getData(`/user/refresh_token`)
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": token
        }
    })
    const result = await response.json()
    return result
}


export const putData = async (url:RequestInfo, data: any):Promise<any> => {
    const token = await getData(`/user/refresh_token`)
    const response = await fetch(url,{
        method: "PUT",
        headers: {
            "Authorization": token,
            "Content-type":"application/json"
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
}


export const imageUpload = async (mediaurl:any):Promise<string> => {
    const data =  new FormData()
    data.append('file',mediaurl)
    data.append('upload_preset',"blogApp")
    data.append('cloud_name',"themrzlyv")
    const res = await fetch("https://api.cloudinary.com/v1_1/themrzlyv/image/upload",{
        method:"POST",
        body:data
    })
    const res2  = await res.json()
    return res2.url
}


