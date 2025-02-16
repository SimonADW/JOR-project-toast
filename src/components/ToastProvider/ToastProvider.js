import React from 'react';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {  
  const [toasts, setToasts] = React.useState([]);

  // Clear all toasts on Escape press
  const handleEscape = React.useCallback(()=> {
    setToasts([]);
  })
  useKeydown("Escape", handleEscape);

  // Create new toast an "push" to toasts array
  function handleNewToast(toastVariant, message) {
    const id = crypto.randomUUID();
    const currentToast = { toastVariant, message, id };
    setToasts((prevToasts)=> [...prevToasts, currentToast]);    
  }


  function handleDismiss(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));    
  }

  return (
    <ToastContext.Provider
      value={{ 
        toasts,
        handleNewToast,    
        handleDismiss,    
      }}
    >{children}</ToastContext.Provider>
  )
}

export default ToastProvider;
