import { Link } from "react-router-dom";
import SourceCodeLink from "../SourceCodeLink";

function Footer() {
  return (
    <div className="container">
      <Link to="/" className="logo-font">
        pousadinha
      </Link>
      <span className="attribution">
        Pousadas que se conectam com sua viagem.
      </span>

      <SourceCodeLink right />
    </div>
  );
}

export default Footer;
