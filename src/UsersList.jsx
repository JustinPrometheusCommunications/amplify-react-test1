import { Button, TextField } from "@mui/material";
import { useState } from "react";

const UsersList = ({ usersData, handleDeleteUser }) => {
  const [username, setuserName] = useState("");
  const [newUserName, setnewUserName] = useState("");
  const [list, setList] = useState(usersData);

  const handleClick = (name) => {
    return () => {
      console.log("Username: " + name);
    };
  };

  const handleNameChange = (event) => {
    setuserName(event.target.value);
  };

  const handleChange = (event) => {
    setnewUserName(event.target.value);
  };

  const handleAdd = () => {
    const newList = list.concat({ newUserName });
    setList(newList);
    console.log(newList);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleAdd}>
        Add New User
      </Button>
      <h1>{username}</h1>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        onChange={handleChange}
      />
      {usersData.map(({ id, username }) => {
        return (
          <div key={id} onClick={handleClick}>
            <h1>ID: {id}</h1>
            <h4>Name: {username}</h4>
            <Button variant="contained" onClick={handleDeleteUser(id)}>
              Remove {username}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
