import { useState } from 'react';

type NavLink = {
  id: number;
  url: string;
  text: string;
  isActive?: boolean;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    url: '/home',
    text: 'Home',
    isActive: true,
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
  },
  {
    id: 3,
    url: '/work',
    text: 'Work',
  },
  {
    id: 4,
    url: '/contact',
    text: 'Contact',
  },
];

function Component() {
  // const [text, setText] = useState('shakeAndBake');
  // const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<NavLink[]>(navLinks);

  return (
    <div>
      <h2 className='mb-1'>hello from typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          // setText(1);
          // setNumber('hello');
          // setList([1, 3]);
          setList([...list, 'hello', 'world']);
          setLinks([...links, { id: 0, isActive: false, url: '', text: '' }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
