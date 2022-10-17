import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesNames } from "../../redux/actions/products.actions";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { updateFilter } from "../../redux/actions/app.actions";
import SortButton from "./Components/SortButton";

const sort = ["Mayor Valor", "Menor Valor", "A-Z", "Z-A"];

const FilterBar = () => {
  const options = useSelector((state) => state.productsReducer.allCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesNames());
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState("Todos");
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, category) => {
    dispatch(updateFilter({ name: "categories", value: category }));
    
    setSelectedIndex(category);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#FFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <Button
            sx={{ m: 0 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<DensityMediumIcon />}
          >
            Categorias
          </Button>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
            PaperProps={{
              style: {
                maxHeight: 400,
              },
            }}
          >
            <MenuItem
              sx={{ fontWeight: "bold" }}
              key={0}
              /* disabled={index === 0} */
              selected={"Todos" === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, "Todos")}
            >
              Todos
            </MenuItem>
            {options &&
              options.sort().map((category, index) => (
                <MenuItem
                  key={index + 1}
                  /* disabled={index === 0} */
                  selected={category === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, category)}
                >
                  {category}
                </MenuItem>
              ))}
          </Menu>
          <SortButton/>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            textAlign="center"
            style={{ color: "#252323" }}
          >
            {selectedIndex === 0 ? null : selectedIndex}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default FilterBar;
