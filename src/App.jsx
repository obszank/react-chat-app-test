import Chat from "./components/chat/chat.jsx";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login.jsx";
import Notification from "./components/notification/Notification";

const App = () => {
  const user = true;

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
