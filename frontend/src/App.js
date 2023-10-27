import "./App.css"
import NavBar from "./navigation/NavBar";
import AllRoutes from "./navigation/AllRoutes";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavBar />
        <main>
          <AllRoutes />
        </main>
      </UserContextProvider>
    </div>
  );
}

export default App;
