const mqtt = require("mqtt");

// MQTT broker connection URL
const brokerUrl = "tcp://broker.hivemq.com:1883";

// Subscribe topic
const subscribeTopic = "RightoLabel/BLE/VP0";

// Connect to the MQTT broker
const client = mqtt.connect(brokerUrl);

// Handle connection events
client.on("connect", () => {
  console.log("Connected to MQTT broker");

  // Subscribe to the topic
  client.subscribe(subscribeTopic, (err) => {
    if (err) {
      console.error("Error subscribing to topic:", err);
    } else {
      console.log("Subscribed to topic:", subscribeTopic);
    }
  });
});

// Handle incoming messages
client.on("message", (topic, message) => {
  console.log(`Received message on topic '${topic}':`, message.toString());
});

// const mqtt = require("mqtt");

// // MQTT broker URL
// const brokerUrl = "ws://broker.hivemq.com:8000/mqtt";

// // Connect to the MQTT broker
// const client = mqtt.connect(brokerUrl);

// // Handle connection event
// client.on("connect", () => {
//   console.log("Connected to MQTT broker");

//   // Subscribe to the topic where data is published
//   const topic = "RightoLabel/BLE/VP0";
//   client.subscribe(topic, (err) => {
//     if (err) {
//       console.error("Subscription error:", err);
//     } else {
//       console.log("Subscribed to topic:", topic);
//     }
//   });
// });

// // Handle message event
// client.on("message", (topic, message) => {
//   console.log(`Received message on topic '${topic}': ${message.toString()}`);
// });

// // Handle error event
// client.on("error", (error) => {
//   console.error("Error:", error);
// });
