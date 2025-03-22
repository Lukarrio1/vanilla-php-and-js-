const CURRENT_PAGE_STORAGE_KEY = "CURRENT_PAGE_STORAGE_KEY";

export default class Store {
  setState(key = CURRENT_PAGE_STORAGE_KEY | "", value = null) {
    if (!value) return;
    localStorage.setItem(key, value);
  }
  getState(key = CURRENT_PAGE_STORAGE_KEY) {
    const item = localStorage.getItem(key);
    return item;
  }
}
