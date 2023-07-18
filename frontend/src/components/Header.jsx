import { useContext, createContext } from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const AuthButton = () => {
  const AuthContext = createContext({});
  const auth = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    auth.loggedIn
      ? <Button onClick={auth.logOut}>{t('exitButton')}</Button>
      : null
  );
};

const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to={'/login'}>{t('chatLogo')}</Navbar.Brand>
        <AuthButton />
      </Container>
    </Navbar>
  );
};

export default Header;