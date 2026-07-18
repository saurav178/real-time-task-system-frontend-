const Header = () => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800">
        Real-Time Task Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Manage asynchronous background tasks using BullMQ, Redis and Socket.IO
      </p>
    </div>
  );
};

export default Header;