const DisplayLoader = ({ isPending, pending, isError, error, children }) => {
  if (isPending) {
    return pending;
  }

  if (isError) {
    return error;
  }

  return children;
};

export default DisplayLoader;
