import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // thuthy
  const [name, setName] = useState('susan');

  const codeExample = text || 'hello world';

  // can't use if statements
  return (
    <div>
      <h4>Falsy OR: {text || 'hello world'}</h4>
      <h4>Falsy AND: {text && 'hello world'}</h4>
      <h4>Truthy OR: {name || 'hello world'}</h4>
      <h4>Truthy AND: {name && 'hello world'}</h4>
    </div>
  )
};

export default ShortCircuitOverview;