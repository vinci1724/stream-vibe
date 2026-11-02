import CategoryCard from '@/components/CategoryCard';
import MovieCard from '@/components/MovieCard';
import Slider from '@/components/Slider';
import SliderNavigation from '@/components/Slider/components/SliderNavigation';
import Tabs from '@/components/Tabs';
import Section from '@/layouts/Section';
import getIdFromTitle from '@/utils/getIdFromTitle';
import collectionGroups from './collectionGroups';
import './Collections.scss';

const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroups.map(collectionGroup => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>

            {collectionGroup.items.map((collectionItem, index) => {
              const {
                title,
                categoryItems,
                movieItems,
                sliderParams,
              } = collectionItem;

              const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`;
              const titleId = `${titleFormatted}-title`;
              const sliderNavigationId = `${titleFormatted}-slider-navigation`;

              return (
                <Section
                  key={index}
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={(
                    <SliderNavigation
                      id={sliderNavigationId}
                      mode="tile"
                    />
                  )}
                  isActionsHiddenOnMobile
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobileS
                  >
                    {/* {categoryItems?.map((categoryItem, index) => ( */}
                    {categoryItems?.map((categoryItem, i) => (
                      <CategoryCard
                        key={index}
                        {...categoryItem}
                      />
                    )) ?? movieItems?.map((movieItem, index) => (
                      <MovieCard
                        key={index}
                        {...movieItem}
                      />
                    ))}
                  </Slider>
                </Section>
              );
            })}
          </div>
        ),
      }))}
    />
  );
};

export default Collections;
