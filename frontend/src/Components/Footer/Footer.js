import "./Footer.scss";

export default function Footer() {
  const name = "Marga Obrador A";
  let today = new Date();
  let year = today.getFullYear();
  return (
    <footer className="app-footer">
      <p>Created by {name}</p>
      <p>&copy; {year}</p>
    </footer>
  );
}
