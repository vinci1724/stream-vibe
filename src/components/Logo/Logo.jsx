import './Logo.scss';

const Logo = () => {
  const title = 'Home';

  return (
    <a
      className="logo"
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        src="/favicon-32x32.png"
        alt=""
        className="logo__image"
        width={199}
        height={60}
        loading="lazy"
      />
    </a>
  );
};

export default Logo;
