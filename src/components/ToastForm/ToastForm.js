import React from 'react';
import Button from '../Button';
import { ToastContext, VARIANT_OPTIONS } from '../ToastProvider/ToastProvider';
import styles from './ToastForm.module.css';

function ToastForm({ handleSubmit }) {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState("");
  const {
    setIsVisible,
    handleNewToast,
  } = React.useContext(ToastContext);

  function handleVariantChange(variant) {
    setVariant(variant);
  }

  function handleMessageChange(newMessage) {
    setMessage(newMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsVisible(true);
    handleNewToast(variant, message)
    setMessage("");
  }


  return (
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

        {VARIANT_OPTIONS.map((option, index) => {
          const capitalizedOption = option.charAt(0).toUpperCase() + option.slice(1);
          
          return (
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
                checked={option === variant}
              />
              {capitalizedOption}
            </label>
          </div>
        )})}
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
  );
}

export default ToastForm;
