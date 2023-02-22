import React, { useState, useEffect } from 'react';
import {
  RadarChart,
  PolarGrid,
  Radar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

import { getUserPerformance } from '../../api';

/**
 * Create the "Performance" graph
 *
 * Using recharts module to draw
 *
 */

export function Performance({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await getUserPerformance(id);

      for (let i = 0, size = request.data.data.length; i < size; i++) {
        request.data.data[i] = {
          ...request.data.data[i],
          kind:
            request.data.kind[request.data.data[i].kind]
              .charAt(0)
              .toUpperCase() +
            request.data.kind[request.data.data[i].kind].slice(1),
        };
      }

      setData(request.data.data);
    };
    getData();
  }, [id]);

  return (
    <div className="performance-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tick={{ fontSize: 11 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

Performance.propTypes = {
  id: PropTypes.string.isRequired,
};
