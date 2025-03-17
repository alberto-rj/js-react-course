import { useState } from "react"

const Parent = () => {
  const [userName, setUserName] = useState('Jesse Hall');

  return (
    <>
      <h1>{`Hello ${userName}!`}</h1>
      <Child1 userName={userName} />
    </>
  );
};

const Child1 = ({ userName }) => {
  return (
    <>  
      <h2>Child 1</h2>
      <Child2 userName={userName} />
    </>
  );
};

const Child2 = ({ userName }) => {
  return (
    <>
      <h3>Child 2</h3>
      <Child3 userName={userName} />
    </>
  );
};

const Child3 = ({ userName }) => {
  return (
    <>
      <h4>Child 3</h4>
      <Child4 userName={userName} />
    </>
  );
};

const Child4 = ({ userName }) => {
  return (
    <>
      <h5>Child 4</h5>
      <Child5 userName={userName} />
    </>
  );
};

const Child5 = ({ userName }) => {
  return (
    <>
      <h6>Child 5</h6>
      <p>{`Hello ${userName} again!`}</p>
    </>
  );
};

export default Parent;