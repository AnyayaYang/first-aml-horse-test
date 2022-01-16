import TableHeader from './TableComponents/TableHeader';
import TableBody from './TableComponents/TableBody';
import TableModal from './TableComponents/TableModal';
import TableFooter from './TableComponents/TableFooter';

import { useCallback, useState } from 'react';

const useSwitch = (initial = false) => {
  const [status, setStatus] = useState(initial);
  const switchOn = useCallback(() => {
    setStatus(true);
  }, []);
  const switchOff = useCallback(() => {
    setStatus(false);
  }, []);

  return [status, switchOn, switchOff];
};

const HorsesList = ({ horseData }) => {
  const [showModal, openModal, onCloseModal] = useSwitch(false);
  const [modalData, setModalData] = useState({});

  return (
    <>
      <table
        className='bp3-html-table .modifier'
        style={{ width: '90%', margin: 'auto' }}
      >
        <TableHeader />
        <TableBody
          horseData={horseData}
          openModal={openModal}
          setModalData={setModalData}
        />
        <TableFooter />
      </table>
      <TableModal
        modalData={modalData}
        onCloseModal={onCloseModal}
        showModal={showModal}
      />
    </>
  );
};

export default HorsesList;
