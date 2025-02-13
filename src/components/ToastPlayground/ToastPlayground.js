import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");

  
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
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
              onChange={(e) => setMessage(e.target.value)} />
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
                  onChange={() => setToastVariant(option)}
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === toastVariant}
                />
                {option}
              </label>

              {/* TODO Other Variant radio buttons here */}
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
      </div>
    </div>
  );
}

export default ToastPlayground;
