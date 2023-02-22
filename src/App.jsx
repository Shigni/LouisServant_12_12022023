import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './styles/index.scss';
import UserPage from './pages/UserPage/UserPage';
import { Error, Header } from './components';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" />} />
          <Route path="*" element={<Error />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
