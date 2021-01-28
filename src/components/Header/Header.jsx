import { makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#bdb9b7",
    height: "50px",
    padding: "5px 30px",
    display: "flex",
    alignItems: "center",
    "& h1": {
      margin: 0,
    },
  },
  headerLink: {
    textDecoration: "none",
    color: "#222",
    opacity: 0.6,
    transition: ".1s all linear",
    "&:hover": {
      opacity: 1,
    },
  },
});

export const Header = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <header className={classes.header}>
      {location.pathname === "/" ? (
        <Link to="/create" className={classes.headerLink}>
          Create user
        </Link>
      ) : (
        <Link to="/" className={classes.headerLink}>
          Back
        </Link>
      )}
    </header>
  );
};
