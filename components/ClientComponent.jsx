import Avatar from 'react-avatar';

export default function ClientComponent({client}){

    return (<>
                {
                  <li>
                  <div className="flex items-center">
                      <Avatar color="black" size="55px" name={client.name} className="mt-2 mb-5 ml-2 mr-5 rounded-full"/>
                        <div className="text-sm">
                          <p className="text-sm font-medium  truncate">{client.name}</p>
                          <p className="text-gray-600">{client.email}</p>
                      {client.phone?<p className="text-gray-600">{client.phone}</p>:<></>}
                    </div>
                  </div> 
                  </li>
                }
              </>)
}