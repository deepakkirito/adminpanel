import classes from '../Styles/LoginPage.module.scss';
import Navbar from './Sub Components/Navbar.jsx'
import LoginValidation from './Sub Components/LoginValidation.jsx'
import Footer from './Sub Components/Footer.jsx'

function Login() {
  return (
    <div className={classes.Login}>

      <Navbar />
      <LoginValidation />
      <Footer />
     
    </div>
  );
}

export default Login;
