import { useState } from 'react';

const useModal = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	return { isModalOpen, handleModalOpen, handleModalClose };
};

export default useModal;
