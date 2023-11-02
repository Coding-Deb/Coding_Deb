import React from 'react';
import prog_lang from '../api/courses';
import { Link } from 'react-router-dom';

export const Courses = () => {
  return (
    <div className="container mt-4">
      {prog_lang.map((item, index) => {
        return (
          <div className="card mb-4" key={index}>
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.description}</p>
              <p className="card-text">Year Created: {item.year_created}</p>
              <p className="card-text">Example Code: {item.example_code}</p>
              <p className="card-text">Paradigm: {item.paradigm}</p>
              <Link
                to={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit Website
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
