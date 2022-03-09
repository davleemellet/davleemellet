import NavBar from './NavBar'
import Banner from './Banner'
import Container from '@mui/material/Container'


const Header = () => {

	return ( <>
	<NavBar 
	pages = {['Home ', 'About us', 'Contact us']}
	settings={['Profile', 'Account', 'Dashboard', 'Logout']}
	/>
	<Banner />
	
	<Container>
	 {/* Place Text here for the  */}
	</Container>

	</> );
}
 
export default Header;