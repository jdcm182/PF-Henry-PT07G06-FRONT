import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function handleChange(e) {
  //Funcion que setea el rango de productos a mostrar -por desarrollar-
  console.log(e)
}
export default function PaginationButtons({ totalPages }) {
  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} onChange={(event, page) => handleChange(page)} showFirstButton showLastButton />
    </Stack>
  );
}
