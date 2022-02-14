import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'


const oktaSignIn = new OktaSignIn({
  baseUrl: 'https://archfaktor.okta.com/',
  clientId: '0oagjv54wXEiApf2Y696',
  redirectUri: 'http://localhost:8080/login/callback',
  authParams: {
    pkce: true,
    issuer: 'https://archfaktor.okta.com/oauth2/default',
    display: 'page',
    scopes: ['openid', 'profile', 'email', 'groups', 'address', 'locale'],
  },
    language: 'en', // Try: [fr, de, es, ja, zh-CN
    // add registration
    features: { registration: true },
    logo: 'https://i.ibb.co/NjtRF0p/archer-image-1.png'
});

const oktaAuth = new OktaAuth({
  issuer: 'https://archfaktor.okta.com//oauth2/default',
  clientId: '0oagjv54wXEiApf2Y696',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email', 'groups', 'address', 'locale']
})

export { oktaAuth, oktaSignIn };
