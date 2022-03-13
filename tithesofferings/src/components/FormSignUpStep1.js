/* eslint-disable default-case */
import React, { Component } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

import LockOpenIcon from '@mui/icons-material/LockOpen';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

const styles = {
	paper:{
		paddingBottom:5,
		paddingTop:5
	},
	mainContainer:{
		width:100, 
		height:100, 
		borderRadius:60, 
		border:'3px solid'
	},
	icon:{
		fontSize: 60, 
		margin:'0 auto'
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
		if(this.props.values.firstname == ''){
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
		const {title, helpers, labels, handleChange, values, icon} = this.props;
		const {firstnameError, firstnameHelper, lastnameError, lastnameHelper ,organizationError, organizationHelper} = this.state;
	return (
		<form noValidate>
			<Box maxWidth={'sm'} m={'0 auto'} mt={'5%'} >
				<Paper elevation={8} sx={styles.paper}>
					<Container color = "primary" align="center" component='div' sx={styles.mainContainer}>
					<LockOpenIcon sx={styles.icon} color='error'mt={1}/>
					</Container>

					<Typography variant='h4' component='h1' align='center' gutterBottom sx={styles.mainTitle}>
						{title.mainTitle}
					</Typography>

					<Container component='hr' sx={styles.hr}/>
			
					<Typography variant='h5' component='h2' align='center' mt={3} >
							{title.Subtitle}
					</Typography>
					<Container component='hr' color='primary'sx={{border:'2px solid teal', width:'40%', marginBottom:5, marginTop:1}}/>

					<Container maxWidth='md' align='left' sx={{display:{sm:'block', md:'flex'}}}>
						<TextField
						label={labels.firstname}
						onChange={handleChange('firstname')}
						error={firstnameError}
						helperText={firstnameHelper}
						fullWidth
						required
						/>
						<TextField 
						label={labels.lastname}
						onChange={handleChange('lastname')}
						error={lastnameError}
						helperText={lastnameHelper}
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