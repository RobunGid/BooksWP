import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = () => {
	return <div className={styles.backdrop}></div>;
};

const ModalWindow = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

const portalElement = document.querySelector('#overlays');

export const Modal = ({ children }) => {
	return (
		<>
			{createPortal(<Backdrop />, portalElement)}
			{createPortal(<ModalWindow>{children}</ModalWindow>, portalElement)}
		</>
	);
};
