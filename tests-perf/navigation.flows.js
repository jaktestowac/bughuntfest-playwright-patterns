async function checkPage(page, userContext, events) {
  for (const { url, title } of userContext.vars.pageChecks) {
    await page.goto(url);

    await page.waitForLoadState('domcontentloaded');

    const isElementVisible = await page.getByText(title).isVisible();

    if (!isElementVisible) {
      events.emit('counter', `user.element_check_failed.${title}`, 1);
    }
  }
}

module.exports = {
  checkPage,
};
