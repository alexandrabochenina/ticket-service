import { useCurrency } from '../../context/CurrencyContext/CurrencyContext';
import { CURRENCY_EUR, CURRENCY_RUB, CURRENCY_USD } from '../../utils/currency';
import styles from './CurrencyRadioButton.module.css';

const CurrencyRadio: React.FC = () => {
  const { setCurrency } = useCurrency()

  return (
    <>
      <h2 className={styles.title}>ВАЛЮТА</h2>
      <div className={styles.currency}>
        <label className={styles.checkCurrency}>
          <input
            className={styles.checkInput}
            type="radio"
            name="currency"
            onClick={() => setCurrency(CURRENCY_RUB)}
            defaultChecked
          ></input>
          <span className={styles.checkboxCurrency}>{CURRENCY_RUB.name}</span>
        </label>
        <label className={styles.checkCurrency}>
          <input
            className={styles.checkInput}
            type="radio"
            name="currency"
            onClick={() => setCurrency(CURRENCY_USD)}
          ></input>
          <span className={styles.checkboxCurrency}>{CURRENCY_USD.name}</span>
        </label>
        <label className={styles.checkCurrency}>
          <input
            className={styles.checkInput}
            type="radio"
            name="currency"
            onClick={() => setCurrency(CURRENCY_EUR)}
          ></input>
          <span className={styles.checkboxCurrency}>{CURRENCY_EUR.name}</span>
        </label>
      </div>
    </>
  );
};

export default CurrencyRadio;