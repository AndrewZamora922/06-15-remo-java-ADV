import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const AddStudent = () => {
  let history = useHistory();

  const { addStudent, students } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [math, setMath] = useState("");
  const [science, setScience] = useState("");
  const [grade, setGrade] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: students.length + 1,
      name,
      math,
      science,
      grade,
    };
    addStudent(newStudent);
    history.push("/home");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of student
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="math"
            >
              Math
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={math}
              onChange={(e) => setMath(e.target.value)}
              type="text"
              placeholder="Enter math grade"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="science"
            >
              Science
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={science}
              onChange={(e) => setScience(e.target.value)}
              type="text"
              placeholder="Enter science grade"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grade"
            >
              Grade
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              type="text"
              placeholder="Enter overall grade"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-red-400 w-full hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Student
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/home">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};