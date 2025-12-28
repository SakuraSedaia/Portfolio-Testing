import Header from "~/components/Header.jsx";
import Footer from "~/components/Footer.jsx";

function Contact() {
  function copyEmailToClip() {
    const email = "sakura@sakura-sedaia.com";
    navigator.clipboard.writeText(email);

    window.alert("Copied Email to Clipboard");
  }
  return (
    <>
      <Header title="Contact" img="rigs" />
      <div class={"content-container"}>
        <section id={"contact"}>
          <content>
            <p>
              You can find me in my{" "}
              <a
                href="https://discord.gg/Qk4pfbG7Pf"
                target="_blank"
                class={"link"}
              >
                Discord Server
              </a>{" "}
              or for more professional communications, you can email me at{" "}
              <a class={"link"} onclick={copyEmailToClip}>
                sakura@sakura-sedaia.com
              </a>
            </p>
            <p>
              Mailing address is not shown for privacy and security reasons, and
              will be provided when absolutely required for business purposes.
            </p>
          </content>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
