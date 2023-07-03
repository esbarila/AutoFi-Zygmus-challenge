import page from './page-model';

fixture `Testcafe interaction with Tutorialspoint`
    .page `https://www.tutorialspoint.com/html/html_iframes.htm`;

// Tests
test('Performs tasks and logs results', async t => {
    await t
        .resizeWindow(1920, 1080)
        .scrollIntoView(page.iframe);
    await t
        .switchToIframe(page.iframe)
        .click(page.iframeCookiesAccept)
        .scrollIntoView(page.iframeAboutUsBtn)
        .click(page.iframeAboutUsBtn);

    await t.wait(50000);
});