import React from 'react'
import "./Client.scss"
import ClientItem from '../UIUX/clientItem/ClientItem'

const ClientSay = () => {
  return (
    <div className='client_container'>
        <div className="title">
            <h1>What Clients Say</h1>
            <p>Problems trying to resolve the conflict between </p>
            <p>the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="client_items">
            <ClientItem />
            <ClientItem />
            <ClientItem />
        </div>
    </div>
  )
}

export default ClientSay