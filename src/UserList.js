import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import Counter from "./components/counter";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "./UsersList";
import { deleteUser } from "./redux/slices/userDataSlice";
import addUser from "./redux/slices/userDataSlice";

function App() {
  const usersData = useSelector((state) => {
    return state.usersData;
  });

  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    return () => {
      dispatch(deleteUser(id));
    };
  };

  const handleAddUser = () => {
    return () => {
      dispatch(addUser);
    };
  };
  return (
    <main class="container-fluid">
      <article class="main-content" role="main">
        <section id="introduction">
          <UsersList
            usersData={usersData}
            handleDeleteUser={handleDeleteUser}
            handleAddUser={handleAddUser}
          ></UsersList>
        </section>
      </article>
    </main>
    //   <div>
    //     <aside class="sidebar sidebar-boxed sidebar-dark">
    //       <ul class="nav sidenav dropbable">
    //         <li>
    //           <a href>Send Message</a>
    //         </li>
    //         <li>
    //           <a href>Conversation</a>
    //         </li>
    //         <li>
    //           <a href>Message Template</a>
    //         </li>
    //       </ul>
    //     </aside>
    //   </div>
  );
}

export default App;
