import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";

// STYLES
const useStyles = makeStyles({
  wrapper: {
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  userItem: {
    width: "50vw",
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  fullName: {
    fontSize: "20px",
  },
  description: {
    fontSize: "14px",
    opacity: "0.4",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  paginationWrapper: {
    position: "absolute",
    bottom: "5vh",
  },
  paginationButton: {
    cursor: "pointer",
    margin: "0 5px",
    border: "1px solid #9ea7aa",
    padding: "10px 20px",
    borderRadius: "10px",
    opacity: 0.6,
    transition: ".1s all linear",
    "&:hover": {
      opacity: 1,
    },
  },
});

// COMPONENT THAT RENDER USERS LIST
export const Users = () => {
  const [state, setState] = useState({
    currentPage: 1,
    perPage: 5,
  });

  const { perPage, currentPage } = state;

  const users = useSelector((state) => state.users);
  const classes = useStyles();
  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = users && users.slice(indexOfFirstUser, indexOfLastUser);

  const handleClick = (evt) =>
    setState({ ...state, currentPage: Number(evt.target.id) });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / perPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <span
        className={classes.paginationButton}
        style={{ color: `${number === currentPage ? "red" : "black"}` }}
        key={number}
        id={number}
        onClick={handleClick}
      >
        {number}
      </span>
    );
  });

  const renderUsers = currentUsers.map((user) => (
    <UserCard key={`${Math.random()}-${user.id}`} {...user} classes={classes} />
  ));

  return (
    <div className={classes.wrapper}>
      {renderUsers}
      <div className={classes.paginationWrapper}>{renderPageNumbers}</div>
    </div>
  );
};
