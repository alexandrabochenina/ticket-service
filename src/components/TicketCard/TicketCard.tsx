import { Ticket } from '../../types/Tickets';
import React from 'react';
import styles from './TicketCard.module.css';
import plural from 'plural-ru';
import smallPlane from '../../images/airplane-svgrepo-com.svg';
import { formatData } from '../../utils/format';
import { getCarrier } from '../../utils/carriers';
import {  useTransfer } from '../../context/TransferContext/TransferContext';
import { useCurrency } from '../../context/CurrencyContext/CurrencyContext';

type TTicketCardProps = {
    tickets: Ticket[]
}

export const TicketCard: React.FC<TTicketCardProps> = ({tickets}: TTicketCardProps) => {
    const { quantityTransfer } = useTransfer()
    const { currency } = useCurrency()

    return (
      <section>
        <div className={styles.wrapBlock}>
        <ul className={styles.main}>
          {tickets.map((ticket, index) => {
            let shouldShowTicket = quantityTransfer.length == 0 || quantityTransfer.includes(ticket.stops)
            if (!shouldShowTicket) {
              return
            }

            return (
            <li className={styles.card} key={index}>
              <div className={styles.wrapCarrier}>
                <img className={styles.logoAirline} src={getCarrier(ticket.carrier)} alt='Logo airline'></img>
                <button className={styles.buyButton}>{`Купить за ${currency.convertFromRub(ticket.price)}${currency.symbol}`}</button>
              </div>
              <div className={styles.wrapTime}>
                <p className={styles.departureTime}>{ticket.departure_time}</p>
                <p className={styles.data}>{`${ticket.origin}, ${ticket.origin_name}`}</p>
                <p className={`${styles.data} ${styles.date}`}>{formatData(ticket.departure_date)}</p>
              </div>
              <div className={styles.separator}>
              <p className={styles.transfer}>
                {plural(
                  ticket.stops,
                  "%d ПЕРЕСАДКА",
                  "%d ПЕРЕСАДКИ",
                  "%d ПЕРЕСАДОК"
                )}
              </p>
              <div className={styles.separatopPlane}>
                <div className={styles.gorizontalLine}></div>
                <img src={smallPlane} alt='Small plane'></img>
              </div>
              </div>
              <div className={styles.wrapTime}>
                <p className={styles.arriveTime}>{ticket.arrival_time}</p>
                <p className={styles.data}>{`${ticket.destination}, ${ticket.destination_name}`}</p>
                <p className={`${styles.data} ${styles.date}`}>{formatData(ticket.arrival_date)}</p>
              </div>
            </li>
            )})}
        </ul>
        </div>
      </section>
    );
}

export default TicketCard