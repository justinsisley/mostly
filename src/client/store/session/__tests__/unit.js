import axios from 'axios';
import configureStore from '../../index';
import { logIn, logOut } from '../index';

jest.mock('axios');

describe('session', () => {
  it('should export a logIn function', async () => {
    expect(typeof logIn).toBe('function');

    const store = configureStore();

    expect(store.getState().session.token).toBe('');
    expect(store.getState().session.username).toBe('');

    axios.post.mockImplementationOnce(() => Promise.resolve({
      data: { token: '12345' },
    }));

    await logIn('testUser')(store.dispatch);

    expect(store.getState().session.token).toBe('12345');
    expect(store.getState().session.username).toBe('testUser');
  });

  it('should export a logOut function', () => {
    expect(typeof logOut).toBe('function');

    const store = configureStore({
      session: {
        token: '12345',
        username: 'testUser',
      },
    });

    logOut()(store.dispatch);

    expect(store.getState().session.token).toBe('');
    expect(store.getState().session.username).toBe('');
  });
});
