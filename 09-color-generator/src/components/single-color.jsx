import { toast } from 'react-toastify';

const SingleColor = ({ color }) => {
  const { type, weight, hex } = color;

  const getClassName = (type) => {
    if (type === 'shade') {
      return 'color color-light';
    }
    return 'color';
  };

  const handleClick = () => {
    copyToClipboard(`#${hex}`);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to the clipboard!');
    } catch (error) {
      toast.error('Failed to copy to the clipboard!');
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <button
      className={getClassName(type)}
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </button>
  );
};

export default SingleColor;
