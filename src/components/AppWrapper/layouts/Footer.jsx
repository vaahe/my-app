import { Box, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
    return (
        <Box textAlign={'center'} sx={{ backgroundColor: 'primary.dark', }}>
            <Typography variant='h2' color="common.white">TODO LIST</Typography>
        </Box>
    )
}