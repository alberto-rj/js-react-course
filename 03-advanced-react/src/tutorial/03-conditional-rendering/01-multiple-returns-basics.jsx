import { useEffect, useState } from "react"

const MultipleReturnsBasics = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>Multiple Returns Basics</h2>;
};

export default MultipleReturnsBasics;