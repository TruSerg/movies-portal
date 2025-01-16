import { useState } from 'react';
import dayjs from 'dayjs';
import { DateValue } from '@mantine/dates';

const useYearPickerInput = () => {
	const [yearPickerValue, setYearPickerValue] = useState<number>();

	const handleYearPickerValueChange = (value: DateValue) => {
		const year = dayjs(value).year();

		setYearPickerValue(year);
	};

	return { yearPickerValue, handleYearPickerValueChange };
};

export default useYearPickerInput;
