import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
} from 'recharts';
import PropTypes from 'prop-types';

import { DashboardService } from '../../service';
import { ActivityTooltip } from '../';

/**
 * Create the "activity" graph
 *
 * Using recharts module to draw
 *
 */

export function Activity({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const activities = await DashboardService.getUserActivity(id);
      setData(activities);
    };
    getData();
  }, [id]);

  const kgArray = data.map((el) => el.kilogram);
  const minYKg = Math.min(...kgArray) - 1;
  const maxYKg = Math.max(...kgArray) + 1;

  const calArray = data.map((el) => el.calories);
  const minYCal = Math.min(...calArray) - 20;
  const maxYCal = Math.max(...calArray) + 20;

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2 className="title-activity">Activité quotidienne</h2>
        <div className="legend">
          <div className="units">
            <div className="dot dot-kg" />
            <div className="text">Poids (kg)</div>
          </div>
          <div className="units">
            <div className="dot dot-kCal" />
            <div className="text">Calories brûlées (kCal)</div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{
            top: 50,
          }}
          data={data}
          barGap={8}
          barCategoryGap={1}
        >
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <Tooltip content={<ActivityTooltip />} />
          <XAxis dataKey="key" axisLine={false} tickLine={false} />
          <YAxis
            yAxisId="kg"
            datakey="kilogram"
            orientation="right"
            domain={[minYKg, maxYKg]}
            tickCount={4}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            datakey="calories"
            hide={true}
            domain={[minYCal, maxYCal]}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Activity.propTypes = {
  id: PropTypes.string.isRequired,
};
