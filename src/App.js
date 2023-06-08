import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import Counter from "./components/counter";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./redux/slices/userDataSlice";
import addUser from "./redux/slices/userDataSlice";
import UserList from "./UserList";
import NavBar from "./navbar";
import SenderCard from "./sendercard";

// import "./collection.css";

function App() {
  // const usersData = useSelector((state) => {
  //   return state.usersData;
  // });

  // const dispatch = useDispatch();

  // const handleDeleteUser = (id) => {
  //   return () => {
  //     dispatch(deleteUser(id));
  //   };
  // };

  // const handleAddUser = () => {
  //   return () => {
  //     dispatch(addUser);
  //   };
  // };

  return (
    <div>
      <NavBar />
      <SenderCard />
    </div>
  );
}

export default App;
