import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SlotBuff from './components/slotBuff/SlotBuff';
import NavBar from './components/navbar/navBar';
import Footer from './components/footer/footer';

const menus = [
  {
      name: 'Home',
      url: '/',
      content: <SlotBuff />
  },
  {
      name: 'Comunnity',
      url: '/comunnity',
      content: <SlotBuff />
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
      {/* <NavBar menus={menus}></NavBar> */}
      <div className="flex-1 py-20">
        <SlotBuff/>
        {/* <BrowserRouter>
          <Routes>
            {menus.map((menu, index) => (
              <Route key={index} path={menu.url} element={menu.content}/>
            ))}
          </Routes>
        </BrowserRouter> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
