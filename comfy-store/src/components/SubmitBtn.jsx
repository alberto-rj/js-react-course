import { useNavigation } from 'react-router-dom';

import { Button } from './ui';
import { joinString } from '../utils/string';

const SubmitBtn = ({ text = 'Submit', className }) => {
  const { state } = useNavigation();
  const isSubmitting = state === 'submitting';

  return (
    <Button
      type='submit'
      disabled={isSubmitting}
      className={joinString('btn btn-primary btn-block', className)}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        <>{text}</>
      )}
    </Button>
  );
};

export default SubmitBtn;
