import React from 'react'

const HouseAdView = (props) => {
    const { loading, data } = props
    return (
        <div>
            {loading || data == null ? 'Loading...' : (
                <div>
                    <h1>{data.title}</h1>
                    <p>
                        {data.description}
                    </p>
                    <ul>
                        {data.services.map( service => <li>{service.slug}</li>) }
                    </ul>
                </div>
            )}
        </div>
    )
}

export default HouseAdView