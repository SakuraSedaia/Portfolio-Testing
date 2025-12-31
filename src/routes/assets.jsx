import Header from "~/components/Header.jsx";
import "./assets.scss";
import Footer from "~/components/Footer.jsx";

function assets() {
  return (
    <>
      <Header title="Assets and Extensions" img="renders" />

      <div class={"content-container"}>
        <section class={"about"}>
          <p>
            Here you will find all publicly available assets, addons, and
            extensions developed and released by Sakura
          </p>
        </section>

        <section>
          <heading>
            <h1>Featured Assets</h1>
          </heading>

          <column-container>
            <column>
              <img
                src={"images/rig-headers/SACR/R7.4 Full.png"}
                alt={"Sakura's Advanced Character Rig Logo"}
              />
              <hr />
              <p>
                Sakura's Advanced Character Rig is a Minecraft Character rig
                developed for use in Blender 3D with the original purpose of
                being a lightweight, highly customizable minecraft rig able to
                be used on all levels of hardware.
              </p>
              <a class={"btn"} href={"/asset/sakura-character-rig"}>
                See Rig Page
              </a>
            </column>

            <column>
              <img
                src={"images/rig-headers/rig-interface/rig-interface-3.png"}
                alt={"Sakura's Rig Interface Logo Version 3"}
              />
              <hr />
              <p>
                Sakura's Advanced Character Rig is a Minecraft Character rig
                developed for use in Blender 3D with the original purpose of
                being a lightweight, highly customizable minecraft rig able to
                be used on all levels of hardware.
              </p>
              <div class="btn-centered">
                <a class={"btn"} href={"/asset/sakura-rig-interface"}>
                  See Extension Page
                </a>
                <a
                  class={"btn"}
                  href={
                    "https://extensions.blender.org/add-ons/sakura-rig-gui/"
                  }
                >
                  Blender Extensions
                </a>
              </div>
            </column>
          </column-container>
        </section>

        <section class={"assets"}>
          <heading>
            <h1>Downloadable Assets</h1>
          </heading>

          <grid-container>
						{/* Wolf Rig */}
            <grid-item>
              <h2>Wolf Rig</h2>
              <hr />
              <p>
                Originally Developed for Frostlight Studios, a small indie
                animation group, the Wolf Rig is a simple asset that has the
                option of every vanilla wolf texture
              </p>
              <a class={"btn"}>Download</a>
            </grid-item>


						{/* Sheep Rig */}
            <grid-item>
              <h2>Sheep Rig</h2>
              <hr />
              <p>
                This Sheep rig is one of several animal rigs developed by
                Sakura, it was made prior to the adoption of Python UI's by
                Sakura for all his rigs.
              </p>
              <a class={"btn"} href={"/"}>
                Download
              </a>
            </grid-item>


						{/* Sakura Vanilla Tools and Weapons */}
						<grid-item>
              <h2>Tool and Weapon pack</h2>
              <hr />
              <p>
                A full library of Minecraft Tools and Weapons, prepped for use with Blender's built-in asset library.
              </p>
              <a class={"btn"} onclick={downloadFile('/lib/blender/sakura_vanilla_tools_and_weapons.blend')}>
                Download
              </a>
            </grid-item>


						{/* Sheep Rig */}
						<grid-item>
              <h2>Sheep Rig</h2>
              <hr />
              <p>
                This Sheep rig is one of several animal rigs developed by
                Sakura, it was made prior to the adoption of Python UI's by
                Sakura for all his rigs.
              </p>
              <a class={"btn"} href={"/"}>
                Download
              </a>
            </grid-item>


						{/* Sheep Rig */}
						<grid-item>
              <h2>Sheep Rig</h2>
              <hr />
              <p>
                This Sheep rig is one of several animal rigs developed by
                Sakura, it was made prior to the adoption of Python UI's by
                Sakura for all his rigs.
              </p>
              <a class={"btn"} href={"/"}>
                Download
              </a>
            </grid-item>
          </grid-container>
        </section>
        <hr />
        <section class="extensions">
          <heading>
            <h1>Extensions</h1>
          </heading>

          <grid-container>
            <grid-item>
              <h2>Coming Soon!</h2>
            </grid-item>
          </grid-container>
        </section>
      </div>

      <Footer />
    </>
  );
}
export default assets;
