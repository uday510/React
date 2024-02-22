import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <p style={{ textAlign: "center" }}>
        {err.data}
      </p>
    </div>
  )
}

export default Error