import React from 'react';

import TransferInfo from '../TransferInfo/TransferInfo';

import CardStyles from './CardTicket.module.scss';

const CardTicket = ({ carrier, price, segments }) => {
  return (
    <div className={CardStyles.container}>
      <div className={CardStyles.header}>
        <p>{price} Р</p>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} width="110" height="36" alt="logo" />
      </div>
      {segments.map((element) => (
        <TransferInfo key={`${element.date}${element.duration}`} {...element} />
      ))}
    </div>
  );
};
export default CardTicket;
