import React, { createContext, useReducer } from 'react';

import Students from './Students';

const initialState = {
  students: [
    {
      id: 1,
      name: " ",
      math: " ",
      science: " ",
      grade: " ",
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Students, initialState);

  function addStudent(student) {
    dispatch({
      type: "ADD_STUDENT",
      payload: student
    });
  }

  function editStudent(student) {
    dispatch({
      type: "EDIT_STUDENT",
      payload: student
    });
  }

  function removeStudent(id) {
    dispatch({
      type: "REMOVE_STUDENT",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        students: state.students,
        addStudent,
        editStudent,
        removeStudent
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};