import { useEffect, useState } from "react"
import { Bookings} from "../lib/function/Bookings";
import nbBookingClient from "../lib/function/NbBookingClient"
import ReservationComponent from "../components/ReservationComponent";
import Loader from "../components/Loader";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Reservation(){

    const [reservations,setReservations] = useState([])
    const [isFilter,setIsFilter] = useState(false)
    const [filterReservations,setFilterReservation] = useState([])
    const [selectDate, setSelectDate] = useState(new Date())
    const [isSelect, setIsSelect] = useState(false)
    const [calendarIsActive,setCalendarIsActive] = useState(false)

    useEffect(()=>{
        
        (async function data(){
            setReservations(await Bookings())
        })();  
      },[])

    useEffect(()=> {
        if(reservations.length > 0){
            const filterData = (reservations.filter(e=> {
                const date = new Date((e.start_datetime).replace(/-/g, "/")) 
                return (date.getDate() === selectDate.getDate()&&date.getMonth() === selectDate.getMonth()&&date.getFullYear() === selectDate.getFullYear())
            }))
            setFilterReservation(filterData)
            setIsFilter(true)
            setIsSelect(true)
            displayFilter(false)
        }
    },[selectDate])

    const displayFilter = () => {
        setCalendarIsActive(!calendarIsActive)
    }

    const handleSelect = () => {
        setIsSelect(!isSelect)
    }

    const cleanFilter = () => {
        setFilterReservation([]);
        setCalendarIsActive(false)
        setIsFilter(false)
        setIsSelect(false)
    }

    const arrayDateForDisplay = (date) => {
        return date.toString().split(" ");
    }

    const discardFilter = () => {
        setCalendarIsActive(false)
    }

    return (<>
        {
            reservations.length > 0 ?
                <>
                
                <div className="overflow-hidden bg-white shadow sm:rounded-md" >
                    {
                        !isSelect ?
                            !calendarIsActive?
                            <button className="w-full py-2 text-sm font-medium  truncate" onClick={displayFilter}>
                                <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <p className="my-auto">Filtrer par date</p>
                                </div>
                            </button>
                            :
                            <></>
                        :
                        <button className="w-full py-2 text-sm font-medium  truncate" onClick={cleanFilter}>
                            <div className="flex flex-row">
                            <svg className="w-6 h-6 mx-5 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <p className="my-auto">{arrayDateForDisplay(selectDate)[2] + " " + arrayDateForDisplay(selectDate)[1]}</p>
                            
                            </div>
                        </button>
                    }
                    <div hidden={!calendarIsActive} className="w-full">
                    <Calendar
                        onChange={setSelectDate}
                        selectDate={selectDate}
                        className="w-full m-auto my-2"
                    />
                    </div>
                <ul role="list" className="divide-y divide-gray-200" onClick={discardFilter}>
                
                {filterReservations.length === 0 && !isFilter ?
                    <>
                    <li>
                        <div className="flex justify-center">
                            <div className="text-sm">
                            <p className="my-2 text-sm font-medium  truncate">{nbBookingClient(reservations) +" "+ (reservations.length > 1 ? "Inscriptions" : "Inscription")}</p>
                        </div>
                        </div>
                    </li>
                    {reservations.map((e,i) => (
                        <ReservationComponent reservation={e} key={i} />
                    ))}
                    </>
                :
                    <>
                    <li>
                        <div className="flex justify-center">
                            <div className="text-sm">
                            <p className="my-2 text-sm font-medium  truncate">{nbBookingClient(filterReservations) +" "+ (filterReservations.length > 1 ? "Inscriptions" : "Inscription")}</p>
                        </div>
                        </div>
                    </li>      
                    {filterReservations.map((e,i) => (
                        <ReservationComponent reservation={e} key={i} />
                    ))}
                    </>
                }
                </ul>
                </div>
                <div className="h-32"></div>
                </>
            :
            <Loader />
        }
        
    </>)
}