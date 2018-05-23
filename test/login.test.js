import login from '../src/components/login/login'
import {mount} from 'vue-test-utils'

describe('Login Component Tests', () => {

  let component;

  beforeEach(() => {
    const $api = {
      login: jest.fn()
    };

    component = mount(login, {
      mocks : {
        $api
      }
    });
  });

  test('add 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('clicking the log-in button shows the loading spinner', () => {
    expect(component.vm.showingLoadingSpinner).toBe(false);
    const button = component.find('button');
    button.trigger('click');
    expect(component.vm.showingLoadingSpinner).toBe(true);
  });

  test('logging in attempts to call login service', () => {
    // getReturnsAPromise();
    const button = component.find('button');
    button.trigger('click');

    expect(component.vm.$api.login).toBeCalled();
  });

});
