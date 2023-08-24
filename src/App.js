import logo from './logo.svg';
import './App.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Edna Wambui Kamiti</h1>
      <section className="education">
        <h2>Education</h2>
        <p>Diploma in Business Information Technology</p>
        <p>Kca University</p>
      </section>
      <section className="professional">
        <h2>Professional Background</h2>
        <p>Software Developer at Pertom Digital</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          </ul>
      </section>
    </div>
  );
}

export default Portfolio;
