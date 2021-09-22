import { getClients } from "../data/getClients"
import capitalizeFirstLetter from "./CapitalizeFirstLetter"

export const Clients = async () => {
    const listClients = []
    let i = 1
    let tmp = []
    do{
        tmp = (await getClients(i)).data
        listClients.push(...tmp)
        i++;
    }while(tmp.length > 0)
    listClients.forEach(e => e.name = capitalizeFirstLetter(e.name))
    return listClients
}