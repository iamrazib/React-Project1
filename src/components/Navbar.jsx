import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar mt-5 bg-sky-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Navigation Bar</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.freepik.com/free-photo/adorable-illustration-kittens-playing-forest-generative-ai_260559-483.jpg?w=740&t=st=1704297545~exp=1704298145~hmac=55d29343cabdf0c4538ac404aa9a67808978a308938e5461640efe63a7c54266"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
