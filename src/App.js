import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Users } from "./components/Users/Users";
import { BrowserRouter, Route } from "react-router-dom";
import { UserForm } from "./components/UserForm/UserForm";
import { fetchUsers } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {loading ? (
          <p style={{textAlign: "center"}}>Loading...</p>
        ) : (
          <>
            <Route exact path="/" component={Users} />
            <Route exact path="/create" render={() => <UserForm />} />
            <Route exact path="/edit/:id" render={() => <UserForm />} />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
