import { getBooking } from "../data/getBooking"
import capitalizeFirstLetter from "./CapitalizeFirstLetter"
import { DateSimplybook } from "./DateSimplybook"

export const Bookings = async() => {
    const listBooking = []
    let i = 1
    let tmp = []
    do{
        tmp = (await getBooking(i)).data
        listBooking.push(...tmp)
        i++;
    }while(tmp.length > 0)
    return listBooking.reduce( (a,book,i) => {
        if(!a)a=[];
        const { client,start_datetime,end_datetime,service} = book;
        client.name = capitalizeFirstLetter(client.name)

        if(a.some(e=> 
            e.start_datetime === start_datetime 
            && e.end_datetime ===  end_datetime
            && JSON.stringify(e.service) === JSON.stringify(service)
            ))
        {
            
            a = a.map(e=> {
                if(e.start_datetime == start_datetime 
                && e.end_datetime ==  end_datetime
                && JSON.stringify(e.service) === JSON.stringify(service)
                ){e.clients++;e.listClient.push(client)}
                return e});
        }
        else{
            const {newDate,newHours} = DateSimplybook(start_datetime)
            a.push({service,start_datetime,end_datetime,clients:1,id:i,newDate,newHours,listClient : [client]})
        }
        return a;
    },[]).sort((a,b)=>{
        const dateA = new Date(a.start_datetime);
        const dateB = new Date(b.start_datetime);
        return dateA - dateB
    })
}