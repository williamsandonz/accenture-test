import { Switch, Route } from 'react-router-dom';
import { Home } from '../../pages/home/home';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import './app.scss';

export const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
