describe('Login', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3325/login');
  });

  it('should display "Log In" text on page', async () => {
    await expect(page).toMatch('Log In');
  });

  it('should have a "Username" input field', async () => {
    await expect(page).toMatchElement('#Username');
  });

  it('should have a "Continue" button', async () => {
    await expect(page).toMatchElement('button', { text: 'Continue' });
  });

  it('should do nothing with invalid input', async () => {
    await expect(page).toClick('button', { text: 'Continue' });
    await expect(page).toMatch('Log In');
  });

  it('should log in with valid input', async () => {
    await expect(page).toFill('#Username', 'ExampleUsername');
    await expect(page).toClick('button', { text: 'Continue' });
    await expect(page).not.toMatch('Log In');
  });
});
