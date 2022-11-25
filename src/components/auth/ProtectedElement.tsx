
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType, ReactElement } from "react";

// interface ProtectedRouteProps {
//   component: ComponentType;
// }

export const ProtectedElement = ({
  component,
  ...args
}: any): ReactElement => {

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <p>REDIRECTING-PROTECTED</p>
    ),
  })

  return <Component {...args} />;
}
