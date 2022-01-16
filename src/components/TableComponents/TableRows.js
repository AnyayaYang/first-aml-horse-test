import classes from './TableRows.module.css';

const TableRows = ({
  id,
  name,
  profile: {
    favouriteFood,
    physical: { height, weight },
  },
  openModal,
  setModalData,
}) => {
  const viewHorseInModal = () => {
    const horseModalData = {
      id,
      name,
      favouriteFood,
      height,
      weight,
    };

    openModal();
    setModalData(horseModalData);
  };

  return (
    <tr className={classes.actions} onClick={viewHorseInModal}>
      <td>{name}</td>
      <td>{favouriteFood}</td>
      <td>{height ? height : null}</td>
      <td>{weight ? weight : null}</td>
    </tr>
  );
};

export default TableRows;
