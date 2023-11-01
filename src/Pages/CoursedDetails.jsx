import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRoutes } from 'react-router-dom';

export const CoursedDetails = () => {
    const route = useRoutes()
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`/prog_lang`) // Adjust the API endpoint as needed to fetch the specific course
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>
        {route.params.name}
      </h1>
    </div>
  );
}
