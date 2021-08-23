import React from 'react';
import { Link } from "react-router-dom";

export const Welcome = () => (
    <div>
        <h2 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Teacher Portal
        </h2>
        <br />
        <p className="text-center text-3xl mt-20 text-base leading-8 text-black tracking-wide uppercase">Hello parents. Here you can log in and keep track of your students assignments and grades.</p>
        <br />
        <div className="w-full max-w-sm container mt-20 mx-auto">
          <Link to="/Login">
            <div className="flex items-center justify-between">
                <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
                </button>
            </div>
          </Link>
        </div>
        <div className="w-full max-w-sm container mt-20 mx-auto">
          <Link to="/Signup">
            <div className="flex items-center justify-between">
                <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Signup
                </button>
            </div>
          </Link>
        </div>
    </div>
    );
