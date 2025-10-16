import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ca } from 'date-fns/locale'; // idioma català

function TaskDueDate({ dueDate, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ca}>
      <DatePicker
        label="Data límit"
        value={dueDate}
        onChange={onChange}
        slotProps={{ textField: { size: 'small' } }}
      />
    </LocalizationProvider>
  );
}

export default TaskDueDate;