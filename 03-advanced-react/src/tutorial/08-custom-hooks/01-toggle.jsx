import useToggle from './01-use-toggle';

const ToggleExample = () => {
  const [canShow, toggleCanShow] = useToggle(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button
        className='btn'
        onClick={toggleCanShow}
      >
        toggle
      </button>
      {canShow && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
