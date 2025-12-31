import Header from "~/components/Header.jsx";
import rigIndex from "./sacr_index.json";
import { For, Show, createSignal } from "solid-js";
import { NoHydration } from "solid-js/web";

function sacr() {
  const stable = rigIndex.stable[0];
  const stableInfo = stable.styles;
  const dev = rigIndex.dev[0];
  const devInfo = dev.styles;

  // GitHub Info
  const downloadPath = "releases/download/";
  const tagPath = "releases/tag/";

  // Signals
  const [stableIndex, setStableIndex] = createSignal(0);
  const [devIndex, setDevIndex] = createSignal(0);

  const updateBuild = (data, event) => {
    let branch = data[0];
    let index = data[1];
    let build = data[2];

    if (branch === "stable") {
      const newStyle = setStableIndex(() => index);

      let tabs = document.getElementById("versionStable").children;
      for (let i = 0; i < tabs.length; i++) {
        if (i === index) {
          tabs[index].classList.add("tab-active");
        } else {
          tabs[i].classList.remove("tab-active");
        }
      }
    } else {
      const newStyle = setDevIndex(() => index);

      let tabs = document.getElementById("versionDev").children;
      for (var i = 0; i < tabs.length; i++) {
        if (i === index) {
          tabs[index].classList.add("tab-active");
        } else {
          tabs[i].classList.remove("tab-active");
        }
      }
    }
  };

  function updateStyleDev() {
    var selectVal = document.getElementById("devSelect").value;
    const newStyle = setDevStyle(() => selectVal);
  }

  return (
    <>
      <Header title="Sakura Minecraft Character Rig" img="sacr" />

      <div class={"content-container"}>
				<section id={"about"}>
					<heading>
						<h1>
							About SACR
						</h1>
					</heading>
					<standard-container>
						<p>Sakura's Advanced Character Rig is a lightweight and highly customizable rig for <a href={"https://blender.org/"} class={"link"} target={"_blank"}>Blender 3D</a>, and has been developed since early 2019. The current build, R7.4 was originally started as Revision 3 back in 2021, and has grown through various forms through the years, and now is fully integrated with a UI Extension for greater customizability</p>
					</standard-container>

				</section>

				<section id={"downloads"}>
					<heading>
						<h1>Downloads</h1>
					</heading>
					<column-container>
						<column id={"stable"}>
							<h2>Stable</h2>
							<h3>SACR {stable.version}</h3>
							<p>Content coming soon</p>
						</column>
						<Show when={dev.enabled}>
							<column id={"dev"}>
								<h2>Development Branch</h2>
								<p>Content coming soon</p>
							</column>
						</Show>
					</column-container>
				</section>

				<section id={"instructions"}>
					<heading>
						<h1>Instructions</h1>
					</heading>
					<standard-container>
						<p>This rig is available in two places, here and through it's associated addon</p>
					</standard-container>
				</section>
			</div>
    </>
  );
}
export default sacr;
