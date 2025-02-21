const ColorForm = ({ onSubmit, onChange, color }) => {
  return (
    <form
      className='color-form'
      onSubmit={onSubmit}
    >
      <input
        type='color'
        value={color}
        onChange={onChange}
      />
      <input
        type='text'
        value={color}
        onChange={onChange}
        placeholder={color}
      />
      <button
        type='submit'
        className='btn'
        style={{ backgroundColor: color }}
      >
        Submit
      </button>
    </form>
  );
};

export default ColorForm;
