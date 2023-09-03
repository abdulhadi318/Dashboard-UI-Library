import React, { useState } from 'react';

function StudentManagement() {
  // State to manage the list of students
  const [students, setStudents] = useState([]);
  
  // State to manage input values for adding new students
  const [newStudent, setNewStudent] = useState({ name: '', rollNumber: '' , Isbn: '', Catagory: '' , Quantity: '' , Available: '', price:''  });

  // Function to add a new student
  const addStudent = () => {
    if (newStudent.name.trim() !== '' && newStudent.price.trim() !== '') {
      setStudents([...students, newStudent]);
      setNewStudent({ name: '', rollNumber: '' , Isbn: '', Catagory: '' , Quantity: '' , Available: '', price: ''  });   
    }
  };

  // Function to remove a student by index
  const removeStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h1>Student Management</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
          <input
          type="text"
          placeholder="Isbn"
          value={newStudent.Isbn}
          onChange={(e) => setNewStudent({ ...newStudent, Isbn: e.target.value })}
        />
       
        <input
          type="text"
          placeholder="Catagory"
          value={newStudent.Catagory}
          onChange={(e) => setNewStudent({ ...newStudent, Catagory: e.target.value })}
        />
         <input
          type="text"
          placeholder="Quantity"
          value={newStudent.Quantity}
          onChange={(e) => setNewStudent({ ...newStudent, Quantity: e.target.value })}
        />
         <input
          type="text"
          placeholder="Available"
          value={newStudent.Available}
          onChange={(e) => setNewStudent({ ...newStudent, Available: e.target.value })}
        />
      
      <input
          type="text"
          placeholder="price"
          value={newStudent.price}
          onChange={(e) => setNewStudent({ ...newStudent, price: e.target.value })}
        />
        <button className='btn btn-primary' onClick={addStudent}>Add Student</button>
      </div>
      <table>
        <thead>
          <tr>
            <th className='' >Name</th>
            <th  className='p-6' >Isbn</th>
            <th  className='p-6'>Catagory</th>
            <th  className='p-6'>Quantity</th>
            <th  className='p-6'>Available</th>
            <th className='p-6'>price</th>

       
            
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className='p-6'>{student.name}</td>
              <td className='p-6'>{student.Isbn}</td>
              <td className='p-6'>{student.Catagory}</td>
              <td className='p-6'>{student.Quantity}</td>
              <td className='p-6'>{student.Available}</td>
              <td className='p-6'>{student.price}</td>

           


              <td>
                <button className=' btn btn-primary' onClick={() => removeStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentManagement;
