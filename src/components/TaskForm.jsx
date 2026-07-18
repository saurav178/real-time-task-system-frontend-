import { useState } from "react";
import { createTask } from "../services/task.service";

const TaskForm = ({ onTaskCreated }) => {
  const [type, setType] = useState("email");
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buildSuggestedKey = (selectedType) => {
    return `${selectedType.toLowerCase()}-001`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const normalizedKey = idempotencyKey.trim().toLowerCase() || buildSuggestedKey(type);

      await createTask({
        type,
        idempotencyKey: normalizedKey,
      });

      setIdempotencyKey("");
      onTaskCreated();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-6">
        Create New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 items-end"
      >
        <div>
          <label className="block text-sm font-medium mb-2">
            Task Type
          </label>

          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setIdempotencyKey("");
              setError("");
            }}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="notification">Notification</option>
            <option value="report">Report</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Idempotency Key
          </label>

          <input
            type="text"
            value={idempotencyKey}
            placeholder={buildSuggestedKey(type)}
            onChange={(e) => {
              setIdempotencyKey(e.target.value);
              setError("");
            }}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg p-3 font-semibold transition"
        >
          {loading ? "Creating..." : "Create Task"}
        </button>
      </form>

      {error ? (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      ) : null}
    </div>
  );
};

export default TaskForm;