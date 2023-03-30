import MainContainer from './components/Main Components/MainContainer';
import AsideMenuContainer from './components/Sidebar Components/AsideMenuContainer';

function App() {
  return (
    <>
      <div className="app__container">
        <MainContainer />

        <AsideMenuContainer />
      </div>
    </>
  );
}

export default App;
