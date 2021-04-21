import { ImMenu } from 'react-icons/im';

import Logo from '../../images/uber-logo.png';
import LogoText from '../../images/uber-logo-text.png';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <a className={styles.logos} href="/">
          <img className={styles.logo} src={Logo} alt="uber-logo" />
          <img
            className={styles.logoText}
            src={LogoText}
            alt="uber-logo-text"
          />
        </a>
        <ImMenu className={styles.menuButton} />
      </div>
    </header>
  );
};

export default Header;
