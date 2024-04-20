import { useState } from "react";
import { Button, Grid } from "@mui/material";
import "./App.css";
import ListOfFriends from "./components/ListOfFriends";
import SplitForm from "./components/SplitForm";
import AddFriend from "./components/AddFriend";

function App() {
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const [friends, setFriends] = useState([
    {
      id: crypto.randomUUID(),
      name: "sara",
      image: `https://i.pravatar.cc/150`,
      balance: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "reyhane",
      image: `https://i.pravatar.cc/150`,
      balance: 0,
    },
  ]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleAddFriend(friend) {
    setFriends((friends) => {
      return [...friends, friend];
    });
    setOpenAddFriend(false);
  }
  function handleSelection(friend) {
    setSelectedFriend((selected) => selected?.id === friend.id ? null : friend);
    setOpenAddFriend(false)
  }

  function handleSplitBill(value) {
    console.log(value)
    setFriends((friends) => {
      return friends.map(friend => friend.id === selectedFriend.id ? {...friend , balance : friend.balance + value} : friend)
    })
    setSelectedFriend(null)
  }

  return (
    <>
      <Grid container spacing={5}>
        <Grid
          item
          container
          xs={12}
          md={6}
          alignItems="flex-start"
          direction="column"
          justifyContent="flex-start"
        >
          <ListOfFriends
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelection}
          />
          {openAddFriend && (
            <AddFriend setFriends={setFriends} onAddFriend={handleAddFriend} />
          )}
          <Button
            variant="contained"
            style={{
              backgroundColor: "#5dc1f3",
              color: "black",
              margin: "10px",
            }}
            onClick={() => setOpenAddFriend((o) => !o)}
          >
            {openAddFriend ? "close" : "Add Friend"}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {selectedFriend && <SplitForm selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
