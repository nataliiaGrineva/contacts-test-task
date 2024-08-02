import { useRoutes } from "react-router-dom";
import { routes } from "../routes/routes";
import { RouterContainer } from "./styled";

export const RouterLayout = () => {
    const routeElement = useRoutes(routes);

    return <RouterContainer>{routeElement}</RouterContainer>;
}