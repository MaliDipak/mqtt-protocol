const mqtt = require("mqtt");

// MQTT broker connection URL
const brokerUrl = "tcp://broker.hivemq.com:1883";

// Publish topic and payload
const publishTopic = "RightoLabel/BLE/VP0";

const publishPayload = {
  BUFFET_ID: "VP0003",
  BUFFET_NAME: "Test",
  BUFFET_ALLERGEN: "Peanuts",
  BUFFET_CALORIES: "100",
};

// Connect to the MQTT broker
const client = mqtt.connect(brokerUrl);

// Handle connection events
client.on("connect", () => {
  console.log("Connected to MQTT broker");

  // Publish a message to the topic
  client.publish(publishTopic, JSON.stringify(publishPayload), (err) => {
    if (err) {
      console.error("Error publishing message:", err);
    } else {
      console.log(
        `Published message to topic '${publishTopic}':`,
        publishPayload
      );
      client.end(); // Close connection after publishing
    }
  });
});
