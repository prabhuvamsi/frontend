import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import Studentlist from "./studentlist"
const StudentLists = () => {
  const [students, setStudents] = useState([]);
  // const[cnt,setcnt]=useState(0)
  useEffect(() => {
    // Make a GET request to fetch data from the backend
    axios.get('http://localhost:3002/getstudents') // Update the URL to match your backend
      .then((response) => {
        console.log(response.data); // Optional: Log the response data
        setStudents(response.data.studentdata);
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  }, []);
  const handleDelete = (studentId) => {
    // Make a DELETE request to remove the student from the database
    axios.delete(`http://localhost:3002/deletestudent/${studentId}`)
        .then(() => {
            // Update the state by filtering out the deleted student
            setStudents(students.filter(student => student._id !== studentId));
        })  
        .catch((error) => {
            // Handle any errors that occur during the request
            console.error(error);
        });
};
const total =students.reduce((acc,student) => acc +(+student.price), 0);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="navbar">
            <Link to="/home">
              <button className="btn btn-dark" style={{ borderRadius: "30px" }}>
                Home
              </button>
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center mt-4">
              <thead className="thead-dark">
                <tr>
                  <th style={{border:"none"}}>Sl.no</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {students && students.map((student, index) => (
                  <tr key={index}>
                    <td >{index + 1}</td>
                    <td>{student.title}</td>
                    <td>{student.price}</td>
                    <td>
                      <button
                        className="btn btn-dark"
                        onClick={() => handleDelete(student._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4">
            <h2>Total Price: {total}</h2>
            <Link to="/arrow">
              <button className="btn btn-dark">Check Out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLists;