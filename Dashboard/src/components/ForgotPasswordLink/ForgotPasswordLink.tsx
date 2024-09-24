import { Link } from 'react-router-dom';

export function ForgotPasswordLink() {
  return (
    <Link
      to="/register"
      className="text-2xl text-gray-600 hover:underline hover:text-blue-600 transition-colors duration-300"
      aria-label="Forgot Password? Click here to register"
    >
      Zapomniałeś hasła?
    </Link>
  );
}