export const getToken = async() => {
    const body = {
        "company" : `${process.env.NEXT_PUBLIC_COMPANYLOGIN}`,
        "login" : `${process.env.NEXT_PUBLIC_LOGIN}`,
        "password" : `${process.env.NEXT_PUBLIC_PASSWORD}`
      }
       return await fetch('https://user-api-v2.simplybook.me/admin/auth',{
        method:'POST',
        headers:{
        'content-type' : 'application/json'
        },
        body : JSON.stringify(body)
      }).then(value => (value.json()).catch( err => { throw new Error(err)}));
}

export default getToken