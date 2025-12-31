import Header from "~/components/Header.jsx";
import addonIndex from "./addon_index.json";
import { For, Show, createSignal } from "solid-js";
import Footer from "~/components/Footer.jsx";

function sacr() {
  const stable = addonIndex.stable[0];
  const stableInfo = stable.styles;
  const dev = addonIndex.dev[0];
  const devInfo = dev.styles;

  // Github Info
  const downloadPath = "releases/download/";
  const tagPath = "releases/tag/";
  const treePath = "tree/";

  // Signals
  const [stableIndex, setStableIndex] = createSignal(0);
  const [devIndex, setDevIndex] = createSignal(0);

  const updateBuild = (data, event) => {
    var branch = data[0];
    var index = data[1];
    var build = data[2];

    if (branch == "stable") {
      const newStyle = setStableIndex(() => index);

      var tabs = document.getElementById("versionStable").children;
      for (var i = 0; i < tabs.length; i++) {
        if (i == index) {
          tabs[index].classList.add("tab-active");
        } else {
          tabs[i].classList.remove("tab-active");
        }
      }
    } else {
      const newStyle = setDevIndex(() => index);

      var tabs = document.getElementById("versionDev").children;
      for (var i = 0; i < tabs.length; i++) {
        if (i == index) {
          tabs[index].classList.add("tab-active");
        } else {
          tabs[i].classList.remove("tab-active");
        }
      }
    }
  };

  return (
    <div>
      <Header title="Sakura's Blender Rig Interface" img="sr-gui" />
			<div class={"content-container"}>
				<section id={"about"}>
					<heading>
						<h1>
							About the Sedaia Rig Interface
						</h1>
					</heading>
					<content>
						<p>Sakura's Advanced Character Rig is </p>
					</content>
				</section>
			</div>
      <Footer />
    </div>
  );
}
export default sacr;
