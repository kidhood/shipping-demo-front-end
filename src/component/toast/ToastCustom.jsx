import React from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { toastStyleSelector } from "../../redux/globalConfigSlice";
import clsx from "clsx";
export default function ToastCustom() {
  const style = useSelector(toastStyleSelector);
  return <ToastContainer theme={"light"} className={clsx(style.name)} />;
}
