import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const styles ={
	heading:{
		fontWeight: 'bold'
	}
}

const Heading = (props) => {
	const {heading} = props
	return ( 
	<Box pb={3} pt={6}>
		<Typography
		align="center"
		variant="h5"
		component="h2"
		gutterBottom
		mt={0.5}
		pt={0}
		pb={1}
		sx={styles.heading}
		>{heading}
		</Typography>

		<Container 
		maxWidth='xs' 
		component="div"
		sx={{borderBottom: 2, width:'150px', height:0, color:'teal'}}
		></Container>

		<Container maxWidth='md'>
			<Typography
			align="center"
			variant='body1'
			mt={6}
			mb={6}
			pl={2}
			pr={2}>
			A web platform that enables and empowers you. <br/>
			Think of it as a more accurate, faster and streamlined approach to cashing up
			Think of a dashboard where you can view your tithes and your offerings and have it sent straight to your phone.<br/>
			With this platform you will always be on top of your orginations needs.
			</Typography>
		</Container>
		
		<Container 
		maxWidth='xs' 
		component="div"
		sx={{borderBottom: 2, border:'1px solid',width:'300px', height:0, color:'teal', marginTop:2}}
		></Container>
	</Box> 
	);
}
 
export default Heading;