import {useState} from "react";
import {storage} from "./store/user";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import * as api from "./service";

function App() {
  const count = useSelector(state => state.user.value)
  const dispatch = useDispatch()

  const [email, setEmail] = useState("admin@system.com");
  const [password, setPassword] = useState("123123");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const onClickSave = async () => {
    const response = await api.post('auth/login', {email, password});
    console.log(response);
    setToken(response.data.data.token);
    dispatch(storage(response.data.data.token));
  }

  const onClickGet = async () => {
    const response = await api.get('/user/appData');
    console.log(response.data.user.firstname);
    setUser(response.data.user);
  }

  return (
    <div className="App">
      <input onChange={e => setEmail(e.target.value)} value={email} />
      <input type={password} onChange={e => setPassword(e.target.value)} value={password} />
      <button onClick={onClickSave}>Login</button>
      {token}
      <button onClick={onClickGet}>Get</button>
      <hr/>
      {`${user.firstname} ${user.lastname} ${user.fullname} ${user.email}`}
      <hr/>
      {count}
    </div>
  );
}

export default App;
