import login from '../src/components/login/login'
import {mount} from 'vue-test-utils'

describe('Login Component Tests', () => {

  let component;
  let $api;
  let $route;

  beforeEach(() => {
    $api = {
      login: jest.fn(() => Promise.resolve())
    };

    $route = {};

    component = mount(login, {
      mocks : {
        $api,
        $route
      }
    });
  });

  test('add 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('clicking the log-in button shows the loading spinner', () => {
    expect(component.vm.showingLoadingSpinner).toBe(false);
    attemptLogin();
    expect(component.vm.showingLoadingSpinner).toBe(true);
  });

  test('logging in attempts to call login service', () => {
    attemptLogin();

    expect(component.vm.$api.login).toBeCalled();
  });

  test('login passes the right username and password to the service', () => {
    const username = component.find('input[type="text"]');
    const password = component.find('input[type="password"]');

    component.vm.username = 'myusername';
    component.vm.password = 'mypassword';

    attemptLogin();

    expect(component.vm.$api.login).toHaveBeenCalledWith('myusername', 'mypassword');
  });

  test('failure to log-in displays login-failure message', (done) => {
    $api.login = jest.fn(() => Promise.reject({}));
    attemptLogin();
    loginErrorMessageIsShowing(done);
  });

  test('failure to log-in stops our spinner', (done) => {
    $api.login = jest.fn(() => Promise.reject({}));
    attemptLogin();
    let button = component.find('button.is-loading');
    expect(button.exists()).toBe(true);

    component.vm.$nextTick();

    return component.vm.$nextTick().then ( () => {
      let button = component.find('button.is-loading');
      expect(button.exists()).toBe(false);
      done();
    });
  });

  function loginErrorMessageIsShowing(done) {
    return component.vm.$nextTick().then ( () => {
      let error = component.find('div.notification.is-danger');
      expect(error.exists()).toBe(true);
      done();
    });
  }

  function attemptLogin() {
    const button = component.find('button');
    button.trigger('click');
  }

  function getLoadingButton() {
    return component.find('button.is-loading');
  }

});
