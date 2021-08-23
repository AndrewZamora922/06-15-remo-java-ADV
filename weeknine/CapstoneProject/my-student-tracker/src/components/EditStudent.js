import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const EditStudent = (route) => {
  let history = useHistory();

  const { students, editStudent } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState({
    id: null,
    name: "",
    math: "",
    science: "",
    grade: "",

  });

  const currentUserId = route.match.params.id;

  useEffect(() => {
    const studentId = currentUserId;
    const selectedUser = students.find(
      (currentStudentTraversal) => currentStudentTraversal.id === parseInt(studentId)
    );
    setSelectedUser(selectedUser);
  }, [currentUserId, students]);

  const onSubmit = (e) => {
    e.preventDefault();
    editStudent(selectedUser);
    history.push("/home");
  };

  const handleOnChange = (userKey, newValue) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
    return <div>Invalid Student ID.</div>;
  }

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="math"
            >
              Math
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.math}
              onChange={(e) => handleOnChange("math", e.target.value)}
              type="text"
              placeholder="Enter math grade"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="science"
            >
              Science
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.science}
              onChange={(e) => handleOnChange("science", e.target.value)}
              type="text"
              placeholder="Enter science grade"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grade"
            >
              Overall Grade
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.grade}
              onChange={(e) => handleOnChange("grade", e.target.value)}
              type="text"
              placeholder="Enter overall grade"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Student
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