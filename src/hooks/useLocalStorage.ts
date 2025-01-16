import { useState, useEffect } from 'react';

const getStorageValue = (key: string, defaultValue: any) => {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem(key) as string;
		const initial = JSON.parse(saved);
		return initial ?? defaultValue;
	}
};

const useLocalStorage = (key: string, defaultValue: any) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;
