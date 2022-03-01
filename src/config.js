export default {
  oidc: {
    clientId: '0oaeragqu8rwzUQTi696',
    issuer: 'https://archfaktor.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    useInteractionCodeFlow: true
  }
}