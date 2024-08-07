
import "./App.css";
import { Button } from "./components/ui/button";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route ,Navigate} from "react-router-dom"; 
import Auth from "./Pages/auth";
import Profile from "./Pages/profile";
import Chat from "./Pages/chat";

function App() {
  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element ={<Auth/>} />
          <Route path="/chat" element ={<Chat/>} />
          <Route path="/profile" element ={<Profile/>} />

          <Route path="*" element ={<Navigate to ="/auth"/>} /> 
            {/* "*" -> its wild entry means if we hit any wrong part we will navigate to auth path */}

        </Routes>
      </BrowserRouter>
      </div>
      
    </>
  );
}

export default App;
