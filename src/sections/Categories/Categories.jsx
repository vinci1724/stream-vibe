import CategoryCard from '@/components/CategoryCard';
import Section from '@/layouts/Section';
import './Categories.scss';

const Categories = () => {
  const categoryItems = [
    {
      title: 'Action',
      images: [
        '/src/assets/images/categories/action/1.jpg',
        '/src/assets/images/categories/action/2.jpg',
        '/src/assets/images/categories/action/3.jpg',
        '/src/assets/images/categories/action/4.jpg',
      ],
    },
    {
      title: 'Adventure',
      images: [
        '/src/assets/images/categories/adventure/1.jpg',
        '/src/assets/images/categories/adventure/2.jpg',
        '/src/assets/images/categories/adventure/3.jpg',
        '/src/assets/images/categories/adventure/4.jpg',
      ],
    },
    {
      title: 'Comedy',
      images: [
        '/src/assets/images/categories/comedy/1.jpg',
        '/src/assets/images/categories/comedy/2.jpg',
        '/src/assets/images/categories/comedy/3.jpg',
        '/src/assets/images/categories/comedy/4.jpg',
      ],
    },
    {
      title: 'Drama',
      images: [
        '/src/assets/images/categories/drama/1.jpg',
        '/src/assets/images/categories/drama/2.jpg',
        '/src/assets/images/categories/drama/3.jpg',
        '/src/assets/images/categories/drama/4.jpg',
      ],
    },
  ];

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
      {categoryItems.map((categoryItem, index) => (
        <CategoryCard
          {...categoryItem}
          key={index}
        />
      ))}
    </Section>
  );
};

export default Categories;
