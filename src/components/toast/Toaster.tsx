import { ToastContainer } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/esm/types';
import Toast from 'react-bootstrap/Toast';
export interface IToastData {
  header?: string;
  bodyMsg: string;
  variant: Variant;
}
const Toaster = ({ header, bodyMsg, variant }: IToastData) => {


  const isWhiteText = () => {
    return ['dark', 'error'].includes(variant);
  }
  return (
    <ToastContainer className="p-3" position='bottom-end'>
      <Toast bg={variant} animation={true}>
        {header && <Toast.Header>
          <strong className="me-auto">{header}</strong>
        </Toast.Header>}
        <Toast.Body className={['dark', 'danger'].includes(variant) ? 'text-white' : ''}>{bodyMsg}</Toast.Body>
      </Toast>
    </ToastContainer>

  )
}

export default Toaster