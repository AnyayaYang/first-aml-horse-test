import { Classes, Dialog } from '@blueprintjs/core';
import { useState } from 'react';
import HorseInputForm from '../HorseInputForm';

const CENTER_POSITION_STYLES = {
  top: '50%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
};

const TableModal = ({ showModal, onCloseModal, modalData }) => {
  const [viewHorse, setViewHorse] = useState(true);

  const submitData = (data) => {
    fetch(`http://localhost:3016/horse/${modalData.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      onCloseModal();
      window.location.reload();
    });
  };

  // state transition between viewing the horse or editing the horse. If viewHorse is true, that means
  // the user is viewing the horse. If viewHorse is set to false, that means the user is editing the horse

  let content;

  if (viewHorse) {
    content = (
      <ul>
        {Object.keys(modalData).map((key) => {
          return (
            <li style={{ listStyleType: 'none' }}>
              {`${key}: ${modalData[key]}`}
            </li>
          );
        })}
      </ul>
    );
  } else {
    content = <HorseInputForm action='Edit' submitData={submitData} />;
  }

  return (
    <Dialog
      style={{
        background: 'white',
        ...CENTER_POSITION_STYLES,
      }}
      title={modalData.name}
      isOpen={showModal}
      onClose={onCloseModal}
      canOutsideClickClose={true}
    >
      <div className={Classes.DIALOG_BODY}>
        {viewHorse && (
          <button onClick={() => setViewHorse(!viewHorse)}>Edit</button>
        )}
        {content}
      </div>
    </Dialog>
  );
};

export default TableModal;
