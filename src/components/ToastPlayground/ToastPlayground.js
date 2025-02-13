import React from 'react';
import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext, VARIANT_OPTIONS } from '../ToastProvider/ToastProvider';

function ToastPlayground() {
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");
  const {
    isVisible,
    setIsVisible,
    handleNewToast,
    toasts,
  } = React.useContext(ToastContext);

  function handleVariantChange(variant) {
    setToastVariant(variant);
  }

  function handleMessageChange(newMessage) {
    setMessage(newMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsVisible(true);
    handleNewToast(toastVariant, message)
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <form className={styles.controlsWrapper}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => handleMessageChange(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>

          {VARIANT_OPTIONS.map((option, index) => (
            <div
              key={index}
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <label htmlFor={`variant-${option}`}>
                <input
                  onChange={() => handleVariantChange(option)}
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === toastVariant}
                />
                {option}
              </label>
            </div>
          ))}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
