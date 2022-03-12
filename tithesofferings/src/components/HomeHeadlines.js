import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const HomeHeadlines = () => {
	return ( 
	<Box pb={5}> 
		<Paper pb={0}>
			<div style={{backgroundColor:'grey', width:'125px', height:'125px', borderRadius:'60px', margin:'0 auto', marginTop:'20px'}}></div>
			<Typography
			align="center"
			variant="h6" 
			pt={2}
			sx={{fontWeight:'bold'}}>
			Headline
			</Typography>
			<Container maxWidth='xs' pb={5}>
				<Typography
				variant='body'
				align="center"
				sx={{marginTop:2, paddingLeft:2, paddingRight:2}}>
				lorem ipsum dolor sit am lorem ipsum dolor sit amlorem ipsum dolor
				lorem ipsum dolor sit amlorem ipsum dolor sit amlorem ipsum dolor sit am 
				lorem ipsum dolor sit amlorem ipsum dolor sit am
				<br/>
				</Typography>
			</Container>

		</Paper>
	</Box>
	);
}
 
export default HomeHeadlines;