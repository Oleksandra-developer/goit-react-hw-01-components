import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={styles.item} key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.symbol.isRequired,
};
export default Statistics;
