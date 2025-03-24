import React, { useState, useEffect } from "react";
import "./dashboard.css"; // Make sure this CSS file exists

const Dashboard = () => {
  const [fanSpeed, setFanSpeed] = useState(1);
  const [isACOn, setIsACOn] = useState(false);
  const [acTemp, setAcTemp] = useState(24);
  const [isDoorLocked, setIsDoorLocked] = useState(true);
  const [lights, setLights] = useState({ light1: false });
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [plugOn, setPlugOn] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [heaterOn, setHeaterOn] = useState(false);

  useEffect(() => {
    // Load saved states from localStorage
    const savedFanSpeed = localStorage.getItem("fanSpeed") || "1";
    setFanSpeed(Number(savedFanSpeed));

    setLights({ light1: localStorage.getItem("light1") === "on" });
    setIsACOn(localStorage.getItem("acState") === "on");
    setAcTemp(localStorage.getItem("acTemp") ? Number(localStorage.getItem("acTemp")) : 24);
    setIsDoorLocked(localStorage.getItem("doorState") === "locked");
  }, []);

  useEffect(() => {
    // Save states in localStorage
    localStorage.setItem("fanSpeed", fanSpeed);
    localStorage.setItem("acState", isACOn ? "on" : "off");
    localStorage.setItem("acTemp", acTemp);
    localStorage.setItem("doorState", isDoorLocked ? "locked" : "unlocked");
    localStorage.setItem("light1", lights.light1 ? "on" : "off");
  }, [fanSpeed, isACOn, acTemp, isDoorLocked, lights]);

  return (
    <div>
      <h2>🏠 Smart Home Dashboard</h2>

      {/* Fan Control */}
      <div className="section">
        <h3>🌀 Fan Control</h3>
        <div className="fan-container">
          <div
            className="fan"
            style={{ animation: fanSpeed > 0 ? `spin ${1 / fanSpeed}s linear infinite` : "none" }}
          ></div>
        </div>
        <label>Speed:</label>
        <input
          type="range"
          min="0"
          max="5"
          step="1"
          value={fanSpeed}
          onChange={(e) => setFanSpeed(Number(e.target.value))}
        />
        <p>Speed: {fanSpeed}</p>
      </div>

      {/* Light Control */}
      <div className="section">
        <h3>💡 Light Control</h3>
        <button onClick={() => setLights({ ...lights, light1: !lights.light1 })}>
          Light 1: {lights.light1 ? "Turn Off" : "Turn On"}
        </button>
        {lights.light1 && <div className="light"></div>}
      </div>

      {/* AC Control */}
      <div className="section">
        <h3>❄️ AC Control</h3>
        <button onClick={() => setIsACOn(!isACOn)}>
          {isACOn ? "Turn AC Off" : "Turn AC On"}
        </button>
        <p>Temperature: {acTemp}°C</p>
        <button onClick={() => setAcTemp((prev) => (prev < 30 ? prev + 1 : prev))}>
          Increase Temp
        </button>
        <button onClick={() => setAcTemp((prev) => (prev > 16 ? prev - 1 : prev))}>
          Decrease Temp
        </button>
      </div>

      {/* Door Lock */}
      <div className="section">
        <h3>🚪 Door Lock Control</h3>
        <button onClick={() => setIsDoorLocked(!isDoorLocked)}>
          {isDoorLocked ? "Unlock Door" : "Lock Door"}
        </button>
      </div>

      {/* Curtain Control */}
      <div className="section">
        <h3>Curtain Control</h3>
        <button onClick={() => setCurtainsOpen(!curtainsOpen)}>
          {curtainsOpen ? "Close Curtains" : "Open Curtains"}
        </button>
      </div>

      {/* Smart Plug */}
      <div className="section">
        <h3>Smart Plug Control</h3>
        <button onClick={() => setPlugOn(!plugOn)}>
          {plugOn ? "Turn Plug Off" : "Turn Plug On"}
        </button>
      </div>

      {/* Security Camera */}
      <div className="section">
        <h3>Security Camera Control</h3>
        <button onClick={() => setCameraEnabled(!cameraEnabled)}>
          {cameraEnabled ? "Disable Camera" : "Enable Camera"}
        </button>
      </div>

      {/* Water Heater */}
      <div className="section">
        <h3>Water Heater Control</h3>
        <button onClick={() => setHeaterOn(!heaterOn)}>
          {heaterOn ? "Turn Heater Off" : "Turn Heater On"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
