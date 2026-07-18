import StatusBadge from "./StatusBadge";

const TaskRow = ({ task }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-4 py-3 capitalize">{task.type}</td>

      <td className="px-4 py-3">
        <StatusBadge status={task.status} />
      </td>

      <td className="px-4 py-3 text-center">
        {task.attempts}
      </td>

      <td className="px-4 py-3">
        {task.result || "-"}
      </td>

      <td className="px-4 py-3">
        {new Date(task.createdAt).toLocaleString()}
      </td>
    </tr>
  );
};

export default TaskRow;