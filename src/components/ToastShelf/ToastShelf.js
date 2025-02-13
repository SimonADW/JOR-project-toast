import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastContext);

  console.log("From shelf: ", toasts);


  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ toastVariant, message, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            id={id}
            toastVariant={toastVariant}
            handleDismiss={handleDismiss}
            message={message}
          />
        </li>
      ))}

    </ol>
  );
}

export default ToastShelf;
