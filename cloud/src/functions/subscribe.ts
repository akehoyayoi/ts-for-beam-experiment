import { client } from '../utils/mqtt'

export async function subscribe () {
    console.log('[function:subscribe] start')
    const dataTopic = 'edge2cloud'
    await client.subscribe(dataTopic)
    client.on('message', async (topic, payload) => {
        console.log(`[function:subscribe] topic=${topic} payload=${payload}`)
    })
}
