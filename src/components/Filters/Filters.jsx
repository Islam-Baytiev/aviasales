import FilterTicket from '../FilterTicket/FilterTicket';

import FilterStyles from './Filters.module.scss';

const Filters = () => {
  return (
    <form className={FilterStyles.block}>
      <h2 className={FilterStyles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={FilterStyles.list}>
        <FilterTicket />
      </ul>
    </form>
  );
};
export default Filters;
