// Sample React component (src/components/SomeComponent.js)

import logo from '../../assets/icons/logo.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import userIcon from '../../assets/icons/user-icon.png';
import background from '../../assets/images/background.jpg';
import profilePicture from '../../assets/images/profile-picture.png';
const SomeComponent = () => {
  return (
    <div>
      <header>
        {/* Example usage of SVG icon and PNG image from the assets */}
        <img src={LogoIcon} alt="Logo" />
        <div>
          <img src={UserProfileIcon} alt="User" />
          <p>Welcome, username!</p>
        </div>
      </header>
      <main style={{ backgroundImage: `url(${BackgroundImage})` }}>
        {/* Content */}
      </main>
      <aside>
        <img src={ProfilePicture} alt="Profile" />
        <button>
          Click Me <img src={ArrowRightIcon} alt="->" />
        </button>
      </aside>
    </div>
  );
};

export default SomeComponent;
