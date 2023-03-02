export class AverageSessionsParser {
  static parse(apiData) {
    const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return apiData.map((s) => {
      return { ...s, dayName: dayNames[s.day - 1] };
    });
  }
}
