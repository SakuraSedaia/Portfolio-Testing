import Header from "~/components/Header.jsx";
import Footer from "~/components/Footer.jsx";
import { A } from "@solidjs/router";

function About() {
  return (
    <>
      <Header
        title="Sakura Sedaia"
        img="about"
        desc="Freelance Software Developer and 3D Artist"
      />

      <div class={"content-container"}>
        <section id={"about-me"}>
          <column-container split>
            <column>
              <heading>
                <h1>Who am I?</h1>
              </heading>
              <p>
                I am a {new Date().getFullYear() - 2003} year old novice UI
                Designer specializing in SolidJS, SCSS, and Python based
                projects, and have it as my main goal to develop hand-crafted
                solutions in a timely and effective manner.
              </p>
            </column>

            <column>
              <img
                src="/images/camera/iowa_motor_speedway_garage_selfie.jpg"
                width={"200px"}
                alt={
                  "Selfie of Sakura at the Iowa Motor Speedway Garage during an IndyCar race"
                }
              />
            </column>
          </column-container>
        </section>

        <section id={"notable-projects"} breakout full-width>
          <heading>
            <h1>Notable Projects</h1>
          </heading>

          <grid-container>
            <grid-item>
              <h1>SACR</h1>
              <hr />
              <img
                src={"images/rig-headers/SACR/R7.4 Full.png"}
                alt={"SACR R7.4 Full Logo"}
              />
              <p>
                SACR, or Sakura Advanced Character Rig, is my longest running
                project which started in 2019 under the name SAMR before taking
                on the SACR title in 2020
              </p>
              <a
                href={"https://github.com/SakuraSedaia/sakura-character-rig"}
                class={"btn"}
              >
                Github Repo
              </a>
            </grid-item>

            <grid-item>
              <h1>Rig Interface</h1>
              <hr />
              <img
                src={"images/rig-headers/rig-interface/rig-interface-3.png"}
                alt={"Rig Interface Logo V3"}
              />
              <p>
                The Rig Interface is my first big Python Project, working
                exclusively with the Blender Python API it contains several
                utilities and UI's for many versions of my Character Rig.
              </p>
              <a
                href={"https://github.com/SakuraSedaia/Sedaia-Rig-Interfaces"}
                class={"btn"}
              >
                Github Repo
              </a>
              {/* TODO: Add another button inline to take the user to the Asset Page for this*/}
            </grid-item>
          </grid-container>
        </section>

        <section id={"preferred-tooling"}>
          <heading>
            <h1>Preferred Tooling</h1>
          </heading>

          <grid-container>
            <grid-item>
              <h1>IDEs:</h1>
              <hr />
              <h2>
                <a
                  href={"https://www.jetbrains.com/pycharm/"}
                  target={"_blank"}
                  class={"link"}
                >
                  PyCharm
                </a>
                <p>Python and Web Development</p>
              </h2>
            </grid-item>

            <grid-item>
              <h1>3D Pipeline:</h1>
              <hr />
              <h2>
                <a
                  href={"https://www.blender.org/"}
                  target={"_blank"}
                  class={"link"}
                >
                  Blender
                </a>
              </h2>
              <p>3D Rendering, Modelling, and Rigging</p>
              <hr />
              <h2>
                <a
                  href={"https://www.blockbench.net/"}
                  target={"_blank"}
                  class={"link"}
                >
                  Blockbench
                </a>
              </h2>
              <p>Textures and Voxel Models</p>
            </grid-item>

            <grid-item>
              <h1>Video Editing:</h1>
              <hr />
              <h2>
                <a
                  href={
                    "https://www.blackmagicdesign.com/products/davinciresolve"
                  }
                  target={"_blank"}
                  class={"link"}
                >
                  Davinci Resolve
                </a>
              </h2>
              <p>Video Editing</p>
            </grid-item>

            <grid-item>
              <h1>Photo Editing:</h1>
              <hr />
              <h2>
                <a
                  href={
                    "https://www.blackmagicdesign.com/products/davinciresolve"
                  }
                  target={"_blank"}
                  class={"link"}
                >
                  Affinity Photo 2
                </a>
              </h2>
              <p>Photo Editing and Manipulation</p>
            </grid-item>
          </grid-container>
        </section>

        {/* TODO: Add Logos to each entry */}
        <section id={"technologies"}>
          <heading>
            <h1>My Technologies</h1>
          </heading>
          <column-container>
            <column split>
              <h3>Python</h3>
              <hr />
              <ul>
                <li>Blender Python API</li>
                <li>Python 3</li>
              </ul>
            </column>
            <column split>
              <h3>Web Dev</h3>
              <hr />
              <ul>
                <li>HTML</li>
                <li>SCSS</li>
                <li>CSS</li>
                <li>SolidJS</li>
                <li>JavaScript</li>
              </ul>
            </column>
            <column split>
              <h3>Other</h3>
              <hr />
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Blender</li>
                <li>Blockbench</li>
                <li>Davinci Resolve</li>
                <li>Affinity Photo 2</li>
                <li>Affinity Designer 2</li>
              </ul>
            </column>
          </column-container>
        </section>

        <section id={"my-resume"} breakout>
          <content-row>
            <span>
              Interested? Check out my Resume to get a more in depth profile on
              my work history!
            </span>
            <A href={"/resume"} class={"btn-invert"}>
              View Resume
            </A>
          </content-row>
        </section>
      </div>

      <Footer />
    </>
  );
}
export default About;
