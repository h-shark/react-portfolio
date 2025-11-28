import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./service.css";

const Services = () => {
  const backend = {
    0:["High-performance backend APIs built using Go’s concurrency and optimized architecture.",
      "Scalable microservices with goroutines, channels, and mutex-safe operations.",
      "Secure, well-structured REST APIs and backend systems.",
      "Efficient database integration with PostgreSQL, MySQL, MongoDB, or Redis.",
      "Clean, maintainable backend code following best engineering practices."
    ],
    1:["Responsive, modern UI using React, Hooks, and reusable component design.",
      "Smooth integration with backend services for seamless user experiences.",
      "State management using Redux, Zustand, or Context API.",
      "Performance-optimized pages with fast rendering and clean architecture.",
      "Intuitive, user-friendly interfaces aligned with modern design standards."
    ],
    2:[
      "Deployment of scalable applications using AWS services (EC2, S3, Lambda, API Gateway).",
      "Containerization and environment consistency using Docker.",
      "CI/CD pipelines for automated testing, building, and deployment.",
      "Cloud-ready system architecture for reliability and efficiency.",
      "Monitoring, logging, and optimization for production-grade systems."
    ]
}
  return (
    <section id="services">
      <h5>What do I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {["Backend Developement", "Frontend Developement", "Cloud & DevOps"].map(
          (article, index) => (
            <article className="service" key={index}>
              <div className="service__head">
                <h3>{article}</h3>
              </div>

              <ul className="service__list">
                {backend[index].map((i) => (
                  <li key={i}>
                    <FaCheckCircle className="service__list-icon" />
                    <p>{i}</p>
                  </li>
                ))}
              </ul>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
