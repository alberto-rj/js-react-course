import { type PropsWithChildren } from 'react';

// type ComponentProps = {
//   id: number;
//   name: string;
//   children?: React.ReactNode;
// };

type ComponentProps = {
  id: number;
  name: string;
} & PropsWithChildren;

function Component({ id, name, children }: ComponentProps) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>ID: {id}</h2>
      {children}
    </div>
  );
}
export default Component;
