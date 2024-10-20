import { TPath, TRoute } from "../types/paths.types";

export const mainRoutesGenerator = (
  paths: TPath[],
  secondaryPaths: TPath[]
) => {
  const mainRoutes = routesGenerator(paths);
  const secondaryRoutes = routesGenerator(secondaryPaths);
  const result = [...mainRoutes, ...secondaryRoutes];

  return result;
};

const routesGenerator = (paths: TPath[]) => {
  const result = paths.reduce((accumulator: TRoute[], path: TPath) => {
    if (path.path && path.element) {
      accumulator.push({
        path: path.path,
        element: path.element,
      });
    }
    if (path.children) {
      path.children.forEach((item) => {
        if (item.path) {
          accumulator.push({
            path: item.path,
            element: item.element,
          });
        }
      });
    }
    return accumulator;
  }, []);
  return result;
};
