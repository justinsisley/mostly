import { catchErrors, handleErrors, handleNotFound } from '../index';

describe('errors', () => {
  it('should export a "catchErrors" middleware', () => {
    expect(typeof catchErrors).toBe('function');

    const routeHandlerMock = jest.fn();
    catchErrors(routeHandlerMock)('req', 'res', 'next');
    expect(routeHandlerMock.mock.calls.length).toBe(1);

    const routeHandlerArgs = routeHandlerMock.mock.calls[0];
    expect(routeHandlerArgs[0]).toBe('req');
    expect(routeHandlerArgs[1]).toBe('res');
    expect(routeHandlerArgs[2]).toBe('next');
  });

  it('should export a "handleErrors" middleware', () => {
    expect(typeof handleErrors).toBe('function');

    const jsonMock = jest.fn();
    const statusMock = jest.fn(() => ({ json: jsonMock }));
    const resMock = { status: statusMock };

    handleErrors({}, {}, resMock);

    expect(statusMock.mock.calls.length).toBe(1);
    expect(statusMock.mock.calls[0][0]).toBe(500);

    expect(jsonMock.mock.calls.length).toBe(1);
    expect(jsonMock.mock.calls[0][0]).toMatchObject({});
  });

  it('should export a "handleNotFound" middleware', () => {
    expect(typeof handleNotFound).toBe('function');

    const endMock = jest.fn();
    const statusMock = jest.fn(() => ({ end: endMock }));
    const resMock = { status: statusMock };

    handleNotFound({}, resMock);

    expect(statusMock.mock.calls.length).toBe(1);
    expect(statusMock.mock.calls[0][0]).toBe(404);

    expect(endMock.mock.calls.length).toBe(1);
  });
});
