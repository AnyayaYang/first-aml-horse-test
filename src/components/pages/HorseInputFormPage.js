import HorseInputForm from '../HorseInputForm';
import { useNavigate } from 'react-router-dom';

const HorseInputFormPage = () => {
  const navigate = useNavigate();
  const submitData = (data) => {
    fetch('http://localhost:3016/horse', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      navigate('/');
    });
  };
  return <HorseInputForm action='Add' submitData={submitData} />;
};

export default HorseInputFormPage;
