import { ChangeEvent, useState } from 'react';

const useInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	};

	// const checkInputSearchBlur = useCallback(() => {
	//   setIsFocus(false);
	//   dispatch(productSearchValueChange(""));
	// }, [dispatch]);

	// const checkInputSearchFocus = () => {
	//   setIsFocus(true);
	// };

	return {
		// isFocus,
		value,
		handleChange,
		// checkInputSearchBlur,
		// checkInputSearchFocus,
	};
};
export default useInput;
