import CategoryCard from '@/components/CategoryCard';
import Slider from '@/components/Slider';
import SliderNavigation from '@/components/Slider/components/SliderNavigation';
import Section from '@/layouts/Section';
import categoryItems from './categoryItems';
import './Categories.scss';

const Categories = () => {
  const sliderNavigationId = 'categories-slider-navigation';

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia quidem cumque molestiae! Et mollitia corrupti voluptatibus harum suscipit aut, aspernatur, corporis cumque sapiente nihil sequi cum recusandae, amet fugit?"
      actions={(
        <SliderNavigation
          mode="tile"
          id={sliderNavigationId}
          hasPagination
        />
      )}
      isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            key={index}
            {...categoryItem}
          />
        ))}
      </Slider>
    </Section>
  );
};

export default Categories;
