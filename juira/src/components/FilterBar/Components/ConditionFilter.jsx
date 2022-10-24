import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../../redux/actions/app.actions";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const conditionState = ["Como nuevo", "Usado", "Claros signos de uso"];

const ConditionFilter = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState("A-Z");
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  }; /*  */

  const handleMenuItemClick = (event, by) => {
    dispatch(updateFilter({ name: "condition", value: by }));
    setSelectedIndex(by);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        sx={{ m: 0 }}
        id="basic"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<DensityMediumIcon />}
        style={{ color: "var(--primaryColor", marginLeft: "2rem" }}
      >
        Estado
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
            maxHeight: 300,
            width: "20ch",
          },
        }}
      >
        {" "}
        <MenuItem
          sx={{ fontWeight: "bold" }}
          key={0}
          /* disabled={index === 0} */
          selected={"Todos" === selectedIndex}
          onClick={(event) => handleMenuItemClick(event, "Todos")}
        >
          Todos
        </MenuItem>
        {conditionState.map((conditionState, index) => (
          <MenuItem
            key={index}
            selected={conditionState === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, conditionState)}
          >
            {conditionState}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ConditionFilter;
