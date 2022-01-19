import { environment } from "src/environments/environment";

export default {

    oidc: {
        clientId:'0oa4l9ren5o8PB6hp5d6',
        issuer:'https://dev-48977821.okta.com/oauth2/default',
        redirectUri:`${environment.API_URL}/login/callback`,
        scopes:['openid','profile','email']
    }
}
