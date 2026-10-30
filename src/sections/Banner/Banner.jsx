import Button from '@/components/Button';
import './Banner.scss';

const Banner = () => {
  const titleId = 'banner-title';

  return (
    <section
      className="banner container"
      aria-labelledby={titleId}
    >
      <div className="banner__inner">
        <div className="banner__body">
          <h2 className="banner__title" id={titleId}>
            Start your free trial today
          </h2>

          <div className="banner__description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis mollitia quidem cumque molestiae! Et mollitia corrupti voluptatibus harum suscipit aut, aspernatur, corporis cumque sapiente nihil sequi cum recusandae, amet fugit?
            </p>
          </div>
        </div>

        <Button
          className="banner__button"
          label="Start a Free Trail"
          href="/subscriptions"
        />
      </div>
    </section>
  );
};

export default Banner;
