import Button from '@/components/Button';
import './Hero.scss';

const Hero = () => {
  const titleId = 'hero-title';
  const playButtonTitle = 'Play Video';

  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            className="hero__play-button"
            type="button"
            aria-label={playButtonTitle}
            title={playButtonTitle}
          >
            <img
              className="hero__play-button-image"
              alt="/"
              src="/play.svg"
              width={470}
              height={470}
            />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" id={titleId}>
            The Best Streaming Experience
          </h1>
          <div className="hero__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque magnam dolorum similique voluptatem, nisi ratione dolor voluptatibus iure iste autem, repellat veniam, quos tempore laudantium? Atque in facere reprehenderit!
          </div>
          <Button
            className="hero__button"
            iconName="play"
            hasFillIcon
            label="Start Watching Now"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
