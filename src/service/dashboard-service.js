import axios from 'axios';
import {
  PerformanceParser,
  ActivityParser,
  AverageSessionsParser,
} from '../models';

const instance = axios.create({
  baseURL: 'http://localhost:3000/user',
});

export class DashboardService {
  /**
   * Gets user infos from the API
   *
   * @param {string} id User id
   * @returns {object} Response
   */
  static getUserInfos = async (id) => {
    try {
      const res = await instance.get(`/${id}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Gets user performance from the API
   *
   * @param {string} id User id
   * @returns {object} Response
   */
  static getUserPerformance = async (id) => {
    try {
      const res = await instance.get(`/${id}/performance`);
      return PerformanceParser.parse(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Gets user activity from the API
   *
   * @param {string} id User id
   * @returns {object} Response
   */
  static getUserActivity = async (id) => {
    try {
      const res = await instance.get(`/${id}/activity`);
      return ActivityParser.parse(res.data.data.sessions);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Gets user average sessions from the API
   *
   * @param {string} id User id
   * @returns {object} Response
   */
  static getUserAverageSessions = async (id) => {
    try {
      const res = await instance.get(`/${id}/average-sessions`);
      return AverageSessionsParser.parse(res.data.data.sessions);
    } catch (e) {
      console.log(e);
    }
  };
}
