import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import AllHorses from './components/pages/AllHorses';
import { Route, Routes } from 'react-router-dom';
import HorseInputFormPage from './components/pages/HorseInputFormPage';
import { Card, Elevation } from '@blueprintjs/core';

function App() {
  return (
    <Card interactive={true} elevation={Elevation.TWO}>
      <Routes>
        <Route path='/' element={<AllHorses />} />
        <Route path='/input-form' element={<HorseInputFormPage />} />
      </Routes>
    </Card>
  );
}

export default App;
