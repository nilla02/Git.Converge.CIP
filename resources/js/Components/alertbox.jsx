// SweetAlertWrapper.js
import React from "react";
import swal from "sweetalert";

const SweetAlertWrapper = ({ title, text, type, onConfirm }) => {
  swal({
    title,
    text,
    icon: type,
    buttons: true,
    dangerMode: type === "error",
  }).then((willConfirm) => {
    if (willConfirm) {
      onConfirm();
    }
  });

  return null; // Return null because this component doesn't render anything
};

export default SweetAlertWrapper;
