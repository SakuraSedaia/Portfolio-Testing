import Header from "~/components/Header";
import "./index.scss";
import Footer from "~/components/Footer.jsx";
import { A } from "@solidjs/router";

function About() {
  return (
    <>
      <Header
        title="Sakura Sedaia"
        background="about"
        desc="Freelance Software Developer and 3D Artist"
      />

      <div class={"content-container"}>
        <section class={"about"}>
          <heading>
            <h1>Who am I?</h1>
          </heading>
          {/* Who am I? */}
          <column-container>
            <column>
              <p>
                I am a {new Date().getFullYear() - 2003} year old, self taught{" "}
                <i>Software Developer</i> specializing in SolidJS, SCSS, and
                Python based projects, and currently work alone on a few passion
                projects including this website, an extension for Blender, and
                other small utilities for helping with those projects.
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

        <section class={"notable-projects"}>
          <heading>
            <h1>Notable Projects</h1>
          </heading>

          <grid-container>
            <grid-item>
              <h1>Portfolio Website</h1>
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

        <section class={"preferred-tooling"}>
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

        <section class={"resume"} breakout accent>
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

        <section class={"story"}>
          {/* Story */}
          <heading>
            <h1>My Story</h1>
          </heading>
          <p>
            I got my start in computer graphics in early 2015 when I was
            introduced to an open source 3D tool suite called Blender, and from
            there my skills would gradually grow into where I am today.
            Throughout middle school I would focus a lot on building my 3D
            Rendering skills, and would eventually begin experimenting with
            graphic design and photo editing in 2018 to enhance my renders even
            further and create my own graphics for my Youtube Channel.
          </p>
          <p>
            Those carried me for a good 2 years before in High School, I would
            be introduced to the world of HTML by a friend of mine, and I
            started experimenting and learning how to code and build plain HTML
            CSS sites from scratch. At the start I never touched Javascript,
            though after about a year of practice I began to experiment more
            with JS and making random pointless projects to learn different
            aspects of HTML manipulation using JavaScript functions.
          </p>
          <p>
            During the latter years of High School I would take two courses
            which progressed my skill-set further, those being an Adobe
            Dreamweaver class and a Graphic Design class. In my Dreamweaver
            class I began learning the basics of using Adobe Dreamweaver for
            Website development, though now-a-days I favor Jetbrains PyCharm
            over Dreamweaver due to the enhanced toolset. My Graphic Design
            class was more learning the essentials of color theory and Scalable
            Vector Design.
          </p>
          <p>
            Towards the middle of my Senior year in High School I would begin
            developing my first real big asset for Blender, and that would be my{" "}
            <a class={"link"} href={"/rig/sakura-character-rig"}>
              Advanced Character Rig
            </a>{" "}
            for Blender 2.8, which would be a continuous and never-ending
            project that is now currently on Revision 7 with Revision 8 in
            development, and in late 2025 I would begin working more seriously
            to learn Python to create a new controller interface for better
            managing the rig, skins, and adding more utilities into Blender.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
export default About;
