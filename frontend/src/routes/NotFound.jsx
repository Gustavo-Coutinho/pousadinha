import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <Link to="/">Vá para o início</Link>
    </div>
  );
}

export default NotFound;
