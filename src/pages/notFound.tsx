import { Button, Result } from "antd";
import { Link, useLocation } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

const NotFound = () => {
  useDocumentTitle("Not found");

  const location = useLocation();
  return (
    <Result
      status="warning"
      title={` ${location.pathname} is not a valid URL path`}
      extra={
        <Link to={"/"}>
          <Button type="primary" key="console">
            Go to HOME
          </Button>
        </Link>
      }
    />
  );
};

export default NotFound;
