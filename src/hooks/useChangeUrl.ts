import { useLocation } from "react-router-dom";
import useAppDispatch from "./useAppDispatch";
import { useEffect } from "react";
import { setCurrentPage } from "src/store";

const useChangeUrl = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(setCurrentPage(pathname));
  }, [dispatch, pathname]);
};

export default useChangeUrl;
