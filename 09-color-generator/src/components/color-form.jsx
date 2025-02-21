const ColorForm = ({ onSubmit, onChange, isValid, color }) => {
  return (
    <div className='container'>
      <form
        className='color-form'
        onSubmit={onSubmit}
      >
        <input
          type='color'
          id='color'
          name='color'
          value={color}
          onChange={onChange}
        />
        <input
          type='text'
          id='text'
          name='text'
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
    </div>
  );
};

export default ColorForm;
