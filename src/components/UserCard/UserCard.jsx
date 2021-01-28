import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DefaultAvatar from "../../assets/profile-user.svg";
import { deleteUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const UserCard = ({ name, id, surname, desc, avatar, classes }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return <Card
    variant="outlined"
    className={classes.userItem}
  >
    <CardContent>
      {avatar ? (
        <img src={avatar} alt="user icon" />
      ) : (
        <img src={DefaultAvatar} alt="user icon" width={25} />
      )}
      <div>
        <Typography component="h1" className={classes.fullName}>
          {name} {surname}
        </Typography>
        <Typography component="p" className={classes.description}>
          {desc}
        </Typography>
      </div>
    </CardContent>
    <CardActions className={classes.buttons}>
      <Button onClick={() => history.push(`/edit/${id}`)} variant="outlined">
        Edit
      </Button>
      <Button
        onClick={() => dispatch(deleteUser(id))}
        color="secondary"
        size="small"
        style={{ margin: 0 }}
      >
        Delete
      </Button>
    </CardActions>
  </Card>
};
