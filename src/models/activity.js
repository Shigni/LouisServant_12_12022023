export class ActivityParser {
  static parse(apiData) {
    return apiData.map((a, i) => {
      return { ...a, key: i + 1 };
    });
  }
}
