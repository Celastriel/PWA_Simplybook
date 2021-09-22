import { useEffect, useState } from "react"
import ClientComponent from "../components/ClientComponent";
import Loader from "../components/Loader";
import { Clients } from "../lib/function/Clients";


export default function Client({client}){

    const [clients,setClients] = useState([])

    useEffect(()=>{
        (async function data(){
            setClients(client?client:await Clients())
        })();  
      },[])

    return (<>
        {
            clients.length > 0 ?        
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                <li>
                    <div className="flex pl-6">
                        <div className="text-sm">
                        <p className="my-2 text-sm font-medium  truncate">{clients.length + " " + (clients.length>1?"Inscrits":"Inscrit")}</p>
                  </div>
                </div>
                </li>
                {clients.map((e,i) => (
                    <ClientComponent client={e} key={i}/>
                ))}
            </ul>
            </div>
            :
            <Loader />
        }
        
    </>)
}