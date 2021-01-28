import { Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { createUser, editUser } from "../../redux/actions";

// STYLES
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  button: {
    backgroundColor: "#64dd17",
  },
  form: {
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  errorText: {
    color: "#ef5350",
  },
});

export const UserForm = () => {
  // FORM STATE
  const [state, setState] = useState({
    name: "",
    surname: "",
    desc: "",
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const classes = useStyles();

  // USER ID
  const { id } = useParams();

  // HELPFUL FUNCTION
  const checkFormState = () => {
    if (
      state.name.length === 0 ||
      state.surname.length === 0 ||
      state.desc.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  // FUNCTION TO MANIPULATE WITH FORM STATE
  const handleChange = (evt) =>
    setState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));

  const handleSubmit = () => {
    if (checkFormState()) {
      setError(true);
      return;
    } else {
      setError(false);
      if (pathname === "/create") {
        dispatch(createUser(state));
      } else {
        dispatch(editUser(id, state));
      }
    }

    setState({ name: "", surname: "", description: "" });
    history.push("/");
  };

  return (
    <div className={classes.wrapper}>
      {pathname === "/create" ? (
        <h1>Create new user</h1>
      ) : (
        <h1>Edit user {id}</h1>
      )}
      <form className={classes.form}>
        <TextField
          name="name"
          error={error}
          variant="outlined"
          label="Name"
          onChange={handleChange}
          value={state.name}
        />
        {error && <p className={classes.errorText}>This field is required!</p>}
        <TextField
          name="surname"
          error={error}
          variant="outlined"
          label="Surname"
          onChange={handleChange}
          value={state.surname}
        />
        {error && <p className={classes.errorText}>This field is required!</p>}
        <TextField
          name="desc"
          error={error}
          variant="outlined"
          label="Description"
          onChange={handleChange}
          value={state.desc}
        />
        {error && <p className={classes.errorText}>This field is required!</p>}
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleSubmit}
        >
          {pathname === "/create" ? "Create" : "Edit and save"}
        </Button>
      </form>
    </div>
  );
};
