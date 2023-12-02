import Modal from 'react-bootstrap/Modal';
import './ModalStyle.css';
import { Link } from 'react-router-dom';

function ModalFAQs(props) {

  const handleClose = () => props.onHide();

  return (
    
      <Modal
        size="lg"
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="preguntas-frecuentes-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="preguntas-frecuentes-modal">
            <h2>Preguntas frecuentes</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container text-center'>
            <div className='faq-section'>
              <h3 className='faq-title'>
                Vacaciones de verano
              </h3>
              <p>
                Desde el jueves 7 de Diciembre hasta el viernes 15 de marzo la Asociación permanecerá cerrada al público.
              </p>
            </div>
            <div className='faq-section'>
              <h3 className='faq-title'>
                Examenes Internacionales
              </h3>
              <p>
                Las inscripciones al JLPT N7-N6 se encuentran cerradas.
              </p>
            </div>
            <Link to="/ACAJA/faqs">
              <button className='btn btn-primary'
                onClick={handleClose}>ver más</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    
  );
}

export default ModalFAQs;