import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCount } from '../../redux/slices/ticketData';
import { sortTickets, activeTickets } from '../../helper/sorted';
import CardTicket from '../CardTicket/CardTicket';

import CardStyles from './Card.module.scss';

const Card = () => {
  const dispatch = useDispatch();
  const { tickets, count } = useSelector((state) => state.ticketData);
  const { active, sorting } = useSelector((state) => state.filtersData);
  const hundleCount = (c) => {
    const newCount = c + 5;
    dispatch(setCount(newCount));
  };
  const tick = activeTickets(active, tickets);
  const sortTick = sortTickets(tick, sorting);
  if (sortTick.length) {
    return (
      <>
        {sortTick?.slice(0, count).map((ticket) => (
          <CardTicket key={`${ticket.carrier}${ticket.price}${ticket.segments[0].duration}`} {...ticket} />
        ))}
        <button onClick={() => hundleCount(count)} className={CardStyles.btn} type="button">
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
        </button>
      </>
    );
  }
  return <span className={CardStyles.text}> Нет подходящих билетов</span>;
};
export default Card;
