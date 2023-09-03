import React, { useState } from 'react';

import { Bar } from 'react-chartjs-2';

function Graph() {
  // Sample data for students and books
  const initialStudents = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    // Add more students
  ];

  const initialBooks = [
    { id: 101, title: 'React for Beginners', author: 'Alice Johnson' },
    { id: 102, title: 'JavaScript Mastery', author: 'Bob Smith' },
    // Add more books
  ];

  const [students, setStudents] = useState(initialStudents);
  const [books, setBooks] = useState(initialBooks);

  // Sample data for the graph
  const chartData = {
    labels: ['Students', 'Books'],
    datasets: [
      {
        label: 'Number of Students and Books',
        data: [students.length, books.length],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div className="App">
      <h1>Student and Books Management</h1>

      <div className="data">
        <div className="students">
          <h2>Students</h2>
          <ul>
            {students.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>

        <div className="books">
          <h2>Books</h2>
          <ul>
            {books.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="chart">
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default Graph;
