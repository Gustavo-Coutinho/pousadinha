function SourceCodeLink({ left, right }) {
  const position = left ? "left" : right ? "right" : "";

  return (
    <ul className={`nav navbar-nav pull-xs-${position}`}>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://github.com/Gustavo-Coutinho/"
        >
          <i className="ion-social-github"></i> Github
        </a>
      </li>
    </ul>
  );
}

export default SourceCodeLink;
