import React, { createContext, useEffect, useRef, useState } from "react";

import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const myRef = useRef(null);
  const [rooms, setRooms] = useState(roomData);
  const [roomsFromDB, setRoomsFromDB] = useState();
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("1 Kid");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(total);
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 3000);
  };

  const handleScroll = (e) => {
    console.log("button is working");
    e.preventDefault();
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/rooms/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.log("Here is the error");
        console.error("Error fetching data:", error);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    const updateLocalStorage = () => {
      localStorage.setItem("token", token);
    };
    updateLocalStorage();
  }, [token]);

  console.log(token);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        adults,
        kids,
        setAdults,
        setKids,
        handleClick,
        loading,
        myRef,
        handleScroll,
        loggedIn,
        setLoggedIn,
        token,
        setToken,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
