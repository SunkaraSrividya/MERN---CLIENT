import React, { useState } from "react";

export default function TodoList() {
  const [formData, setFormData] = useState({
    time: "",
    note: ""
  });
  const [tableData, setTableData] = useState([]);

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    setTableData([...tableData, formData]);
    setFormData({
      time: "",
      note: ""
    });
  }

  function handleDelete(index) {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div className="form">
        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleForm}
        />
        <input
          name="note"
          type="text"
          value={formData.note}
          onChange={handleForm}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.time}</td>
                <td>{data.note}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
