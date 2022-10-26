import "./App.scss";
import UserInputContextProvider from "./Context/UserInputContext";
import MainPage from "./Layout/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <UserInputContextProvider>
        <MainPage />
      </UserInputContextProvider>
    </div>
  );
}

export default App;
