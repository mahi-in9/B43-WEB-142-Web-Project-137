import { createContext, useState, useContext } from "react";

const HouseholdContext = createContext();

export const HouseholdProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);

  const addRoom = (roomName) => {
    setRooms([...rooms, { name: roomName, devices: [] }]);
  };

  const addDevice = (roomName, deviceName) => {
    setRooms(
      rooms.map((room) =>
        room.name === roomName
          ? { ...room, devices: [...room.devices, deviceName] }
          : room
      )
    );
  };

  return (
    <HouseholdContext.Provider value={{ rooms, addRoom, addDevice }}>
      {children}
    </HouseholdContext.Provider>
  );
};

export const useHousehold = () => useContext(HouseholdContext);
