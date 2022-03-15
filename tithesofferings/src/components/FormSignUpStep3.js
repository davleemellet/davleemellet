import React, { Component } from 'react'
import Stepper from '../components/Stepper'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

import LockOpenIcon from '@mui/icons-material/LockOpen';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

const DesktopStyles = {
	paper:{
		paddingBottom:5,
		paddingTop:5,
		borderRadius:10,
		border:'10px solid rgba(0,0,0,0.07)'
	},
	mainContainer:{
		width:100, 
		height:100, 
		borderRadius:60, 
		border:'3px solid'
	},
	icon:{
		fontSize: 60, 
		margin:'0 auto',
		positiom:'relative',
		transform:'translate(-10%, 20%)'
		// transform:'translateY(20%)'

	},
	mainTitle:{
		fontWeight:700, 
		marginTop:3
	},
	hr:{
		marginTop:2,
		marginBottom:4
	}
}

const MobileStyles = {
	paper:{
		paddingBottom:0,
		paddingTop:5,
		borderRadius:0
	},
	mainContainer:{
		width:100, 
		height:100, 
		borderRadius:60, 
		border:'3px solid'
	},
	icon:{
		fontSize: 60, 
		margin:'0 auto',
		positiom:'relative',
		transform:'translate(0%, 25%)'
		// transform:'translateY(20%)'

	},
	mainTitle:{
		fontWeight:700, 
		marginTop:3
	},
	hr:{
		marginTop:2,
		marginBottom:4
	}
	}


export class FormSignUpStep3 extends Component {

	state={
		usernameError : false,
		passwordError : false,
		confirmPasswordError : false,
		usernameHelper : '',
		passwordHelper : '',
		confirmPasswordHelper : ''
	}
	
	continue=e=>{
		e.preventDefault();

		if(this.props.values.username  !== '' 
			&& this.props.values.password !== ''
			&& this.props.values.confirmPassword !== ''){
			this.props.nextStep();
		}
		if(this.props.values.username === ''){
			this.setState({usernameError:true});
			this.setState({usernameHelper:`${this.props.helpers.usernameError}`})
		}
		if(this.props.values.password === ''){
			this.setState({passwordError:true});
			this.setState({passwordHelper:`${this.props.helpers.passwordError}`})
		}
		if(this.props.values.confirmPassword === ''){
			this.setState({confirmPasswordError:true});
			this.setState({confirmPasswordHelper:`${this.props.helpers.confirmPasswordError}`})
		}
	}
	
  render() {
	const {title, helpers, labels, handleChange, values} = this.props;
	const {usernameError, usernameHelper, passwordError, passwordHelper ,confirmPasswordError, confirmPasswordHelper} = this.state;


	return (
		<form noValidate>
		{/*
				THIS IS THE MOBILE VIEW
		*/}

			<Box maxWidth={'sm'} m={'0 auto'} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
				<Paper elevation={0} sx={MobileStyles.paper}>
					<Container color = 'error' align="center" component='div' sx={MobileStyles.mainContainer}>
					<LockOpenIcon sx={MobileStyles.icon} color='error'mt={1}/>
					</Container>

					<Typography variant='h3' component='h1' align='center' gutterBottom sx={MobileStyles.mainTitle}>
						{title.mainTitle}
					</Typography>

					<Container component='hr' sx={MobileStyles.hr}/>
					<Stepper 
					 steps={['Personal Details','Contact Details','Login Details']}
			 			step ={2}/>
					<Container component='hr' sx={MobileStyles.hr}/>

					<Container component='div' maxWidth='md'>
					<Typography variant='h6' component='h2' align='center' mt={3} >
							{title.Subtitle}
					</Typography>
					</Container>

					<Container component='hr' color='primary'sx={{border:'2px solid teal', width:'40%', marginBottom:5, marginTop:1}}/>

					<Container maxWidth='md' align='left' sx={{display:{sm:'block', md:'flex'}}}>
						<TextField
						label={labels.username}
						onChange={handleChange('username')}
						error={usernameError}
						helperText={usernameHelper}
						value={values.username}
						fullWidth
						required
						/>
					</Container>

					<Container maxWidth='md' align='left'>
						<TextField 
						label={labels.password}
						onChange={handleChange('password')}
						error={passwordError}
						helperText={passwordHelper}
						sx={{marginTop:3}}
						value={values.password}
						fullWidth
						required
						/>
					</Container>

					<Container maxWidth={'sm'}>
						<TextField 
						label={labels.confirmPassword}
						onChange={handleChange('confirmPassword')}
						error={confirmPasswordError}
						helperText={confirmPasswordHelper}
						sx={{marginTop:3}}
						value={values.confirmPassword}
						fullWidth
						required
						/>
					</Container>

					<Container align='right' sx={{marginTop:5}}>
						<Button
						onClick={this.continue}
						><h6>Next</h6></Button>
					</Container>

				</Paper>
			</Box>

		{/*
				THIS IS THE DESKTOP VIEW
		*/}

			<Box maxWidth={'sm'} m={'0 auto'} mt={'5%'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
				<Paper elevation={8} sx={DesktopStyles.paper}>
					<Container color = "primary" align="center" component='div' sx={DesktopStyles.mainContainer}>
					<LockOpenIcon sx={DesktopStyles.icon} color='error'mt={1}/>
					</Container>

					<Typography variant='h3' component='h1' align='center' gutterBottom sx={DesktopStyles.mainTitle}>
						{title.mainTitle}
					</Typography>

					<Container component='hr' sx={MobileStyles.hr}/>
					<Stepper 
					 steps={['Personal Details','Contact Details','Login Details']}
			 			step ={2}/>
					<Container component='hr' sx={MobileStyles.hr}/>

					<Typography variant='h6' component='h2' align='center' mt={3} >
							{title.Subtitle}
					</Typography>
					<Container component='hr' color='primary'sx={{border:'2px solid teal', width:'40%', marginBottom:5, marginTop:1}}/>

					<Container maxWidth='md' align='left' sx={{display:{sm:'block', md:'flex'}}}>
						<TextField
						label={labels.username}
						onChange={handleChange('username')}
						error={usernameError}
						helperText={usernameHelper}
						value={values.username}
						fullWidth
						required
						/>
						<TextField 
						label={labels.password}
						onChange={handleChange('password')}
						error={passwordError}
						helperText={passwordHelper}
						value={values.password}
						fullWidth
						required
						/>
					</Container>

					<Container maxWidth={'sm'}>
						<TextField 
						label={labels.confirmPassword}
						onChange={handleChange('confirmPassword')}
						error={confirmPasswordError}
						helperText={confirmPasswordHelper}
						sx={{marginTop:3}}
						value={values.confirmPassord}
						fullWidth
						required
						/>
					</Container>

					<Container align='right' sx={{marginTop:5}}>
						<Button
						onClick={this.continue}
						><h6>Next</h6></Button>
					</Container>

				</Paper>
			</Box>
		</form>

	)
  }
}

export default FormSignUpStep3