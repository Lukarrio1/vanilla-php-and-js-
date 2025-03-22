import Store from "../Store";

export default class NotFoundPage extends Store {
  constructor() {
    super();
  }
  render() {
    return `COULD NOT FIND ${this.getState("CURRENT_PAGE_STORAGE_KEY")} PAGE`;
  }
}
