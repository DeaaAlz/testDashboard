import '../Login/Login.css'
import '../Login/util.css'
import '../Login/js/main'
import image from '../Login/images/login.svg'
import { Link } from 'react-router-dom'

import { showDiv } from '../AllFunctions'
function login(){
    return(
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
                <img src={image} alt="IMG" />
				</div>
				<form class="login100-form validate-form" method='post'>
					<span class="login100-form-title">
						Login Page
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email" />
						<span class="focus-input100"></span>
						
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="password" placeholder="Password" />
						<span class="focus-input100"></span>
						
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type='submit'>
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							 Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<Link class="txt2" to="/register">
							Create your Account
						</Link>
					</div>
					<div id='setting-div'></div>
				</form>
			</div>
		</div>
	</div>
	
	
        
    )
}

export default login