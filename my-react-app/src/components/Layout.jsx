import { Container, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;