import { Link } from 'react-router-dom';

const Footer = () => (
  <>
    <footer className="bg-secondary text-white text-center py-3 mt-5 sticky-footer">
      <div className="container">
        <p>
          <Link to="/pp" className="text-black">
            Privacy Policy
          </Link>
          {' '}
          |
          <Link to="/tc" className="text-black">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  </>
);

export default Footer;
