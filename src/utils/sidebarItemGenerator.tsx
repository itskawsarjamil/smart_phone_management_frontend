import { NavLink } from "react-router-dom";
import { TItem, TPath } from "../types/paths.types";

export const sideBarItemGenerator = (
  paths: TPath[],
  secondaryPath: TPath[],
  role: string
) => {
  const mainItem = itemGenerator(paths, role);
  const sharedItem = itemGenerator(secondaryPath, role);
  const result = [...mainItem, ...sharedItem];
  return result;
};

const itemGenerator = (paths: TPath[], role: string) => {
  const result = paths.reduce((acc: TItem[], path: TPath) => {
    if (path.name && path.path) {
      acc.push({
        key: path.name,
        label: (
          <NavLink to={`/${role}/${path.path}`}>
            {path.name.toUpperCase()}
          </NavLink>
        ),
      });
    }
    if (path.children) {
      acc.push({
        key: path.name!,
        label: path.name?.toUpperCase(),
        children: path.children.map((item) => {
          if (item.name) {
            return {
              key: item.name,
              label: (
                <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
              ),
            };
          }
        }),
      });
    }
    return acc;
  }, []);
  return result;
};
