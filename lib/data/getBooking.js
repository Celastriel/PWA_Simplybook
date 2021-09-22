export const getBooking = async (page) => {
    return fetch('https://user-api-v2.simplybook.me/admin/bookings?page='+page+'&on_page=100&filter[upcoming_only]=1&filter[status]=confirmed',{
        headers : {
            "Content-Type": "application/json",
            "X-Company-Login": process.env.NEXT_PUBLIC_COMPANYLOGIN,
            "X-Token": localStorage.getItem('token')
        }
    }).then(res => res.json()).catch(err=> {throw new Error(err)})
}