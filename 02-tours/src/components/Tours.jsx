import { useEffect, useState } from "react";
import { Loading, Tour } from "./";

const API_URL = 'https://www.course-api.com/react-tours-project';

const Tours = () => {
  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const hasTour = () => {
    return tours?.length > 0;
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id != id;
    });
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      if (response.ok) {
        const newTours = await response.json();
        setTours(newTours);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () => {
      fetchTours();
    },
    []
  );

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <>
        <h1 className="title">
          there was an error on fetching tours
        </h1>
        <button
          className="btn btn--primary"
          onClick={fetchTours}
        >
          Refresh
        </button>
      </>
    );
  }
  if (!hasTour()) {
    return (
      <>
        <h1 className="title">
          no tours left
        </h1>
        <button 
          className="btn btn--primary"
          onClick={fetchTours}
        >
          Refresh
        </button>
      </>
    );
  }
  return (
    <>
      <h1 className="title">Our Tours</h1>
      <div className="divider"></div>
      <div className="tour__wrapper">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </>
  );
};

export default Tours;