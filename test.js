const mqtt = require("mqtt");

// Connect to the HiveMQ broker
const client = mqtt.connect("mqtt://broker.hivemq.com");

// Subscribe to a topic
const topic = "test/topic";

// Publish a message to the topic every 5 seconds
setInterval(() => {
  const message = "Hello from Node.js!";
  client.publish(topic, message, (err) => {
    if (err) {
      console.error("Error publishing message:", err);
    } else {
      console.log(`Published message on topic '${topic}': ${message}`);
    }
  });
}, 5000);
