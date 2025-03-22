import Store from "../Store";

export default class HomeClass extends Store {
  title = "Home";

  render() {
    return /*js*/ `<div class="container">
              <div class="row">
                  <div class="col-sm-12">
                    <div class="card mt-5">
                      <div class="card-body text-center">Welcome To The Vanilla Js And Php Setup</div>
                    </div>
                  </div>
              </div>
         </div>`;
  }
}
