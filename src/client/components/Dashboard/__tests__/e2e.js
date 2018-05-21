describe('Dashboard', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3325/login');
  });

  it('should navigate to the dashboard after login', async () => {
    await expect(page).toFill('#Username', 'ExampleUsername');
    await expect(page).toClick('button', { text: 'Continue' });
    await expect(page).toMatch('Logged in as ExampleUsername');
  });

  it('should display "Dashboard" text on page', async () => {
    await expect(page).toMatch('Dashboard');
  });

  it('should have a "Log Out" button', async () => {
    await expect(page).toMatchElement('button', { text: 'Log Out' });
  });

  it('should navigate to the login page on logout', async () => {
    await expect(page).toClick('button', { text: 'Log Out' });
    await expect(page).toMatch('Log In');
  });
});
