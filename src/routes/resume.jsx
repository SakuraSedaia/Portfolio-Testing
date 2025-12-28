import Header from "~/components/Header.jsx";

function Resume() {
  return (
    <>
      <Header onlyNav={true} />
      <a
        class={"link"}
        href={"/"}
        style={
          "margin: 2em; display: block; font-size: 16pt; width: fit-content;"
        }
      >
        &lt; Return to Home Page
      </a>
      <center style={"font-size: 24px; padding-block: 8rem; font-weight: 600;"}>
        Resume Coming Soon!
      </center>
    </>
  );
}
export default Resume;
