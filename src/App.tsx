import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { AccountManager } from './components/pages/AccountManager/AccountManager';

function App() {
  return (
    <div className="container mt-5">
      <RecoilRoot>
        <AccountManager />
      </RecoilRoot>
    </div>
  );
}

export default App;
