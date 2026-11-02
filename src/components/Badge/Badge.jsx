import classNames from 'classnames';

import Icon from '../Icon';
import './Badge.scss';

const Badge = (props) => {
  const {
    className,
    /**
     * '' (default) | 'accent'
     */
    mode = '',
    isBig = false,
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel,
  } = props;

  return (
    <div
      className={classNames(className, 'badge', {
        [`badge--${mode}`]: mode,
        'badge--big': isBig,
      })}
    >
      {iconName && (
        <Icon
          className="badge__icon"
          name={iconName}
          hasFill={hasFillIcon}
          ariaLabel={iconAriaLabel}
        />
      )}
      {children}
    </div>
  );
};

export default Badge;
