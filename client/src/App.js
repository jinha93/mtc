import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Error from './components/Error';

import SlotBuff from './components/slotBuff/SlotBuff';
import DpsCalculator from './components/dpsCalculator/DpsCalculator';

const menus = [
  {
      name: 'Home',
      url: '/',
      content: <Error />
  },
  {
      name: 'DPS Calculator',
      url: '/dpsCalculator',
      content: <DpsCalculator />
  },
  {
      name: 'Slot Simulator',
      url: '/slotSimulator',
      content: <SlotBuff />
  },
];

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <NavBar menus={menus}></NavBar>
      <div className="h-full flex-1">
        <BrowserRouter>
          <Routes>
            {menus.map((menu, index) => (
              <Route key={index} path={menu.url} element={menu.content}/>
            ))}
            <Route path='/*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
