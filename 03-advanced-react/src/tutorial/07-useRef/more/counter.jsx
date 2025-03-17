import { useEffect, useRef, useState } from "react";
 /** 
  * useRef - Permite persistir valores entre renderizações.
  * 
  *  Ele é usada principalmente o useRef para:
  *   - Valores mutáveis que não causam renderização quando são modificados
  *   - Acessar elementos do DOM diretamente
  * */ 

const Counter = () => {
  const [inputValue, setIputValue] = useState('');

  // const count = { current: 0 };
  const count = useRef(0);
  
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setIputValue(e.target.value)}
      />
      <h1>
        Render Count: {count.current}
      </h1>
    </>
  )
};

export default Counter;