import React from 'react';
import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);

  return <h1>{error.message}</h1>;
};

export default SinglePageError;
