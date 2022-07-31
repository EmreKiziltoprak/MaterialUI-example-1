import { Avatar, AvatarGroup, Fab, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from "@mui/icons-material/Add";
import styled from '@emotion/styled/';
import { Box } from '@mui/system';

const UserBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px 0",
});

const AddTooltip = styled(Tooltip)(({theme})=> ({
    position: "fixed",
    bottom: "20px",
    left: "20px"
}))

function Add() {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")

  return (
    <React.Fragment>
      <AddTooltip
        onClick={(e) => {
          setOpen(true);
          console.log("MODAL");
        }}
        title="Add Person"
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </AddTooltip>

      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={(e) => {
          setOpen(false);
        }}
        open={open}
      >
        <Box
          width={400}
          height={280}
          sx={{ backgroundColor: "white", borderRadius: "5px" }}
          p={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "30px", height: "30px" }}
              src="data:image/jpeg;base64,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"
            />
            <Typography variant="span" color="black" font-weight="bold">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", margin: ".7em 0em" }}
            id="standard-multiline-flexible"
            multiline
            rows={4}
            placeholder="Enter a value"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            variant="standard"
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default Add