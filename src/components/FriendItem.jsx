import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";


export default function FriendItem({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id
  return (
    <>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={friend.image} />
        </ListItemAvatar>
        <ListItemText
          primary={friend.name}
          secondary={
            <Fragment>
              {friend.balance < 0 && (
                <span style={{ color: "red" }}>
                  You owe {friend.name} {Math.abs(friend.balance)}$
                </span>
              )}
              {friend.balance > 0 && (
                <span style={{ color: "green" }}>
                  {friend.name} owes you {Math.abs(friend.balance)}$
                </span>
              )}
              {friend.balance == 0 && (
                <span>you and {friend.name} are even!</span>
              )}
            </Fragment>
          }
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#5dc1f3",
            color: "black",
          }}
          onClick={() => onSelection(friend)}
        >
          {isSelected ? "close" : "select"}
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
