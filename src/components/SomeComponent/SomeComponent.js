// Sample React component (src/components/SomeComponent.js)
import LogoIcon from '../../assets/icons/logo.svg'; // Fix import paths
import ArrowRightIcon from '../../assets/icons/arrow-right.svg'; // Fix import paths
import UserProfileIcon from '../../assets/icons/user-icon.png'; // Fix import paths
import BackgroundImage from '../../assets/images/background.jpg'; // Fix import paths
import ProfilePicture from '../../assets/images/profile-picture.png'; // Fix import paths

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
