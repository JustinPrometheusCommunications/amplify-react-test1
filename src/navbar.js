import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import Counter from "./components/counter";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./redux/slices/userDataSlice";
import addUser from "./redux/slices/userDataSlice";

function App() {
  return (
    <aside class="sidebar sidebar-boxed sidebar-dark">
      <ul class="nav sidenav dropbable">
        <li>
          <a href>Send Message</a>
        </li>
        <li>
          <a href>Conversation</a>
        </li>
        <li>
          <a href>Message Template</a>
        </li>
      </ul>
    </aside>
  );
}

export default App;
