import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import deleteArticle from "../../services/deleteArticle";

function ArticleAuthorButtons({ body, description, slug, tagList, title }) {
  const { headers, isAuth } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAuth) return alert("Faça login antes");

    const confirmation = window.confirm("Certeza que quer apagar essa publicação?");
    if (!confirmation) return;

    deleteArticle({ headers, slug })
      .then(() => navigate("/"))
      .catch(console.error);
  };

  return (
    <>
      <button
        className="btn btn-sm"
        style={{ color: "#d00" }}
        onClick={handleClick}
      >
        <i className="ion-trash-a"></i> Apagar publicação
      </button>{" "}
      <button className="btn btn-sm" style={{ color: "#777" }}>
        <Link
          className="nav-link"
          state={{ body, description, tagList, title }}
          to={`/editor/${slug}`}
        >
          <i className="ion-edit"></i> Alterar publicação
        </Link>
      </button>{" "}
    </>
  );
}

export default ArticleAuthorButtons;
