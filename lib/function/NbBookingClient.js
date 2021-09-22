export default function nbBookingClient(booking){
    return booking.reduce( (a,e) => {
        if(!a)a=0;
        a += e.clients
        return a
    },0)
}