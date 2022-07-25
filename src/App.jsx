import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsLoading, setIdx } from './redux/slices/ticketData';
import logo from './assets/images/Logo.svg';
import Filters from './components/Filters/Filters';
import Sorting from './components/Sorting/Sorting';
import Card from './components/Card/Card';
import appStyles from './App.module.scss';
import { fetchTicketStore } from './redux/slices/ticketData';

function App() {
  const { isStop, isError, tickets, isLoading, idx } = useSelector((state) => state.ticketData);
  const dispatch = useDispatch();
  const fetchId = async () => {
    const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');
    return data.searchId;
  };
  useEffect(() => {
    fetchId().then((id) => {
      dispatch(setIdx(id));
    });
  }, []);
  useEffect(() => {
    if (isStop === false) {
      dispatch(fetchTicketStore(idx));
    } else {
      dispatch(setIsLoading());
    }
  }, [isStop, isError, idx, tickets]);
  return (
    <div className={appStyles.container}>
      <header className={appStyles.header}>
        <img className={appStyles.imaged} src={logo} alt="logo" />
        {isLoading && <TailSpin height={60} width={60} ariaLabel="loading-indicator" />}
      </header>
      <main className={appStyles.mainContainer}>
        <section className={appStyles.filterContainer}>
          <Filters />
        </section>
        <section className={appStyles.cards}>
          <Sorting />
          <Card />
        </section>
      </main>
    </div>
  );
}

export default App;
