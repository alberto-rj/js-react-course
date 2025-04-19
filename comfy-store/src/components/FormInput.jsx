const FormInput = ({
  label,
  name,
  type = 'text',
  defaultValue = '',
  placeholder = '',
}) => {
  return (
    <div className='fieldset p-0'>
      <label
        htmlFor={name}
        className='fieldset-label p-0'
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='input'
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
