import Client from "../pages/clients"

import { useState } from "react"

export default function ReservationComponent({reservation}){

    const [isDisplay,setDisplay] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()
        setDisplay(!isDisplay)
    }

    return (<>
                    <li>
                    <a href="#" className="block hover:bg-gray-50" >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="flex items-center flex-1 min-w-0">     
                                <div className="flex">   
                                    <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                                        <div>
                                            <p className="text-sm font-medium  truncate">{reservation.service.name}</p>
                                            {/* <p className="flex items-center mt-2 text-sm text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="truncate">{reservation.clients}</span>
                                            </p> */}
                                        </div>
                                        <div className="block">
                                            <div>
                                                <p className="text-sm text-gray-900">
                                                    <time dateTime="2020-01-07">{reservation.newDate} {reservation.newHours}</time>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="flex">
                                <div className="w-16 mx-1">
                                    <button className=" h-full w-full border-2 border-gray-400 rounded-xl bg-white" onClick={handleClick}>
                                        <p className=" items-center text-sm text-gray-500 my-auto">
                                            <div className="flex my-auto justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="truncate">{reservation.clients}</span>
                                            </div>
                                    </p>
                                    </button>
                                </div>
                                <div className="w-16 mx-1">
                                    <button className="h-full w-full border-2 border-gray-400 rounded-xl bg-white">
                                    <a className="mailto" href={"mailto:?cc=" + reservation.listClient.map(e => e.email).join(',') + "&subject=" + reservation.service.name + " " + reservation.newDate + " " +reservation.newHours}>
                                        <div className="flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        </a>
                                    </button>
                                </div>
                        </div>
                    </div>
                </a>
                <div hidden={isDisplay} className="" onClick={handleClick}>
                    <Client client={reservation.listClient.sort((a, b)=>{
                                        if(a.name < b.name) { return -1; }
                                        if(a.name > b.name) { return 1; }
                                        return 0;})} />
                </div>
                </li>
                                          
              </>)
}