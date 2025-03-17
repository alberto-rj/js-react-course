const Form = ({ onSubmit }) => {
  return (
    <form
      className='form-control'
      onSubmit={onSubmit}
    >
      <input
        type='text'
        name='name'
        className='form-input'
      />
      <button
        className='btn'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
