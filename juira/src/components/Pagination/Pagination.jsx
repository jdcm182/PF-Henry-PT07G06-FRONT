import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Pagination({ totalPages }) {
  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} onChange={ e => handleChange(e)} showFirstButton showLastButton />
    </Stack>
  );
}
