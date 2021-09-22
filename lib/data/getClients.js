export const getClients = async (page) => {
    return fetch(`https://user-api-v2.simplybook.me/admin/clients?page=${page}&on_page=100`,{
        headers : {
            "Content-Type": "application/json",
            "X-Company-Login": process.env.NEXT_PUBLIC_COMPANYLOGIN,
            "X-Token": localStorage.getItem('token')
        }
    }).then(res => res.json()).catch(err=> {throw new Error(err)})
}