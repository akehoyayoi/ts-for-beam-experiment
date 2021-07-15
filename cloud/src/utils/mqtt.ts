import MQTT from 'async-mqtt'
import fs from 'fs';

let client: MQTT.AsyncMqttClient

export const connect = () => {
  // client = MQTT.connect(process.env.BROKER_URL, {
  //   username: process.env.BROKER_USER,
  //   password: process.env.BROKER_PASSWORD
  // })
  client = MQTT.connect(process.env.BROKER_URL, {
    key: fs.readFileSync('key'),
    cert: fs.readFileSync('cert'),
    ca: fs.readFileSync('ca')
  })
  return client

}

export { client }
