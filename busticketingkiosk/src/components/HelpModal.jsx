// HelpModal.jsx
import React, { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TransitOfficeImage from '../assets/images/CalgaryTransitCustomerServiceOffice.jpg';
import { useTranslation } from 'react-i18next';  

const HelpModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation();

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow} className='navbar-buttons'>
        {t('Help')}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t('Calgary Transit Office')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={TransitOfficeImage} thumbnail fluid className="mb-3" alt='Calgary Transit Customer Service Office'/>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /><strong>{t('Address:')}</strong> 125 7 Ave SE, Calgary, AB T2G 5R2</p>
          <p><FontAwesomeIcon icon={faPhone} className="mr-2" /><strong>{t('Phone:')}</strong> +1 (403) 262-1000</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" /><strong>{t('Email:')}</strong> support@calgarytransit.ca</p>
          <hr />
          <p className="text-danger">{t('If you\'re facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t('Close')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HelpModal;
