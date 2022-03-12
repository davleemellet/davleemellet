import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Heading from './Heading'; 
import HomeHeadlines from './HomeHeadlines'

const headings = 'So what is tithes and offerings?'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomeContainer = () => {
	return ( 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
				
				{/* This is the Heading component */}

				<Grid item xs={12} md={4} lg={12}>
          {/* <Item>xs=4</Item> */}
					<Paper elevation={0}
					sx={{backgroundColor:'white'}} >
						<Heading
						heading = {headings} />
					</Paper>
        </Grid>
				
				{/* This is for the 3 headlines */}
					{/* HEADLINE 1 */}

        <Grid item xs={12} md={4} lg={4}>
				<HomeHeadlines/>
          {/* <Item >xs=4</Item> */}
        </Grid>

				{/* HEADLINE 2 */}

        <Grid item xs={12} md={4} lg={4}>
          {/* <Item>xs=4</Item> */}
					{/* <Paper> */}
						<HomeHeadlines/>
						{/* </Paper> */}
        </Grid>

				{/* HEADLINE 3 */}

				<Grid item xs={12} md={4} lg={4}>
          {/* <Item>xs=4</Item> */}
					{/* <Paper> */}
						<HomeHeadlines/>
						{/* </Paper> */}
        </Grid>

				<Grid item xs={12} md={8} lg={8}>
					<Item sx={{height:'40vh'}}>Content Headline</Item>
				</Grid>

				<Grid item xs={12} md={4} lg={4}>
					<Item sx={{height:'40vh'}}>Picture goes here</Item>
				</Grid>

				<Grid item xs={12} md={4} lg={4}>
					<Item sx={{height:'40vh'}}>Picture goes here</Item>
				</Grid>

				<Grid item xs={12} md={8} lg={8}>
					<Item sx={{height:'40vh'}}>Content Headline</Item>
				</Grid>

				<Grid item xs={12}>
					<Item sx={{height:'10vh'}}>Footer</Item>	
				</Grid>
      </Grid>
    </Box>
	);
}
 
export default HomeContainer;