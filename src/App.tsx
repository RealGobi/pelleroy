import { Header } from './components/Header';
import { Routes } from './routes/Routes';
import { AuthProvider } from './shared/provider/Auth-provider';

import './App.css';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Header />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
