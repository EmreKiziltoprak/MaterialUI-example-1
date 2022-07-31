import { ShoppingBag,Notifications, Mail} from "@mui/icons-material";
import {
  AppBar,
  Box,
  InputBase,
  styled,
  Badge,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem
} from "@mui/material";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import Search from "../utils/Search";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  direction: "row",
  alignItems: "center",
  gap:"0.9rem"
}));

export const Navbar = (props) => {

  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Emre Kızıltoprak
        </Typography>
        {/* <ShoppingBag/>*/}
        <Search theme={props.theme}>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick={(e)=> {setOpen(!open)}} />
        </Icons>
      </StyledToolbar>
      <div>
        <Menu
          id="basic-menu"
          open={open}
          onClose={(e)=>{setOpen(false)}}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical:"top",
            horizontal:"right"
          }}
          transformOrigin={{
              vertical: "top",
              horizontal: "right"
          }}

        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem >Logout</MenuItem>
        </Menu>
      </div>
    </AppBar>
  );
};
