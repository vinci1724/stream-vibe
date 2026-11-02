import { Image } from 'minista/assets';

import Badge from '../Badge';
import './MovieCard.scss';

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    released,
    rating,
    href = './movie',
  } = props;

  return (
    <a
      className="movie-card"
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconName="clock"
            iconAriaLabel="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {views && (
          <Badge
            iconName="eye"
            iconAriaLabel="Views"
            hasFillIcon
          >
            {views}
          </Badge>
        )}

        {released && (
          <Badge className="movie-card__release-badge">
            Released at
            {' '}
            <time dateTime={released.dateTime}>{released.label}</time>
          </Badge>
        )}
      </div>
    </a>
  );
};

export default MovieCard;
