import {  useState } from 'react';
import styles from './TransferCheckBox.module.css'
import ButtonOnly from '../ui/buttonOnly/buttonOnly';
import { useTransfer } from '../../context/TransferContext/TransferContext';

type TTransferCheckBoxProps = {
  title: string,
  items: TTransferCheckBoxItemProps[],
  onValueChange?: (keys: any[]) => void
}

type TTransferCheckBoxItemProps = {
  key: any,
  title: string
}

type TCheckBoxItem = {
  key: any,
  title: string,
  checked: boolean
}

const TransferCheckBox: React.FC<TTransferCheckBoxProps> = (
  props: TTransferCheckBoxProps
) => {
  const [items, setItems] = useState<TCheckBoxItem[]>(
    props.items.map((item) => {
      return {
        key: item.key,
        title: item.title,
        checked: false,
      };
    })
  );
  const [showButton, setShowButton] = useState<any>(null);
  const { setQuantityTransfer, quantityTransfer } = useTransfer();

  const handleMouseEnter = (key: any) => {
    setShowButton(key);
  };

  const handleMouseLeave = () => {
    setShowButton(null);
  };

  const toggleCheckBox = (checkbox: TCheckBoxItem) => {
    if (checkbox.checked) {
      setQuantityTransfer(
        [...quantityTransfer].filter((key) => key != checkbox.key)
      );
    } else {
      setQuantityTransfer([...quantityTransfer, checkbox.key]);
    }

    setItems(
      items.map((item) => {
        if (checkbox.key === item.key) {
          checkbox.checked = !checkbox.checked;
        }
        return item;
      })
    );
  };

  const checkAll = (check: boolean) => {
    setItems(
      items.map((item) => {
        item.checked = check;
        return item;
      })
    );

    setQuantityTransfer(check ? items.map((item) => item.key) : []);
  };

  const checkOnlyOne = (checkbox: TCheckBoxItem) => {
    setItems(
      items.map((item) => {
        item.checked = item.key === checkbox.key
        return item
      })
    )

    setQuantityTransfer([checkbox.key])
  }

  return (
    <>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.transfer}>
        <div className={styles.wrapTransfer}>
          <label className={styles.check}>
            <input
              className={styles.checkInput}
              type="checkbox"
              onClick={(event) => {
                checkAll((event.target as HTMLInputElement).checked);
              }}
            ></input>
            <span className={styles.checkbox}></span>
            Все
          </label>
        </div>
        {items.map((item, index) => (
          <div key={index}>
            <div
              className={styles.wrapTransfer}
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
              <label className={styles.check}>
                <input
                  className={styles.checkInput}
                  type="checkbox"
                  checked={item.checked}
                  onClick={() => toggleCheckBox(item)}
                ></input>
                <span className={styles.checkbox}></span>
                {item.title}
              </label>
              {showButton == item.key && <ButtonOnly 
                onClick={() => 
                  checkOnlyOne(item)
                }/>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TransferCheckBox;