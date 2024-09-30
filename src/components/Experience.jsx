import ProgressBar from "react-bootstrap/ProgressBar";
function Experience() {
  const style = {
    // width : 30px
  }
  return (
    <>
      <div
        class="card text-center bg-image shadow-lg p-3 mb-5 bg-white rounded"
        className="myCard"
      >
        <div class="card-header" className="myTitle">
          Skills
        </div>
        <br />
        Experience Timeline
        
        <ProgressBar>
          
          <ProgressBar
            style={style}
            animated
            striped
            variant="info"
            now={10}
            key={1}
            label={`Cosmos Communications`}
          />
          <ProgressBar
            animated
            striped
            variant="success"
            now={30}
            key={2}
            label={`NADRA`}
          />

          <ProgressBar
            animated
            striped
            variant="info"
            now={15}
            key={3}
            label={`Business`}
          />
          <ProgressBar
            variant="warning"
            now={15}
            key={2}
            animated
            label={`FIREBRAND`}
          />
          <ProgressBar
            striped
            variant="danger"
            now={15}
            key={4}
            label={`Altheus Digital`}
          />
          <ProgressBar
            animated
            striped
            variant="info"
            now={15}
            key={5}
            label={`Northcoders`}
          />
        </ProgressBar>
        <div className="myText">
          <div id="accordion">
            {/* <div class="card"> */}
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  NORTHCODERS (TRAINEE SOFTWARE ENGINEER - APR 2024 TO JUL 2024)
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                Joining Northcoders Bootcamp is a transformative step in my
                career, allowing me to immerse myself in an environment that
                fosters rapid skill development and practical application. I am
                eager to enhance my proficiency in modern software development
                practices, work on real-world projects, and collaborate with
                like-minded individuals who share my passion for technology.
                This experience is pivotal in preparing me for a future where I
                can make significant contributions to innovative projects and
                stay at the forefront of technological advancements. Key
                Responsibilities and Achievements Collaborated with
                cross-functional teams to design, develop, and maintain
                responsive web applications. Utilized test-driven development,
                pair programming, and object-oriented programming through
                JavaScript to enhance code quality and teamwork. Wrote clean and
                efficient code following industry best practices. Worked closely
                with senior developers to enhance technical skills and
                contribute to project success. Projects Completed at
                Northcoders: Shop Around Front End (Final Project) Shop Around
                Back End (Final Project) Marketplace Calculator Pokemon battler
                NC News Back-end API NC News NC
              </div>
            </div>

            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  FIREBRAND (CLOUD COMPUTING - JAN 2023 TO APR 2023)
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                Gained in-depth knowledge of cloud computing and the Microsoft
                Azure platform. Learned about big data and analysis services in
                Azure. Managed Azure Blob Storage, Azure Disk Storage, Azure
                Files, and Blob access tiers.
              </div>
            </div>
            {/* </div> */}
            {/* <div class="card"> */}
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ALTHAUS DIGITAL (CYBER SECURITY - MAR 2022 TO JUN 2022)
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                Introduced to cyber security, malware, and malicious code.
                Studied various attacks, the art of deception, cryptography, and
                data masking. Developed skills in defending systems, devices,
                users, cyber security domains, and ethics.
              </div>
            </div>
            {/* </div> */}
            {/* ------ */}
            {/* <div class="card"> */}
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  SELF-EMPLOYED (JAN-2019 TO JAN 2022)
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                Successfully managed all aspects of a car sales and purchase,
                from procurement to sales. Applied my technical expertise to
                manage various business operations, further honing my leadership
                and problem-solving skills.
              </div>
            </div>
            {/* </div> */}

            {/* <div class="card"> */}
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  NATIONAL DATABASE AND REGISTRATION AUTHORITY (SYSTEM ENGINEER
                  - MAY 2005 TO DEC 2018)
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                Designed software solutions by analysing system performance
                standards, improving efficiency. Created reports and dashboards
                for senior management. Installed, documented, and tested
                software and hardware upgrades. Provided leadership, coaching,
                and training to manage staff performance. Ensured internal
                systems security and application support for all users. Managed
                ticket queues within specified periods. Identified information
                and data architecture for projects and linked it to
                comprehensive digital and data strategies.
              </div>
            </div>
            {/* </div> */}

            {/* <div class="card"> */}
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  COSMOS COMMUNICATION PVT. LTD (SYSTEM ENGINEER - 2003 TO 2005
                  )
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                Designed an application for record-keeping to manage sales,
                products, and expenses using Visual Basic for the front-end and
                MS SQL Server for the back-end. Performed detailed analysis of
                business requirements and developed comprehensive plans defining
                and scoping project requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
}

export default Experience;
