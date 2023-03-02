import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';

import { DashboardService } from '../../service';
import { AverageSessionsTooltip } from '../';

/**
 * Create the average sessions duration graph
 *
 * Using recharts module to draw
 *
 * @param {string} id UseParams() in dashboard component
 *
 */

export function AverageSessions({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const averageSessions = await DashboardService.getUserAverageSessions(id);
      setData(averageSessions);
    };
    getData();
  }, [id]);

  const lengthArray = data.map((el) => el.sessionLength);
  const minY = Math.min(...lengthArray) / 1.6;
  const maxY = Math.max(...lengthArray) * 1.6;

  return (
    <div className="session-container">
      <h2 className="title-sessions">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="dayName"
            stroke="rgba(255, 255, 255, 0.5)"
            tick={{ fontSize: 12 }}
            minTickGap={3}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis hide={true} domain={[minY, maxY]} />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.5)',
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={<AverageSessionsTooltip />}
            cursor={{
              stroke: 'rgba(0, 0, 0, 0.0)',
              strokeWidth: 50,
              height: '1000px',
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessions.propTypes = {
  id: PropTypes.string.isRequired,
};
