export class PerformanceParser {
  static upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static parse(apiData) {
    const result = [];
    const data = apiData.data;
    const kind = apiData.kind;

    data.forEach((d) => {
      const performance = {
        value: d.value,
        kind: PerformanceParser.upperCaseFirst(kind[d.kind]),
      };
      result.push(performance);
    });

    return result;
  }
}
