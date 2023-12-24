import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-56 h-screen px-4 pt-4 overflow-y-scroll gap-y-6 border-x-2 border-amber-800">
      <section className="flex justify-between w-full">
        <div>Pic</div>
        <h2>Name</h2>
      </section>
      <section className="ms-6">
        <h2 className="text-2xl">
          <Link to="/today">Today</Link>
        </h2>
      </section>
      <section className="ms-6">
        <h2 className="text-2xl">Projects</h2>
        <ul className="pl-6 list-circle">
          <li>
            <Link>Sample Project</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
