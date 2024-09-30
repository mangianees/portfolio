import Projects from "../components/Projects"
function Home() {
  return (
    <div
      class="card text-center bg-image shadow-lg p-3 mb-5 bg-white rounded"
      className="myCard"
    >
      <div class="card-header" className="myTitle">
        Software Engineer & Mentor
      </div>

      <div className="myText">
        <div className="myContainer">
          <div className="myItem01">
            <div className="oval"></div>
            <ul className="myUl">
              <li> Engineering Solutions, Mentoring Minds </li>
              <li> Building Software, Shaping Futures</li>
              <li> Code with Precision, Mentor with Passion</li>
              <li> Crafting Innovation, Inspiring Growth</li>
              <li> Developing Software, Elevating Talent</li>
            </ul>
          </div>
          
        <div className="myItem03">
          <Projects />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
