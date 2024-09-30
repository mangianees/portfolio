import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
  return (
    <>
      <div
        class="card text-center bg-image shadow-lg p-3 mb-5 bg-white rounded"
        className="myCard"
      >
        <div class="card-header" className="myTitle">
          Skills
        </div>
        <div className="skillContainer">
          <div className="skill01">
            JavaScript | Node.js
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill02">
            ReactJS | React Native
            <ProgressBar variant="success" now={75} />
          </div>

          <div className="skill03">
            Python | Django
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill04">
            SQL | MySQL | PostgreSQL
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill05">
            HTML | CSS | Sass
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill06">
            Java Fundamentals
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill07">
            Migrations | Cloudflare | Netlify | Agile
            <ProgressBar variant="success" now={75} />
          </div>

          <div className="skill08">
            Git | Jest | PyTest | Expo Go | Express
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill09">
            Paired Programming | Adaptability
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill10">
            Analytical Thinking | Leadership
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill11">
            Team Collaboration | Effective Communication
            <ProgressBar variant="success" now={80} />
          </div>

          <div className="skill12">
             Problem Solving | Continuous Learning
            <ProgressBar variant="success" now={80} />
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Skills;
