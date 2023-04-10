import React from 'react';
import { Box, Typography } from '@mui/material';

export const Header = () => {
    return (
        <Box textAlign={'center'} sx={{ backgroundColor: 'primary.dark', }}>
            <Typography variant='h2' color="common.white">FOOTER</Typography>
        </Box>
    )
}