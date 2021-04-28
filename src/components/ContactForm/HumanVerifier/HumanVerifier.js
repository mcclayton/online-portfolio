import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
const cx = classNames.bind(styles);

export const USER_TYPE = {
  ROBOT: 0,
  HUMAN: 1,
  NONE: 2
};

// Hidden form field designed to catch robots
const HONEY_POT_FIELD = 'phone';

const HumanVerifier = React.forwardRef(({ userType, onChange }, honeypotRef) => {
  function handleClick(type) {
    onChange(type);
  }

  return (
    <div>
      <label>I am a:</label>
      <div>
        <span className={cx([styles.userOption], { active: userType ===  USER_TYPE.ROBOT})} onClick={() => handleClick(USER_TYPE.ROBOT)}>
          🤖 Robot
        </span>
        <span className={cx([styles.userOption], { active: userType ===  USER_TYPE.HUMAN})} onClick={() => handleClick(USER_TYPE.HUMAN)}>
          👀 Human
        </span>
        <input
          ref={honeypotRef}
          tabindex="-1"
          autocomplete="off"
          className={cx(styles.honeypotField)}
          type={HONEY_POT_FIELD}
          name={HONEY_POT_FIELD}
          id={HONEY_POT_FIELD}
        />
      </div>
    </div>
  );
});

export default HumanVerifier;
