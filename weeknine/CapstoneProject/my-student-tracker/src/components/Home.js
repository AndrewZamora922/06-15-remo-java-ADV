import React from "react";
import { Heading } from "./Heading";
import { Link } from 'react-router-dom';
import { StudentList } from "./StudentList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Student Grades
        </h3>
        <Heading />
        <StudentList />
      </div>
      <div className="flex-grow text-center px-4 py-2 m-2">
        <Link to="/">
          <button className="bg-red-400 hover:bg-red-500 text-black font-semibold py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="05" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"></svg>
              <span>Logout</span>
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};