export function handler(event, context, callback) {
    const { queryStringParameters, httpMethod } = event;
    const id = queryStringParameters.id
    if(httpMethod === 'GET') {
        callback(null, get(id))
    } else {
        callback(null, { statusCode: 405, body: {} } )
    }
}

function get(id) {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {    
                title: "Hostal Cabriales",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus blanditiis iusto iure ad eos quae accusantium, rerum omnis voluptatibus aliquam dolore dolorem ea deserunt cupiditate quasi harum molestiae? Sapiente. Lorem, ipsum.",
                services: [
                    {
                        slug: 'internet',
                        included: false,
                    },
                    {
                        slug: 'breakfast',
                        included: true,
                    },
                    {
                        slug: 'dinner',
                        included: false,
                    },
                ],
                fullHouse: true,
                privateEntrance: false,
                checkinTime: new Date(),
                checkoutTime: new Date(),
                basePrice: 25,
            }
        )
    };
}