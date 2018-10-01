// Import modules
import express from 'express';
import {
  checkSignUpInput, validateEmail, userInDatabase,
  checkSignInInput, isLoggedIn, checkInput, oneItemInDatabase,
} from '../helpers/index';
import { signUp, signIn, newOrder } from '../controllers/index';

// Express router
const router = express.Router();

/* If the user makes a POST request to the /auth/signup route, validateEmail, userInDatabase,
hand control over to the signUp controller */
router.post('/auth/signup', checkSignUpInput, validateEmail, userInDatabase, signUp.register);

/* If the user makes a POST request to the /auth/login route, checkSignIninput,
validateEmail, hand control over to the signIn controller */
router.post('/auth/login', checkSignInInput, validateEmail, signIn.login);

/* If the user makes a POST request to the /orders route, checkInput, validateEmail,
oneItemInDatabase, hand control over to the newOrder controller */
router.post('/orders', isLoggedIn, checkInput, oneItemInDatabase, newOrder.placeOrder);


// Export router
export default router;
