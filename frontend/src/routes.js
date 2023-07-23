const apiPath = '/api/v1';

export default {
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  signUpPagePath: () => '/signup',

  loginPath: () => [apiPath, 'login'].join('/'),
};