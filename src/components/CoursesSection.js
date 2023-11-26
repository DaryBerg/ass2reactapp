import React from 'react';

const CoursesSection = () => {
  // Your course data, you can use state or props to manage this data
  const courses = [
    'Course 1',
    'Course 2',
    // Add more courses as needed
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <h2>Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoursesSection;
