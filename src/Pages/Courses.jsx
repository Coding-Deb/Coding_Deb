import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Courses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/prog_lang')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Courses</h1>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Year Created: {item.year_created}</p>
                <p className="card-text">Paradigm: {item.paradigm}</p>
                <p className="card-text">Example Code: {item.example_code}</p>
                <a href={item.website} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
                {/* Use Link to navigate to another page and pass data as state */}
                <Link to={`/coursedetails`} name={item.name}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
