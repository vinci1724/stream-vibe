import classNames from 'classnames';
import { Sprite } from 'minista/assets';
import './Icon.scss';

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
    ariaLabel,
  } = props;

  return (
    <span
      className={classNames(className, 'icon')}
      aria-label={ariaLabel}
    >
      <Sprite
        src={`/src/assets/icons/${name}.svg`}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  );
};

export default Icon;
