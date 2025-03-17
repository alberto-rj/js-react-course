/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import SingleColor from './single-color';

const ColorList = ({ colors }) => {
  return (
    <div className='colors'>
      {colors.map((color) => {
        return (
          <SingleColor
            key={nanoid()}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default ColorList;
