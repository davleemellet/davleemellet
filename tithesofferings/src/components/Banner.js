import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from '../Images/anna-earl-seLgmwSCnJg-unsplash.jpg'; // Import using relative path
import Image2 from '../Images/milada-vigerova-iQWvVYMtv1k-unsplash.jpg';
import Image3 from '../Images/sixteen-miles-out-bIwFwR2fSsA-unsplash.jpg';
import Image4 from '../Images/HeaderBg.png';

const makeStyles ={
	heroImage:{
		// backgroundColor:'rgba(255,255,255,0.9)',
		// backgroundImage : 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), url("public/anna-earl-seLgmwSCnJg-unsplash.jpg")',
		height:'40%',
		backgroundPosition:'center',
		backgroundRepeat :'no-repeat',
		backgroundSize:'cover',
		position:'relative',
		borderRadius: 5,
		// border:'4px double rgba(0,0,0,0.2)',
		top:'20%',
		
		margin:"0 auto",
		
		// left:'50%',
		// transform:'translateX(-50%)'
	},
		paperContainer: {
			backgroundImage : ` linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(${Image})`,
			// backgroundImage : `url(${Image})`,
			height:'50vh',
			backgroundSize:'cover',
			backgroundRepeat :'no-repeat',
			backgroundPosition:'center',
			position:'relative',

		}
}

const Banner = () => {
	return ( 
	<>
	<Paper sx={makeStyles.paperContainer}>
		  <Container  
			maxWidth='xl'
			color='primary'
			sx={makeStyles.heroImage}>
				<Typography
				variant='h2'
				align='left'
				color='white'
				gutterBottom>Welcome</Typography>
				<Typography
				variant='h4'
				align='left'
				color='white'
				>Lets Make Cash Tithing Something Easier</Typography>
				<Typography
				variant='h4'
				align='left'
				color='white'
				>From the Church to the Bank</Typography>
			</Container>
	</Paper>
		{/* <Container maxWidth='xl' sx={makeStyles.heroImage}>
			<Container maxWidth='lg'>
				
				</Container>
		</Container> */}
	</>
	 );
}
 
export default Banner;