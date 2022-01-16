import classes from './HorseInputForm.module.css';
import { useRef } from 'react';

const HorseInputForm = ({ action, submitData }) => {
  const nameInput = useRef();
  const foodInput = useRef();
  const heightInput = useRef();
  const weightInput = useRef();

  const addNewHorseData = (event) => {
    event.preventDefault();

    const newHorseData = {
      name: nameInput.current.value,
      profile: {
        favouriteFood: foodInput.current.value,
        physical: {
          height: Number(heightInput.current.value),
          weight: Number(weightInput.current.value),
        },
      },
    };

    submitData(newHorseData);
  };

  return (
    <form className={classes.form} onSubmit={addNewHorseData}>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' required id='name' ref={nameInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor='food'>Favourite Food</label>
        <input type='text' id='food' ref={foodInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor='height'>Height (kg)</label>
        <input type='text' id='height' ref={heightInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor='weight'>Weight (kg)</label>
        <input type='text' id='weight' ref={weightInput} />
      </div>
      <div className={classes.actions}>
        <button>{action}</button>
      </div>
    </form>
  );
};

export default HorseInputForm;
