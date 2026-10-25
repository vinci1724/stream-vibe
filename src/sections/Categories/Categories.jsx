import Section from '@/layouts/Section';
import './Categories.scss';

const Categories = () => {
  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia quidem cumque molestiae! Et mollitia corrupti voluptatibus harum suscipit aut, aspernatur, corporis cumque sapiente nihil sequi cum recusandae, amet fugit?"
      actions={(
        <div>
          <button>Назад</button>
          <button>Вперед</button>
        </div>
      )}
      isActionsHiddenOnMobile
    >
      CATEGORIES
    </Section>
  );
};

export default Categories;
