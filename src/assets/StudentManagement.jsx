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
    
    <div className=' ' >
      <div className=' text-left text-3xl  font-medium ' >Student Management</div>
      <div>
        <input
      className='p-1  border-2 mr-1 mt-1 to-black rounded-md  border-r-2 border-gray-500   '
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
          <input
         className='p-1  border-2 mr-1 to-black rounded-md  border-r-2 border-gray-500   '
          type="text"
          placeholder="Isbn"
          value={newStudent.Isbn}
          onChange={(e) => setNewStudent({ ...newStudent, Isbn: e.target.value })}
        />
       
        <input
      className='p-1  border-2 mr-1 to-black rounded-md  border-r-2 border-gray-500   '
          type="text"
          placeholder="Catagory"
          value={newStudent.Catagory}
          onChange={(e) => setNewStudent({ ...newStudent, Catagory: e.target.value })}
        />
         <input
      className='p-1  border-2 mr-1 to-black rounded-md  border-r-2 border-gray-500   '
          type="text"
          placeholder="Quantity"
          value={newStudent.Quantity}
          onChange={(e) => setNewStudent({ ...newStudent, Quantity: e.target.value })}
        />
         <input
        className='p-1  border-2 mr-1 to-black rounded-md  border-r-2 border-gray-500   '
          type="text"
          placeholder="Available"
          value={newStudent.Available}
          onChange={(e) => setNewStudent({ ...newStudent, Available: e.target.value })}
        />
      
      <input
      className='p-1 mt-1 mr-1  border-2 to-black rounded-md  border-r-2 border-gray-500   '
          type="text"
          placeholder="price"
          value={newStudent.price}
          onChange={(e) => setNewStudent({ ...newStudent, price: e.target.value })}
        />
   
      </div>
      <table>
        <thead>
          <tr>
            <th className='p-2' >Name</th>
            <th  className='p-2' >Isbn</th>
            <th  className='p-2'>Catagory</th>
            <th  className='p-2'>Quantity</th>
            <th  className='p-2'>Available</th>
            <th className='p-2'>price</th>
            <button  className='btn btn-primary ml-68 ' onClick={addStudent}>Add Student</button>
       
            
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className='p-2'>{student.name}</td>
              <td className='p-2'>{student.Isbn}</td>
              <td className='p-2'>{student.Catagory}</td>
              <td className='p-2'>{student.Quantity}</td>
              <td className='p-2'>{student.Available}</td>
              <td className='p-2'>{student.price}</td>

           


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
