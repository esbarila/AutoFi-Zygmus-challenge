import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.iframe = Selector('.result', {timeout: 10000});
        this.iframeCookiesAccept = Selector('#banner-accept');
        this.iframeAboutUsBtn = Selector('a').withText('About us');
        this.footer = Selector('#footer');
        this.loginBtn = Selector('a').withText('Login');
        this.signUpBtn = Selector('#spanForgot');
    }
}

export default new Page();
