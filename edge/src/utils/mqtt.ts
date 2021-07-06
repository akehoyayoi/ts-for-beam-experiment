import MQTT from 'async-mqtt'

let client: MQTT.AsyncMqttClient

export const connect = () => {
  client = MQTT.connect(process.env.BROKER_URL, {
    username: process.env.BROKER_USER,
    password: process.env.BROKER_PASSWORD
  })
  return client
}

export { client }
