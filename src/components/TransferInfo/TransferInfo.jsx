import React from 'react';
import { format } from 'date-fns';

import TransferStyles from './TransferInfo.module.scss';

const TransferInfo = ({ date, destination, duration, origin, stops }) => {
  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}Ч ${minutes}М`;
  }
  function getTimeEnd(date, duration) {
    return format(new Date(new Date(date).getTime() + duration * 60000), 'HH:mm');
  }

  return (
    <div className={TransferStyles.info}>
      <div className={TransferStyles.blockOne}>
        <div>
          <div className={TransferStyles.blockOne__title}>
            {origin} –{destination}
          </div>
          <div className={TransferStyles.blockOne__text}>
            {format(new Date(date), 'HH:mm')} – {getTimeEnd(date, duration)}
          </div>
        </div>
        <div>
          <div className={TransferStyles.blockOne__title}>В ПУТИ</div>
          <div className={TransferStyles.blockOne__text}>{getTimeFromMins(duration)}</div>
        </div>
        <div>
          <div className={TransferStyles.blockOne__title}>{stops.length} ПЕРЕСАДКИ</div>
          <div className={TransferStyles.blockOne__text}>{stops.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};
export default TransferInfo;
