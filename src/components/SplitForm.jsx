import {
  Button,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SplitForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser)

  }
  return (
    <Fragment>
      <Typography mt={2} variant="h4">
        split a bill with {selectedFriend.name}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid
          sx={{
            "& .MuiTextField-root": { m: 1 },
            alignItems: "space-between",
            justify: "space-between",
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <FormLabel htmlFor="bill" xs={4}>
              💰 Bill Value
            </FormLabel>
            <TextField
              id="bill"
              variant="standard"
              size="small"
              type="number"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </Grid>

          <Grid container alignItems="center" justifyContent="space-between">
            <FormLabel htmlFor="userexpense" xs={4}>
              🧍🏻‍♀️ Your expense
            </FormLabel>
            <TextField
              value={paidByUser}
              onChange={(e) =>
                setPaidByUser(
                  Number(e.target.value) > bill
                    ? paidByUser
                    : Number(e.target.value)
                )
              }
              id="userexpense"
              variant="standard"
              size="small"
              type="number"
            />
          </Grid>

          <Grid container alignItems="center" justifyContent="space-between">
            <FormLabel htmlFor="friendexpense" xs={4}>
              👩🏻‍🤝‍👩🏻 {selectedFriend.name}&apos;s expense
            </FormLabel>
            <TextField
              id="friendexpense"
              variant="standard"
              size="small"
              type="number"
              disabled
              value={paidByFriend}
            />
          </Grid>
          <Grid container alignItems="center" justifyContent="space-between">
            <FormLabel xs={4}>🤑 Who is paying the bill?</FormLabel>
            <Select
              size="small"
              value={whoIsPaying}
              onChange={(e) => setWhoIsPaying(e.target.value)}
            >
              <MenuItem value="friend">
                {selectedFriend.name}
              </MenuItem>
              <MenuItem value="user">you</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: "orange",
            color: "black",
            margin: "10px",
          }}
        >
          Split Bill
        </Button>
      </form>
    </Fragment>
  );
}
