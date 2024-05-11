const mqtt = require("mqtt");

// Connect to the HiveMQ broker
const client = mqtt.connect("mqtt://broker.hivemq.com");

// Subscribe to a topic
const topic = "test/topic";
client.on("connect", () => {
  console.log("Connected to HiveMQ broker");
  client.subscribe(topic, (err) => {
    if (err) {
      console.error("Error subscribing to topic:", err);
    } else {
      console.log("Subscribed to topic:", topic);
    }
  });
});

// Handle incoming messages
client.on("message", (topic, message) => {
  console.log(`Received message on topic '${topic}': ${message.toString()}`);
});
