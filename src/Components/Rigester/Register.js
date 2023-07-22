import '../Rigester/css/style.css'
import '../Rigester/js/main'
import image2 from './images/image-2.png'
import { showDiv } from '../AllFunctions'

function Register(){
    return(
        <div class="wrapper">
			<div class="inner">          
				<form action="" method='post'>
					<h3 className='myh3'>New Account?</h3>
					<div class="form-holder">
						<span class="lnr lnr-user"></span>
						<input name='usename' type="text" class="form-control myinput" placeholder="Full Name" required />
					</div>
					<div class="form-holder">
						<span class="lnr lnr-envelope"></span>
						<input name='email' type="text" class="form-control myinput" placeholder="Mail" required />
					</div>
					<div class="form-holder">
						<span class="lnr lnr-calendar-full"></span>
						<input name='userBirthDate' type="text" class="form-control myinput" placeholder="Your Birth Date As 1990/09/01" required />
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<input name='password' type="password" class="form-control myinput" placeholder="Password" required />
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<input type="password" class="form-control myinput" placeholder="Confirm Password" required />
					</div>
					<button className='btnRegister' type='submit'>
						<span>Register</span>
					</button>
				</form>
				<img src={image2} alt="IMG" class="image-2"/>
			</div>
			<div id='setting-div'></div>
		</div>
    )
}

export default Register