import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import Counter from "./components/counter";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./redux/slices/userDataSlice";
import addUser from "./redux/slices/userDataSlice";
import { AiOutlineArrowRight } from "react-icons/ai";

function App() {
  return (
    <aside class="sidebar sidebar-boxed sidebar-dark">
      <ul class="nav sidenav dropbable">
        <li>
          <a href>
            Send Message
            <div id="navigation-arrow">
              <AiOutlineArrowRight />
            </div>
          </a>
        </li>
        <li>
          <a href>
            Conversation
            <div id="navigation-arrow">
              <AiOutlineArrowRight />
            </div>
          </a>
        </li>
        <li>
          <a href>
            Message Template
            <div id="navigation-arrow">
              <AiOutlineArrowRight />
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default App;
