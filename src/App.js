import React, { useReducer } from 'react';
import FunctionForm from "./components/FunctionForm";
import StudentsContainer from "./components/StudentsContainer";
import Urd from "./components/Urd.js";

const initialState = { students: [], name: "", grade: "" };

function reducer(state, action) {
  switch (action.type) {
    case "addData":
      return { ...state, students: action.data };

    case "inputField":
      return { ...state, [action.fieldname]: action.value };

    case "addOneStudent":
      let newId = state.students.length === 0 ? 1 : state.students[state.students.length - 1].id + 1;
      let newStudent = {
        grade: action.info.grade,
        name: action.info.name,
        id: newId,
      };
      return { ...state, students: [...state.students, newStudent] };

    case 'removeStudent':
      state.students.splice(state.students.findIndex(item => item.id === action.id), 1)
      return { ...state }//如果写 return state，那么点击remove按钮将不会自动更新页面

    default:
      return state;
  }
}


function App() {
  const [{ students, name, grade }, dispatch] = useReducer(reducer, initialState);


  const addStudents = (info) => {
    dispatch({ type: "addOneStudent", info });
  };

  const handleChange = (name, value) => {
    dispatch({ type: "inputField", fieldname: name, value: value });
  };

  const removeChange = (id) => {
    dispatch({ type: "removeStudent", id });
  };

  return (
    <div className="App">
      <Urd></Urd>
      <hr />
      <br />
      <FunctionForm
        addStudents={addStudents}
        handleChange={handleChange}
        name={name}
        grade={grade}
      />
      <StudentsContainer
        students={students}
        removeChange={removeChange}
      />

    </div>
  );
}

export default App;

