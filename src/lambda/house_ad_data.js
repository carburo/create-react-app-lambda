export function handler(event, context, callback) {
    callback(null, {
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
                ]
            }
        )
    })
}