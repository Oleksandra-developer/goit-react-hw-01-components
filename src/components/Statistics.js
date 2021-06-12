import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
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
