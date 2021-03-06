import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { GlobalState } from "../../../Context/globalState";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, setUser } = useContext(GlobalState);

  const logout = () => {
    setUser({});
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="الحساب الشخصي">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "var(--color4)",
                fontSize: "14px",
              }}
            >
              {Object.keys(user).length !== 0
                ? user.user.email.slice(0, 2).toUpperCase()
                : null}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {Object.keys(user).length === 0
          ? [
              <Link to={"signin"} key={2}>
                <MenuItem
                  style={{
                    fontFamily: "var(--mainFont)",
                    fontSize: "14px",
                  }}
                >
                  <Avatar /> تسجيل الدخول
                </MenuItem>
              </Link>,
              <Link to={"signup"} key={1}>
                <MenuItem
                  style={{
                    fontFamily: "var(--mainFont)",
                    fontSize: "14px",
                  }}
                >
                  <Avatar /> إنشاء حساب
                </MenuItem>
              </Link>,
            ]
          : [
              <Link to={"/orders"} key={3}>
                <MenuItem
                  style={{
                    fontFamily: "var(--mainFont)",
                    fontSize: "14px",
                    direction: "rtl",
                  }}
                >
                  طلباتي
                </MenuItem>
              </Link>,

              <Link to={"/"} key={4}>
                <MenuItem
                  onClick={logout}
                  style={{
                    fontFamily: "var(--mainFont)",
                    fontSize: "14px",
                    direction: "rtl",
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  تسجيل الخروج
                </MenuItem>
              </Link>,
            ]}
      </Menu>
    </React.Fragment>
  );
}
