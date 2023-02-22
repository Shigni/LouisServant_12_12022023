import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tooltip when hover on average sessions graph
 *
 * @param {boolean} active
 * @param {array} payload value obtained by GetUserAverageSessions()
 *
 */

export function AverageSessionsTooltip({ active, payload }) {
  if (active) {
    return <div className="session-tooltip">{payload[0].value} min</div>;
  }
  return null;
}

AverageSessionsTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
