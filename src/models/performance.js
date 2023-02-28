export class PerformanceParser {
  static parse(apiData) {
    const result = [];
    const data = apiData.data;
    const kind = apiData.kind;

    data.forEach((d) => {
      const performance = { value: d.value, kind: kind[d.kind] };
      result.push(performance);
    });
    console.log(result);
    return result;
  }
}
