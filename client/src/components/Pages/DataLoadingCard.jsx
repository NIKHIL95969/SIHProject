import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        bgcolor: '#cfcfcf',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 2
      }}
    >
      <Skeleton
        sx={{ bgcolor: '#cfcfcf' }}
        variant="rectangular"
        width={210}
        height={258}
      />
    </Box>
  );
}