import React from "react";
import PropTypes from "prop-types";
import styles from "./Transaction.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.transactionHead}>Type</th>
        <th className={styles.transactionHead}>Amount</th>
        <th className={styles.transactionHead}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.defaultProps = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
export default TransactionHistory;
