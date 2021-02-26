export const regValidator = (name,email,password,github_username) => {
    if(!name || !email || !password || !github_username)
        return "Please fill all inputs"

    if(password.length < 6) 
        return "Password must be min 6 character"

    if(!validateEmail(email))
        return "Please write correct email"
}

export const loginValidator = (email,password) => {
    if(!email || !password)
        return "Please fill all inputs"

    if(password.length < 6) 
        return "Password must be min 6 character"

    if(!validateEmail(email))
        return "Please write correct email"
}

export const postValidator = (title,category,description,image) => {
    if(!title || !description || !category || !image)
        return "Please fill all inputs"
    
    if(title.length > 35 || title.length < 3)
        return "Title must be max 25 character"
    
    if(description.length > 65 || description.length < 3)
        return "Description must be max 65 character"
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}