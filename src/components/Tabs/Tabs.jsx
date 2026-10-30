import classNames from 'classnames';

import TabsNavigation from './components/TabsNavigation';
import getTabsElementsFromTitle from './utils/getTabsElementsFromTitle';
import './Tabs.scss';

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
  } = props;

  const { buttonId, contentId } = getTabsElementsFromTitle(title);

  return (
    <div
      className={classNames(className, 'tabs')}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId,
      })}
    >
      {!navigationTargetElementId && (
        <TabsNavigation title={title} items={items} />
      )}

      <div className="tabs__body">
        {items.map((item, index) => {
          const {
            // title,
            children,
            isActive,
          } = item;

          return (
            <div
              key={index}
              id={contentId}
              aria-labelledby={buttonId}
              className={classNames('tabs__content', {
                'is-active': isActive,
              })}
              tabIndex={0}
              data-js-tabs-content=""
            >
              {children}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Tabs;
