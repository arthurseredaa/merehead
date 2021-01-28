import {
  makeStyles,
} from "@material-ui/core";
import {useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";

// STYLES
const useStyles = makeStyles({
  wrapper: {
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    width: "100vw",
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
});

// COMPONENT THAT RENDER USERS LIST
export const Users = () => {
  const users = useSelector((state) => state.users);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {users && users.map((user) => <UserCard key={`${Math.random()}-${user.id}`} {...user} classes={classes} />)}
    </div>
  );
};
