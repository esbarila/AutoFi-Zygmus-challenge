import { Selector } from 'testcafe';
import page from './page-model';
import { ClientFunction } from 'testcafe';
import fs from 'fs';

fixture `Testcafe interaction with Tutorialspoint`
    .page `https://www.tutorialspoint.com/html/html_iframes.htm`;

// Tests
test('Performs tasks and logs results', async t => {
    await t
        .resizeWindow(1920, 1080)
        .scrollIntoView(page.iframe);
    await t.switchToIframe(page.iframe); // switches to parent iframe reference.
    const innerIframe = Selector('iframe');
    await t.switchToIframe(innerIframe); // switches to iframe of interest reference.
    await t.click(page.iframeCookiesAccept);
    await t.scrollIntoView(page.iframeAboutUsBtn);
    await t.click(page.iframeAboutUsBtn);
    await t.wait(3000);

    //Get url and log it.
    const getURL = ClientFunction(() => window.location.href);
    const url = await getURL();
    console.log('currentUrl: ' + url);
    fs.writeFile('output.log', `Current URL is ${url}`, err => {
        if (err) {
            console.log(err);
        }
    })
    const allNodes = Selector('body', {timeout:30000});
    const allUrlsCount = await allNodes.find('a').count;

    //List all URLs in the page.
    await t.wait(3000);
    const urlArray = [];
    for (let i=0; i <= allUrlsCount - 1; i++) {
        urlArray.push(await allNodes.find('a').nth(i).getAttribute('href'));
    }
    console.log(`\n\nAll URLs on the site: \n${urlArray.join('\n')}`);
    fs.appendFile('output.log', `\nAll URLs on the site: \n${urlArray.join('\n')}`, err => {
        if (err) {
            console.log(err);
        }
    });

    //List all buttons on the page.
    await t.wait(3000);
    const allButtonsCount = await allNodes.find('button').count;
    const buttonArray = [];
    for (let i=0; i <= allButtonsCount - 1; i++) {
        buttonArray.push(await allNodes.find('button').nth(i).getAttribute('id'));
    }
    console.log(`\n\nAll buttons on the site: \n${buttonArray.join('\n')}`);
    fs.appendFile('output.log', `\nAll buttons on the site: \n${buttonArray.join('\n')}`, err => {
        if (err) {
            console.log(err);
        }
    });

    // List all text inputs.
    await t.wait(3000);
    const allTextInputsCount = await allNodes.find('input').withAttribute('type', 'text').count;
    const textInputArray = [];
    for (let i=0; i <= allTextInputsCount - 1; i++) {
        textInputArray.push(await allNodes.find('input').withAttribute('type', 'text').nth(i).getAttribute('id'));
    }
    console.log(`\n\nAll text inputs on the site: \n${textInputArray.join('\n')}`); // There are actually none.
    fs.appendFile('output.log', `\nAll text inputs on the site: \n${textInputArray.join('\n')}`, err => {
        if (err) {
            console.log(err);
        }
    });

    //Create an account and Log into the site.
    await t.click(page.loginBtn);
    await t.click(page.signUpBtn);
    /*
    There's an issue here with Tutorial's Point.
    Signup form requires:
    1) Email validation: I could send requests to an inbox in mailsac.com but testcafe
    can't pass headers with their .reques() function. Cypress can, but I wasn't able to use it here.
    2) Phone validation: Same issue as before.
    */
});