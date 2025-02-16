import React from 'react';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';
import ToastForm from '../ToastForm/ToastForm';

function ToastPlayground() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastForm />

      <ToastShelf toasts={toasts} />
    </div>
  );
}

export default ToastPlayground;
