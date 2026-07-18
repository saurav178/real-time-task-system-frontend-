import TaskRow from "./TaskRow";

const TaskTable = ({ tasks }) => {
  return (
    <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">

      <div className="p-5 border-b">
        <h2 className="text-xl font-bold">
          Tasks
        </h2>
      </div>

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="text-left px-4 py-3">
              Type
            </th>

            <th className="text-left px-4 py-3">
              Status
            </th>

            <th className="text-center px-4 py-3">
              Attempts
            </th>

            <th className="text-left px-4 py-3">
              Result
            </th>

            <th className="text-left px-4 py-3">
              Created
            </th>

          </tr>

        </thead>

        <tbody>

          {tasks.map((task) => (
            <TaskRow
              key={task._id}
              task={task}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default TaskTable;