const DashboardStats = ({ tasks }) => {
  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "pending"
  ).length;

  const processing = tasks.filter(
    (task) => task.status === "processing"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const failed = tasks.filter(
    (task) => task.status === "failed"
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
      bg: "bg-white",
    },
    {
      title: "Pending",
      value: pending,
      bg: "bg-yellow-100",
    },
    {
      title: "Processing",
      value: processing,
      bg: "bg-blue-100",
    },
    {
      title: "Completed",
      value: completed,
      bg: "bg-green-100",
    },
    {
      title: "Failed",
      value: failed,
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-5 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`${stat.bg} rounded-xl shadow p-5`}
        >
          <p className="text-gray-600">{stat.title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;