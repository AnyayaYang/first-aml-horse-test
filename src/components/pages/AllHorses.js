import { useState, useEffect } from 'react';
import HorsesList from '../HorsesList';

const AllHorses = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [horseData, setHorseData] = useState([]);

  useEffect(() => {
    setIsPageLoading(true);
    fetch('http://localhost:3016/horse')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsPageLoading(false);
        // we only want to show up to 10 horses
        setHorseData(data.length > 10 ? data.slice(0, 10) : data);
      });
  }, []);

  let content;

  if (isPageLoading) {
    content = (
      <div>
        <p>Loading horses</p>
      </div>
    );
  } else {
    content = <HorsesList horseData={horseData} />;
  }

  return <div>{content}</div>;
};

export default AllHorses;
