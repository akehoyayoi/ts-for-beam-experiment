import { client } from '../utils/mqtt'

export async function subscribe () {
    console.log('[function:subscribe] start')
    const dataTopic = 'cloud2edge'
    await client.subscribe(dataTopic)
    client.on('message', async (topic, payload) => {
        console.log(`[function:subscribe] topic=${topic} payload=${payload}`)
        try {
            client.publish('edge2cloud',
            JSON.stringify({
                data: 'test'
            }))  
        } catch (err) {
            console.log(err)
        }
    })
}
