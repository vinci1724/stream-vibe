import { Image } from 'minista/assets';

import Button from '../Button';
import './MovieBannerCard.scss';

const MovieBannerCard = (props) => {
  const {
    title,
    description,
    imgSrc,
  } = props;

  return (
    <div className="movie-banner-card">
      <Image
        className="movie-banner-card__image"
        src={imgSrc}
      />

      <div className="movie-banner-card__inner">
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title h3">
            {title}
          </h2>

          <div className="movie-banner-card__description hidden-mobile">
            {description}
          </div>
        </div>

        <div className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play Now"
          />

          <div className="movie-banner-card__actions">
            <Button
              mode="black-06"
              iconName="plus"
              label="Add to playlist"
              isLabelHidden
            />
            <Button
              mode="black-06"
              iconName="like"
              label="Like"
              isLabelHidden
            />
            <Button
              mode="black-06"
              iconName="volume"
              label="Mute"
              isLabelHidden
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBannerCard;
