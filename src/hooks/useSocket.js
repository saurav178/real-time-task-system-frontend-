import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://real-time-task-system-production.up.railway.app");
const useSocket = (onTaskUpdate) => {
  useEffect(() => {
    socket.on("task-update", onTaskUpdate);

    return () => {
      socket.off("task-update", onTaskUpdate);
    };
  }, [onTaskUpdate]);
};

export default useSocket;