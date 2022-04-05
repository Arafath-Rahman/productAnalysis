import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className="hover:text-red-500"
        style={{ textDecoration: match ? "underline" : "none", marginRight:'30px' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;