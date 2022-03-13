import NavBar from '../components/NavBar'
import SignUpForm from '../components/SignUpForm';


const SignUp = () => {
	return ( <>
		<NavBar
		pages = {['Home ', 'About us', 'Contact us']}
		settings={['Login','Sign-Up']}
		/>
		<SignUpForm/>
	</>
	);
}
 
export default SignUp; 