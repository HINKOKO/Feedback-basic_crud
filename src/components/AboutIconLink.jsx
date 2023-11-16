import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// using Link not with a 'a' tag , because causing a fucking refresh !!4
// keep your <a> stuff when you wanna go on other website externals to your stuff !!
function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
		{/* classical stuff but look right after the params ! */}
      {/* <Link
        to={{
          pathname: '/about',
          search: '?sort=name',
          hash: '#helloabout',
        }}
      > */}
        {/* we passed query params, look the browser bar */}
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
