import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const useSocket = (onTaskUpdate) => {
  useEffect(() => {
    socket.on("task-update", onTaskUpdate);

    return () => {
      socket.off("task-update", onTaskUpdate);
    };
  }, [onTaskUpdate]);
};

export default useSocket;