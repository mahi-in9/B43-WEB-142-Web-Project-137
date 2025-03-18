import { useHousehold } from "../context/HouseholdContext";
import { useState } from "react";

const Dashboard = () => {
  const { rooms, addRoom } = useHousehold();
  const [roomName, setRoomName] = useState("");

  return (
    <div>
      <h2>Dashboard</h2>
      <input type="text" placeholder="Room Name" onChange={(e) => setRoomName(e.target.value)} />
      <button onClick={() => addRoom(roomName)}>Add Room</button>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
