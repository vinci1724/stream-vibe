import MovieBannerCard from '@/components/MovieBannerCard';
import Slider from '@/components/Slider';
import './MoviesBanner.scss';

const MoviesBanner = () => {
  const titleId = 'movies-banner-title';

  const movieCards = [
    {
      title: 'Avengers: Endgame',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod consectetur voluptas. Deserunt dignissimos suscipit ipsam ex totam consequuntur. Dolorum voluptates nostrum ut ipsum beatae culpa repudiandae doloribus rerum eveniet.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers: Endgame 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod consectetur voluptas. Deserunt dignissimos suscipit ipsam ex totam consequuntur. Dolorum voluptates nostrum ut ipsum beatae culpa repudiandae doloribus rerum eveniet.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers: Endgame 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod consectetur voluptas. Deserunt dignissimos suscipit ipsam ex totam consequuntur. Dolorum voluptates nostrum ut ipsum beatae culpa repudiandae doloribus rerum eveniet.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
    {
      title: 'Avengers: Endgame 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod consectetur voluptas. Deserunt dignissimos suscipit ipsam ex totam consequuntur. Dolorum voluptates nostrum ut ipsum beatae culpa repudiandae doloribus rerum eveniet.',
      imgSrc: '/src/assets/images/movie-banner/1.jpg',
    },
  ];

  return (
    <section
      className="movies-banner container"
      aria-labelledby={titleId}
    >
      <h1 className="visually-hidden" id={titleId}>
        Movies & Shows
      </h1>

      <Slider
        sliderParams={{
          slidesPerView: 1,
          breakpoints: {
            1024: {
              allowTouchMove: false,
            },
          },
        }}
        navigationPosition="abs-bottom"
        hasScrollbarOnMobile={false}
      >
        {movieCards.map((movieCard, index) => (
          <MovieBannerCard
            key={index}
            {...movieCard}
          />
        ))}
      </Slider>
    </section>
  );
};

export default MoviesBanner;
