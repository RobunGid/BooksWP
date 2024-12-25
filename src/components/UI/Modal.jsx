import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = ({ onClose }) => {
	return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalWindow = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

const portalElement = document.querySelector('#overlays');

export const Modal = ({ children, onClose }) => {
	return (
		<>
			{createPortal(<Backdrop onClose={onClose} />, portalElement)}
			{createPortal(<ModalWindow>{children}</ModalWindow>, portalElement)}
		</>
	);
};
