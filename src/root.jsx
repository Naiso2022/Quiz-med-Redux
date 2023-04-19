import { Outlet, Link } from "react-router-dom";


function Root() {
  return (
    <div>
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <h1 className="text-4xl font-extrabold text-white">SPORT-QUIZ</h1>

        <ul className="flex space-x-4">
          <li className="text-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-xl">
            <Link to={"./admin"}>Admin</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Root;