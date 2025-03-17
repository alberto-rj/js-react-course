import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button 
        className="btn" 
        onClick={handleClick}
      >
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    return () => clearInterval(intID);
  }, []);
  return <h1>hello there</h1>;
}

export default CleanupFunction;

// useEffect(() => {
//   const handleScroll = () => {
//     console.log('Awesome! You are scolling on the page...');
//   };

//   window.addEventListener('scoll', handleScroll);

//   return () => window.removeEventListener('scroll', handleScroll)
// }, []);