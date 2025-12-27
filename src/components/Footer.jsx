import {For, Show} from "solid-js";

import Routes from "./routes.json";

function Footer() {
  return (
    <footer>
      <grid-container>
        <nav>
          <ul>
            <h2>Pages</h2>
            <For each={Routes} fallback={<li>Loading Footer...</li>}>
              {(nav, n) => (
                <Show when={nav.show == true}>
                  <li><a href={"/" + nav.path}>{nav.page}</a>
                    <Show when={nav.subnav == true}>
                      <ul>
                        <For each={nav.subpages} fallback={<li><a>Loading...</a></li>}>
                          {(subnav, s) => (
                            <Show when={subnav.show == true}>
                              <li><a href={"/" + subnav.path}>{subnav.page}</a></li>
                            </Show>
                          )}
                        </For>
                      </ul>
                    </Show>
                  </li>
                </Show>
              )}
            </For>
          </ul>
        </nav>

        <nav>
          <ul>
            <h2>Socials</h2>
            <li><a href={"https://github.com/SakuraSedaia"}>Github</a></li>
            <li><a href={"https://youtube.com/c/SakuraSedaia"}>YouTube</a></li>
            <li><a href={"https://discord.gg/Qk4pfbG7Pf"}>Discord</a></li>
          </ul>
        </nav>
      </grid-container>
    </footer>
  );
}
export default Footer;