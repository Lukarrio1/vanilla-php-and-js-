import Store from "../Store";

export default class HomeClass extends Store {
  constructor() {
    super();
  }
  title = "Home";

  form() {
    return /*js*/ `<div class="card-body">This the form</div>`;
  }

  render() {
    return /*js*/ `<div class="container">
              <div class="row">
                  <div class="col-sm-12">
                    <div class="card mt-5">
                      <div class="card-header text-center">
                        <h1>Example heading <span class="badge text-bg-secondary">New</span>
                        </h1></div>
                      ${this.form()}
                    </div>
                  </div>
              </div>
         </div>`;
  }
}
