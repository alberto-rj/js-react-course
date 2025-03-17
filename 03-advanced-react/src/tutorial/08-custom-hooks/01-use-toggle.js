import { useState } from 'react';

const useToggle = (initValue) => {
  const [canShow, setCanShow] = useState(initValue);

  const toggleCanShow = () => {
    setCanShow(!canShow);
  };

  return [canShow, toggleCanShow];
};

export default useToggle;
