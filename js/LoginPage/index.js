import Store from "../Store";

export default class LoginPage extends Store {
  constructor() {
    super();
  }
  render() {
    return /*js*/ `<div class="row">
                   <div class="col-sm-8 offset-sm-2">
                    <div class="card mt-5">
                      <div class="card-header h1">Login Page</div>
                      <div class="card-body">
                      <form>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
              </div>`;
  }
}
