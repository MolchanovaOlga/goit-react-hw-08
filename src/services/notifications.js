import toast from 'react-hot-toast';

export const notifySuccessfull = string =>
  toast(string, {
    duration: 5000,
    position: 'top-right',
    style: { background: 'rgb(94, 156, 110)', color: '#fff' },
    className: '',
  });
