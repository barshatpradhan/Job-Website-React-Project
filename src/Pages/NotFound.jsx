import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse
        tempore rem adipisci totam saepe consequuntur obcaecati a. Aperiam ea
        ullam aspernatur? Provident ab qui veniam accusamus obcaecati minus
        possimus?
      </p>

      <p>Go to the <Link to="/">HomePage</Link>.</p>
    </div>
  );
}
