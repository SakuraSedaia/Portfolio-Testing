
function Header(props) {
  var bgImg =
    "background-image: url(/images/headers/" + props.background + ".jpg";

  return (
    <div class={"header-container"}>
      <header>
        <div class={"header-sizing"} style={bgImg}>
          <div class={"header-content"}>
            <div class={"title"}>
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;