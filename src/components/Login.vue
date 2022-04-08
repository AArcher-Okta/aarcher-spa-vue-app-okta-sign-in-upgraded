<template>
  <div class="login">
    <div id="okta-signin-container"></div>
  </div>
</template>

<script>
import OktaSignIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'

import sampleConfig from '../config'

export default {
  name: 'Login',
  mounted: function () {
    this.$nextTick(function () {
      const { issuer, clientId, redirectUri, scopes, useInteractionCodeFlow } = sampleConfig.oidc
      this.widget = new OktaSignIn({
        clientId,
        redirectUri,
        logo: require('@/assets/logo.png'),
        i18n: {
          en: {
            'primaryauth.title': 'Sign in'
          }
        },
        language: 'en', // Try: [fr, de, es, ja, zh-CN
        idpDisplay: "SECONDARY",                        // Try: [PRIMARY, SECONDARY] Changes button display order
        // idps: [
        // //   {type: 'GOOGLE', id: '0oahsfreqPPz7V4Ax696'},
        // //   {type: 'MICROSOFT', id: '0oar3zs4grHhNS9Ih696'},
        // //   {type: 'DISCORD', id: '0oar2xyaakI9c7vRp696'}
        // ],
        authParams: {
          issuer,
          scopes,
        },
        useInteractionCodeFlow
      })

      const originalUri = this.$auth.getOriginalUri();
      if (!originalUri) {
        this.$auth.setOriginalUri('/');
      }

      this.widget.showSignInToGetTokens({
        el: '#okta-signin-container',
        scopes
      }).then(tokens => {
        this.$auth.handleLoginRedirect(tokens)
      }).catch(err => {
        throw err
      })

    })
  },
  unmounted () {
    // Remove the widget from the DOM on path change
    this.widget.remove()
  }
}
</script>