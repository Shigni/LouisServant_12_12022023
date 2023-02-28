import React, { useState, useEffect } from 'react';
import logoCalories from '../../assets/logo-calories.svg';
import logoProteins from '../../assets/logo-proteins.svg';
import logoCarbs from '../../assets/logo-carbs.svg';
import logoLipids from '../../assets/logo-lipids.svg';
import { useParams } from 'react-router-dom';

import { getUserInfos } from '../../api';
import {
  Performance,
  AverageSessions,
  Score,
  Activity,
  NutriInfos,
  Error,
} from '../';

/**
 * Create the dashboard using Activity, AverageSessions, Performance, Score and KeyInfos components
 *
 * Get the id by useParams() and get the infos of the Api by getUserInfos(id)
 *
 */

// GetData
export function Dashboard() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState([]);

  const { userInfos, keyData } = data;
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const request = await getUserInfos(id);

      if (request) {
        setData(request.data);
        setScore([
          { score: request.data.todayScore || request.data.score },
          { score: 1 - request.data.todayScore || 1 - request.data.score },
        ]);
      }
    };
    getData();
  }, [id]);

  if (data.length === 0) return <Error />;

  // Display
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>
          Bonjour <span>{userInfos.firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="graph-container">
        <div className="graph">
          <Activity id={id} />
          <div className="small-graph-container">
            <AverageSessions id={id} />
            <Performance id={id} />
            <Score id={id} score={score} />
          </div>
        </div>
        <aside>
          <NutriInfos
            data={keyData.calorieCount}
            unit="kCal"
            image={logoCalories}
            color="rgba(255, 0, 0, 0.1)"
            text="Calories"
          />
          <NutriInfos
            data={keyData.proteinCount}
            unit="g"
            image={logoProteins}
            color="rgba(74, 184, 255, 0.1)"
            text="Proteines"
          />
          <NutriInfos
            data={keyData.carbohydrateCount}
            unit="g"
            image={logoCarbs}
            color="rgba(249, 206, 35, 0.1)"
            text="Glucides"
          />
          <NutriInfos
            data={keyData.lipidCount}
            unit="g"
            image={logoLipids}
            color="rgba(253, 81, 129, 0.1)"
            text="Lipides"
          />
        </aside>
      </div>
    </div>
  );
}
