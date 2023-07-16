import { useTranslation } from 'react-i18next';
import notFoundImage from '../assets/notFound.jpg';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <img alt="Страница не найдена" className="img-fluid h-25" src={notFoundImage} />
      <h1 className="h4 text-muted">{t('notFound')}</h1>
      <p className="text-muted">
        {t('youCanGo')}
        {' '}
        <a href="/login">{t('toHomePage')}</a>
      </p>
    </div>
  );
};

export default NotFound;