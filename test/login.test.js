import login from '../src/components/login/login'
import {mount} from 'vue-test-utils'

describe('Login Component Tests', () => {

  let component;
  let $api;
  let $route;
  let $store;

  beforeEach(() => {
    $api = {
      login: jest.fn(() => Promise.resolve())
    };

    $route = {};
    $store = {test: 'hello'};

    component = mount(login, {
      mocks: {
        $api,
        $route,
        $store
      }
    });
  });

  test('clicking the log-in button shows the loading spinner', () => {
    let loginButton = component.find('button');
    assertLoadingSpinnerIsNotShowing();
    attemptLogin();
    assertLoadingSpinnerIsShowing();
  });

  test('logging in attempts to call login service', () => {
    attemptLogin();

    expect(component.vm.$api.login).toBeCalled();
  });

  test('login passes the right username and password to the service', (done) => {
    const username = component.find('input[type="text"]');
    const password = component.find('input[type="password"]');

    // can't just test the data members, want to test the component - that the input
    // is actually hooked up to the model and goes through the api call.
    username.element.value = 'myusername';
    username.trigger('input');
    password.element.value = 'mypassword';
    password.trigger('input');

    attemptLogin();

    component.vm.$nextTick().then(() => {
      expect(component.vm.$api.login).toHaveBeenCalledWith('myusername', 'mypassword');
      done();
    });
  });

  test('failure to log-in displays login-failure message', (done) => {
    $api.login = jest.fn(() => Promise.reject({}));
    attemptLogin();
    assertLoginErrorMessageIsShowing(done);
  });

  test('failure to log-in stops our spinner', (done) => {
    $api.login = jest.fn(() => Promise.reject({}));
    attemptLogin();
    assertLoadingSpinnerIsShowing();

    return component.vm.$nextTick().then(() => {
      assertLoadingSpinnerIsNotShowing();
      done();
    });
  });

  test('successful login stores token in store', (done) => {
    $api.login = jest.fn(() => Promise.resolve({token: 'xyz12345', id: 54321}));
    attemptLogin();

    return component.vm.$nextTick().then(() => {
      expect(component.vm.$store.token).toBe('xyz12345');
      expect(component.vm.$store.authenticated).toBe(true);
      done();
    });
  });

  function assertLoginErrorMessageIsShowing(done) {
    return component.vm.$nextTick().then(() => {
      expect(component.contains('div.notification.is-danger')).toBe(true);
      done();
    });
  }

  function attemptLogin() {
    const button = component.find('button');
    button.trigger('click');
  }

  function assertLoadingSpinnerIsShowing() {
    expect(component.contains('button.is-loading')).toBe(true);
  }

  function assertLoadingSpinnerIsNotShowing() {
    expect(component.contains('button.is-loading')).toBe(false);
  }


});
