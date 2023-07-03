import { Selector } from 'testcafe';
import page from './page-model';

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
    console.log('holis');
    await t.wait(5500);
    
});