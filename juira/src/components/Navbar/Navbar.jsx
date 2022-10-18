import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
/* import { updateDisplayed } from '../../redux/actions/products.actions'; */
import style from "./Navbar.module.css";
import image from "../media/juira_white.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const itemsInCart = useSelector((state) => state.cart) || 2; //default 2 para probar que las notificaciones del carrito funcionan

  const products = useSelector((state) => state.allProducts) || [
    { name: "silla" },
    { name: "cocina" },
    { name: "celular" },
    { name: "televisor" },
    { name: "nevera" },
  ];
  const sugestions = products.map((p) => p.name);

  const [input, setInput] = React.useState("");

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      // if (location.pathname !== '/juira') {
      setInput("");
      history.push(`/juira?search=${input}`);
      // }
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link
        component={RouterLink}
        to="/login"
        underline="none"
        sx={{ color: "" }}
      >
        <MenuItem>
          <IconButton size="large" color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Iniciar Sesión / Registrarse</p>
        </MenuItem>
      </Link>

      <Link
        component={RouterLink}
        to="/juira/shoppingCart"
        underline="none"
        sx={{ color: "" }}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label={`show ${itemsInCart} new notifications`}
            color="inherit"
          >
            <Badge badgeContent={itemsInCart} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Carrito de compras</p>
        </MenuItem>
      </Link>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem> */}

      </Menu>
    );
    
    const linkSx = {
      color: '#ffffff',
    }
    return (
      <Box position="sticky" top="0" left="0" zIndex="5" sx={{ flexGrow: 1 }}>
        <AppBar position="relative" color='success' style={{ backgroundColor: "var(--primaryColor)" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
  
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
            
               <Link
              component={RouterLink}
              to="/juira"
              underline="none"
              onClick={() => {
                dispatch(updateFilter({ name: "categories", value: "Todos" }));
                dispatch(updateFilter({ name: "sort", value: "A-Z" }));
              }}>
              <img className={style.img} src={image} alt="juria"></img>
            </Link>
            
    
            </Typography>
            
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar un producto..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={ e => handleOnChange(e)}
                value={input}
                autoFocus={true}
                onKeyDown={ e => handleOnKeyDown(e)}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
  
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar un producto..."
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleOnChange(e)}
              value={input}
              autoFocus={true}
              onKeyDown={(e) => handleOnKeyDown(e)}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              component={RouterLink}
              to="/juira/sell"
              underline="none"
              sx={{ color: "#ffffff" }}
            >
              <Tooltip title="Vender un producto" arrow>
                <IconButton
                  size="large"
                  aria-label={`Vender un producto`}
                  color="inherit"
                >
                  <AddBusinessIcon />
                </IconButton>
              </Tooltip>
            </Link>

            <Link
              component={RouterLink}
              to="/juira/shoppingCart"
              underline="none"
              sx={{ color: "#ffffff" }}
            >
              <Tooltip title="Carrito de compras" arrow>
                <IconButton
                  size="large"
                  aria-label={`show ${itemsInCart} items in shopping cart`}
                  color="inherit"
                >
                  <Badge badgeContent={itemsInCart} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>

            <Link
              component={RouterLink}
              to="/juira"
              underline="none"
              sx={{ color: "#ffffff" }}
            >
              {/* <AccountCircle /> */}
              <Tooltip title="Iniciar sesión o registrarse" arrow>
                <IconButton size="large" color="inherit">
                  <AccountCircle />
                  {/* <Typography>
                    Iniciar Sesion / Registrarse
                  </Typography> */}
                </IconButton>
              </Tooltip>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
