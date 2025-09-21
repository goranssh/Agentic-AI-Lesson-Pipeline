import React, { useState } from "react";
import axios from "axios";

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: "user", text: input }]);

    try {
      // Example call to your FastAPI backend
      const res = await axios.post("http://127.0.0.1:8000/lessons", {
        id: messages.length + 1,
        title: input,
        description: "Lesson created from chatbot",
        topics: []
      });
      // Add bot response
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `Lesson created: ${res.data.title}` }
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error contacting server" }
      ]);
    }

    setInput("");
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "auto",
          padding: "1rem",
          marginBottom: "1rem"
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: "0.5rem" }}>
            <strong>{m.role === "user" ? "You" : "Bot"}:</strong> {m.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button onClick={handleSend} style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
        Send
      </button>
    </div>
  );
};

export default ChatWindow;
