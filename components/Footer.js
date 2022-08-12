export const Footer = () => {
  return (
    <section>
      <div className="container mx-auto max-w-3xl">
        <ul className="socials flex gap-2.5">
          <li className="social">
            <a href="//instagram.com/riens" target="_blank" rel="noreferrer">
              <img
                className="w-10"
                src="SVG/instagram.svg"
                alt="Instagram"
                layout="fill"
              />
            </a>
          </li>
          <li className="social">
            <a
              href="//linkedin.com/in/ryancarivera/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-10"
                src="SVG/linkedin.svg"
                alt="Instagram"
                layout="fill"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
