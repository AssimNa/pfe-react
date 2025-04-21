import { 
  Box, 
  Grid, 
  Typography, 
  Paper, 
  Stack,
  LinearProgress
} from '@mui/material';
import {
  AttachMoney as AttachMoneyIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';

const StatCard = ({ title, value, icon, progress }) => (
  <Paper sx={{ p: 3, borderRadius: 3 }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Typography color="text.secondary" variant="body2">
          {title}
        </Typography>
        <Typography variant="h4">{value}</Typography>
      </Box>
      <Box sx={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: 'primary.light',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'primary.main'
      }}>
        {icon}
      </Box>
    </Stack>
    <LinearProgress 
      variant="determinate" 
      value={progress} 
      sx={{ mt: 2, height: 6, borderRadius: 3 }} 
    />
  </Paper>
);

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome to this app
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Here's what's happening in our company
      </Typography>
      
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Machine" 
            value="43" 
            icon=""
            progress={100} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Customers" 
            value="1,234" 
            icon={<PeopleIcon />} 
            progress={55} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Orders" 
            value="324" 
            icon={<ShoppingCartIcon />} 
            progress={30} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Historique" 
            value="+12%" 
            icon={<TrendingUpIcon />} 
            progress={90} 
          />
        </Grid>
      </Grid>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" mb={2}>Etat de la machine</Typography>
            {/* Chart would go here */}
            <Box sx={{ height: 300, bgcolor: 'action.hover', borderRadius: 2 }} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" mb={2}>Interventions</Typography>
            {/* Activity list would go here */}
            <Box sx={{ height: 300, bgcolor: 'action.hover', borderRadius: 2 }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}