import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
const Portfolio = () => {
  const data = [
    {
      image: IMG1,
      title: "Software Engineer",
    },
    {
      image: IMG2,
      title: "Senior UI Engineer",
    },
    {
      image: IMG3,
      title: "Backend Developer",
    },
    {
      image: IMG4,
      title: "Frontend Developer",
    }
  ];
  return (
    <section id="portfolio">
      <h5>My projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ image, title }, id) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
