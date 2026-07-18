import { useCallback, useEffect, useState } from "react";

import { getTasks } from "../services/task.service";
import useSocket from "../hooks/useSocket";

import Header from "../components/Header";
import DashboardStats from "../components/DashboardStats";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback(async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleTaskUpdate = useCallback((updatedTask) => {
        setTasks((prevTasks) => {
            const exists = prevTasks.some((task) => task._id === updatedTask._id);

            if (!exists) {
                return [updatedTask, ...prevTasks];
            }

            return prevTasks.map((task) =>
                task._id === updatedTask._id ? updatedTask : task
            );
        });
    }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    useSocket(handleTaskUpdate);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto p-8">
                <Header />

                <DashboardStats tasks={tasks} />
                <TaskForm onTaskCreated={fetchTasks} />

                <TaskTable tasks={tasks} />
            </div>
        </div>
    );
};

export default Dashboard;