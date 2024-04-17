/* eslint-disable react/prop-types */
import { Button, Card, FormLabel, Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/48`);

  function handleAddFriend(e) {
    e.preventDefault();
        if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <Card>
      <form onSubmit={handleAddFriend}>
        <Grid
          sx={{
            marginTop: "20px",
            display: "grid",
            gap: "15px",
            padding: "15px",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              justifyContent: "space-between",
            }}
          >
            <FormLabel htmlFor="bill" sx={{ fontSize: "13px" }}>
              👩🏼‍🤝‍👩🏻 friend&apos;s name
            </FormLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              justifyContent: "space-between",
            }}
          >
            <FormLabel sx={{ fontSize: "13px" }} htmlFor="bill" xs={4}>
              🖼 Image Url
            </FormLabel>
            <TextField
              id="standard-basic"
              variant="standard"
              size="small"
              defaultValue={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "orange",
              color: "black",
              margin: "10px",
            }}
          >
            Add
          </Button>
        </Grid>
      </form>
    </Card>
  );
}
