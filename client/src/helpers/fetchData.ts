

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