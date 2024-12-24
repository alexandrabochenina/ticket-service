import CurrencyRadio from '../CurrencyRadioButton/CurrencyRadioButton';
import TransferCheckBox from '../TransferCheckBox/TransferCheckBox';
import styles from './PriceDetails.module.css'

const PriceDetails: React.FC = () => {
    return (
      <section className={styles.currencyBlock}>
        <CurrencyRadio />
        <TransferCheckBox title='КОЛИЧЕСТВО ПЕРЕСАДОК' items={[{title:'1 пересадка', key: 1}, {title:'2 пересадки', key: 2}, {title:'3 пересадки', key: 3}]} />
      </section>
    );
}

export default PriceDetails