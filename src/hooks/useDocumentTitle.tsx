import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title}-S.P.M.D.`;
  }, [title]);
};

export default useDocumentTitle;
