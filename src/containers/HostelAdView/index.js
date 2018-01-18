import React from 'react'

const HouseAdView = (props) => {
    const { loading, data } = props
    return (
        <div>
            {loading || data == null ? 'Loading...' : (
                <div>
                    <h1>{data.title}</h1>
                    {data.fullHouse ? <h3>Casa completa</h3> : ""}
                    {data.privateEntrance ? <h3>Entrada independiente</h3> : ""}
                    <p>
                        {data.description}
                    </p>
                    <ul>
                        {data.services.map(service => <li>{service.slug}</li>)}
                    </ul>
                    Hora de entrada: {data.checkinTime} <br/>
                    Hora de salida: {data.checkoutTime} <br/>
                    Precio base: {data.basePrice} <br/>
                </div>
            )}
        </div>
    )
}

export default HouseAdView