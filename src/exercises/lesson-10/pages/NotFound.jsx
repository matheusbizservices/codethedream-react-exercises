import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>
        No page exists for <code>{pathname}</code>
      </p>
      <Link to="/">Go Home</Link>
    </section>
  );
}
