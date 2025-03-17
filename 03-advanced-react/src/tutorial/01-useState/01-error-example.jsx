const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
    // preverve value between renders
    // trigger re-render
  };

  return (
    <div>
      <h2>{count}</h2>
      <button 
        type="button" 
        className="btn" 
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default ErrorExample;