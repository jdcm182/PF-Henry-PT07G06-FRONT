import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButtons({page, setPage, maxPage, products }) {
  function handleChange(page) {
    setPage(page)
  }
  
  React.useEffect(() => {
    setPage(1)
  },[products])

  return (
      <Pagination count={maxPage} onChange={(event, page) => handleChange(page)} defaultPage={1} page={page} showFirstButton showLastButton />
  );
}
