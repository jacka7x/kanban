
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType, ReactElement } from "react";

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute = ({
  component,
  ...args
}: any): ReactElement => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
      </div>
    ),
  })

  return <Component {...args} />;
}