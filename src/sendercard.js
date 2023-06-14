import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import Counter from "./components/counter";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <main class="container-fluid">
      <article class="main-content" role="main">
        <section id="introduction">
          <div class="card" bis_skin_checked="1">
            <div class="card-body" bis_skin_checked="1">
              <div
                id="status"
                class="alert alert-dismissable alert-sm text-center d-none"
                bis_skin_checked="1"
              ></div>
            </div>
            <form id="sendForm" name="sendForm" method="post">
              <div class="row">
                <div class="col-lg-4 text-dark font-weight-bold">Sender</div>
                <div class="col-lg-4">
                  <p>
                    <select
                      class="form-control form-control-sm"
                      id="callerid"
                      name="callerid"
                    >
                      <option value="1">SMS</option>
                    </select>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 text-dark font-weight-bold">Send Mode</div>
                <div class="col-lg-4">
                  <p>
                    <input type="radio" name="sendmode" value="sms" checked />
                    &nbsp;SMS&emsp;
                    <input type="radio" name="sendmode" value="WhatsApp" />
                    &nbsp;WhatsApp&emsp;
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 text-dark font-weight-bold">
                  Phone Number(s)
                  <span class="text-danger">*</span>
                </div>
                <div class="col-lg-4">
                  <p>
                    <textarea
                      class="form-control form-control-sm"
                      id="mobile"
                      name="mobile"
                      rows="5"
                      required
                    ></textarea>
                  </p>
                </div>
                <br />
                "(Seperate each Entry with a new line)"
                <br />
                "Numbers Only - Please Enter The Mobile In The International
                Format"
                <br />
                "Eg: For Singapore, +65++++++++, '+65' is the Country Code"
              </div>
              <div class="row">
                <div class="col-lg-4 text-dark font-weight-bold">
                  Enter your message:
                  <span class="text-danger">*</span>
                </div>
                <div class="col-lg-4">
                  <p>
                    <textarea
                      class="form-control form-control-sm"
                      id="smstext"
                      name="smstext"
                      rows="5"
                      required
                    ></textarea>
                  </p>
                </div>
              </div>
              <hr></hr>
              <div class="row justify-content-lg-center" bis_skin_checked="1">
                <button id="submit" type="submit" class="btn btn-primary">
                  Send
                </button>
                <button id="reset" type="button" class="btn btn-secondary">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
export default App;
