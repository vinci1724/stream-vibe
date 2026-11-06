import MovieBannerCard from '@/components/MovieBannerCard';

const MovieBanner = () => {
  const titleId = 'movie-banner-title';

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title="Kantara"
        titleId={titleId}
        TitleTag="h1"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus minima laudantium eius suscipit quo, voluptas qui natus porro velit vel nulla dicta numquam perferendis itaque consequatur obcaecati eveniet, pariatur aliquid."
        imgSrc="/src/assets/images/movie-banner/2.jpg"
        isSmallPaddingY
      />
    </section>
  );
};

export default MovieBanner;
