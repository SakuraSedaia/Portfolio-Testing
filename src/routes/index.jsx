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
          <heading>
            <h1>Who am I?</h1>
          </heading>

          <column-container>
            <column>
              <p>
                I am a {new Date().getFullYear() - 2003} year old, self taught{" "}
                <i>Software Developer</i> and novice UI Designer specializing in
                SolidJS, SCSS, and Python based projects, and currently work
                alone on a few passion projects including this website, an
                extension for Blender, and other small utilities for helping
                with those projects.
              </p>
            </column>

            <column bg-color shadow>
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

        <section id={"notable-projects"} breakout accent>
          <heading>
            <h1>Notable Projects</h1>
          </heading>

          <grid-container>
            <grid-item>
              <h1>Portfolio Website</h1>
              <hr />
              <p>
                This very website you are on now is one of my latest, and most
                complex projects so far. It was created due to a desire to have
                a more responsive site using a more modern development
                framework, in this case, SolidJS and SCSS
              </p>
              <a
                href={"https://github.com/SakuraSedaia/sakura-portfolio"}
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

          <column-container>
            <column>
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
              </h2>
              <p>
                Starting December 2025, I made the jump over to PyCharm where I
                now do all my projects.
              </p>
              <hr />
              <h2>
                <a
                  href={"https://code.visualstudio.com/"}
                  target={"_blank"}
                  class={"link"}
                >
                  Microsoft VS Code
                </a>
              </h2>
              <p>
                VS Code is the main editor I used before switching to Pycharm
                due to it's ease of use for developing Blender Extensions
              </p>
            </column>

            <column>
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
              <p>
                Blender is a free and open source 3D creation suite, and is used
                for my rigging and asset creation projects.
              </p>
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
              <p>
                Blockbench is a free Voxel editor tailored for working with
                Minecraft Models and Textures.
              </p>
            </column>

            <column>
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
              <p>Davinci Resolve is a professional grade video editing suite</p>
              <hr />
              <h1>Photo Editing:</h1>
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
              <p>
                Affinity Photo 2 is the predecessor to Canva Affinity, and is my
                preferred photo editor
              </p>
            </column>
          </column-container>
        </section>

        {/* TODO: Add Logos to each entry */}
        <section id={"my-resume"} breakout accent>
          <div class={"content"}>
            <span>
              Interested? Check out my Resume to get a more in depth profile on
              my work history!
            </span>
            <A href={"/resume"} class={"btn-invert"}>
              View Resume
            </A>
          </div>
        </section>

        <section id={"technologies"}>
          <heading>
            <h1>My Technologies</h1>
          </heading>
          <column-container flow>
            <ul>
              <li>Blender 3D</li>
              <li>Blender Python API</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>CSS</li>
              <li>SolidJS</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Blockbench</li>
              <li>Davinci Resolve</li>
              <li>Affinity Photo 2</li>
            </ul>
          </column-container>
        </section>
      </div>

      <Footer />
    </>
  );
}
export default About;
