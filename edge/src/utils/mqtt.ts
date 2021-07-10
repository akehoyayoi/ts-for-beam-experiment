import MQTT from 'async-mqtt'

let client: MQTT.AsyncMqttClient

export const connect = () => {
  if(process.env.BROKER_USER && process.env.BROKER_PASSWORD) {
    client = MQTT.connect(process.env.BROKER_URL, {
      username: process.env.BROKER_USER,
      password: process.env.BROKER_PASSWORD
    })
  } else {
    client = MQTT.connect(process.env.BROKER_URL)
  }
  return client
}

export { client }
