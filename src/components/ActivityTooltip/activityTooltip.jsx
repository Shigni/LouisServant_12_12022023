import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tooltip when hover on activity graph
 *
 * @param {boolean} active
 *
 * @param {array} payload value obtained by GetUserActivity()
 *
 */

export function ActivityTooltip({ active, payload }) {
  if (active) {
    return (
      <div className="activity-tooltip">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </div>
    );
  }
  return null;
}

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
