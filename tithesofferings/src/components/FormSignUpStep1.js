/* eslint-disable default-case */
import React, { Component } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Stepper from '../components/Stepper'

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
		marginBottom:4,
		border:'1px solid rgba(0,0,0,0.9)'
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

	
export class FormSignUpStep1 extends Component {

	state={
		firstnameError : false,
		lastnameError : false,
		organizationError : false,
		firstnameHelper : '',
		lastnameHelper : '',
		organizationHelper : ''
	}
	
	continue=e=>{
		e.preventDefault();

		if(this.props.values.firstname  !== '' 
			&& this.props.values.lastname !== ''
			&& this.props.values.organization !== ''){
			this.props.nextStep();
		}
		if(this.props.values.firstname === ''){
			this.setState({firstnameError:true});
			this.setState({firstnameHelper:`${this.props.helpers.firstnameError}`})
		}
		if(this.props.values.lastname === ''){
			this.setState({lastnameError:true});
			this.setState({lastnameHelper:`${this.props.helpers.lastnameError}`})
		}
		if(this.props.values.organization === ''){
			this.setState({organizationError:true});
			this.setState({organizationHelper:`${this.props.helpers.organizationError}`})
		}
	}

  render() {
		const {title, helpers, labels, handleChange, values} = this.props;
		const {firstnameError, firstnameHelper, lastnameError, lastnameHelper ,organizationError, organizationHelper} = this.state;
	return (
		<form noValidate>
			{/*
				THIS IS THE MOBILE VIEW
		*/}

			<Box maxWidth={'md'} m={'0 auto'} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
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
			 			step ={0}/>
					<Container component='hr' sx={MobileStyles.hr}/>

					<Container component='div' maxWidth='md'>
					<Typography variant='h6' component='h2' align='center' mt={3} >
							{title.Subtitle}
					</Typography>
					</Container>

					<Container component='hr' color='primary'sx={{border:'2px solid teal', width:'40%', marginBottom:5, marginTop:1}}/>

					<Container maxWidth='md' align='left' sx={{display:{sm:'block', md:'flex'}}}>
						<TextField
						label={labels.firstname}
						onChange={handleChange('firstname')}
						error={firstnameError}
						helperText={firstnameHelper}
						value ={values.firstname}
						fullWidth
						required
						/>
					</Container>

					<Container maxWidth='md' align='left'>
						<TextField 
						label={labels.lastname}
						onChange={handleChange('lastname')}
						error={lastnameError}
						helperText={lastnameHelper}
						sx={{marginTop:3}}
						value= {values.lastname}
						fullWidth
						required
						/>
					</Container>

					<Container maxWidth={'sm'}>
						<TextField 
						label={labels.organization}
						onChange={handleChange('organization')}
						error={organizationError}
						helperText={organizationHelper}
						sx={{marginTop:3}}
						value={values.organization}
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

					<Container component='hr' sx={DesktopStyles.hr}/>
					<Stepper 
					 steps={['Personal Details','Contact Details','Login Details']}
			 			step ={0}/>
					<Container component='hr' sx={DesktopStyles.hr}/>
					<Typography variant='h6' component='h2' align='center' mt={3} >
							{title.Subtitle}
					</Typography>
					<Container component='hr' color='primary'sx={{border:'2px solid teal', width:'40%', marginBottom:5, marginTop:1}}/>

					<Container maxWidth='md' align='left' sx={{display:{sm:'block', md:'flex'}}}>
						<TextField
						label={labels.firstname}
						onChange={handleChange('firstname')}
						error={firstnameError}
						helperText={firstnameHelper}
						value={values.firstname}
						fullWidth
						required
						/>
						<TextField 
						label={labels.lastname}
						onChange={handleChange('lastname')}
						error={lastnameError}
						helperText={lastnameHelper}
						values={values.lastname}
						fullWidth
						required
						/>
					</Container>

					<Container maxWidth={'sm'}>
						<TextField 
						label={labels.organization}
						onChange={handleChange('organization')}
						error={organizationError}
						helperText={organizationHelper}
						sx={{marginTop:3}}
						value={values.organization}
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

export default FormSignUpStep1