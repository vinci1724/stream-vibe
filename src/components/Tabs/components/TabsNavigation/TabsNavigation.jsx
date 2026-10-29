import classNames from 'classnames';

import getIdFromTitle from '@/utils/getIdFromTitle';
import './TabsNavigation';

const TabsNavigation = (props) => {
  const {
    className,
    id,
    title,
    items = [],
  } = props;

  const titleFormatted = getIdFromTitle(title);
  const titleId = `${titleFormatted}-title`;

  return (
    <div
      className={classNames(className, 'tabs-navigation')}
    >
    </div>
  );
};

export default TabsNavigation;
