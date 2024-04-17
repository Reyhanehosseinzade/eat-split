import { List } from "@mui/material";
import FriendItem from "./FriendItem";

// eslint-disable-next-line react/prop-types
export default function ListOfFriends({ friends, onSelection, selectedFriend }) {

  return (
    <>
      <List
        sx={{
          width: "100%",
        }}
      >
        {friends.map((friend) => {
          return (
            <FriendItem
              key={friend.id}
              friend={friend}
              onSelection={onSelection}
              selectedFriend={selectedFriend}
            />
          );
        })}
      </List>
    </>
  );
}
