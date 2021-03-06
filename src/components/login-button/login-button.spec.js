import React from 'react';
import { mount } from 'enzyme';

import LoginButton from 'components/login-button';
import styles from './login-button.less';

describe('LoginButton [Component]', () => {
  let component;

  beforeEach((done) => {
    component = mount(<LoginButton>Login</LoginButton>);
    done();
  });

  afterEach((done) => {
    component = null;
    done();
  });

  it('renders the correct root classnames', () => {
    expect(component.find(`.${styles.button}`)).to.have.length(1);
    expect(component.find(`.${styles['button--ghost']}`)).to.have.length(1);
    expect(component.find(`.${styles['button--animateFromTop']}`)).to.have.length(1);
  });

  it('should contain one <span> tag', () => {
    expect(component.find('span')).to.have.length(1);
  });

  it('should have the correct button text', () => {
    expect(component.text()).to.equal('Login');
  });
});
