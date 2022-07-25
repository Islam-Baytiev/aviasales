import { useDispatch, useSelector } from 'react-redux';

import { setSorting, setIsPressBtn } from '../../redux/slices/filtersData';

import SortingStyles from './Sorting.module.scss';

const Sorting = () => {
  const dispatch = useDispatch();
  const { isPressBtn } = useSelector((state) => state.filtersData);
  const hundleClick = (event) => {
    dispatch(setSorting(event.target.name));
    if (event.target.name === 'price') {
      dispatch(
        setIsPressBtn({
          btnPrice: true,
          btnFast: false,
          btnOptimal: false,
        })
      );
    }
    if (event.target.name === 'fast') {
      dispatch(
        setIsPressBtn({
          btnPrice: false,
          btnFast: true,
          btnOptimal: false,
        })
      );
    }
    if (event.target.name === 'optimal') {
      dispatch(
        setIsPressBtn({
          btnPrice: false,
          btnFast: false,
          btnOptimal: true,
        })
      );
    }
  };
  return (
    <div className={SortingStyles.block}>
      <button
        onClick={hundleClick}
        type="button"
        name="price"
        className={`${SortingStyles.btn1} ${isPressBtn.btnPrice ? `${SortingStyles.selected}` : ''}`}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        onClick={hundleClick}
        type="button"
        name="fast"
        className={`${SortingStyles.btn2} ${isPressBtn.btnFast ? `${SortingStyles.selected}` : ''}`}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        onClick={hundleClick}
        type="button"
        name="optimal"
        className={`${SortingStyles.btn3} ${isPressBtn.btnOptimal ? `${SortingStyles.selected}` : ''}`}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};
export default Sorting;
