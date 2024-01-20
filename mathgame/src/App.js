import logo from './logo.svg';
import './App.css';
import FrontPage from './Pages/FrontPage/FrontPage';
import LeaderBoardPage from './Pages/LeaderBoardPage/LeaderBoardPage';
import PlayPage from './Pages/PlayPage/PlayPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  document.title = "Brocuta Matematiciana"
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FrontPage/>}/>
        <Route path="/leaderboard" element={<LeaderBoardPage/>}/>
        <Route path="/play" element={<PlayPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
