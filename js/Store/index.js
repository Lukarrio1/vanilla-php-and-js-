export default class Store {
  setState(key = "", value = null) {
    if (!value) return;
    localStorage.setItem(key, JSON.stringify(value));
  }
  getState(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }
}
