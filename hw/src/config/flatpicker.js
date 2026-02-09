//! Libs scripts
import iziToast from "izitoast";

//? Custom scripts
import { toastOptions } from "./izitoast";

//* Styles
import "izitoast/dist/css/iziToast.min.css";

export let userSelectDate = null;

export const flatpickerOptions = {
  dateFormat: "d-m-Y", // "Y-m-d" | "d-m-Y" | "F j, Y" | "H:i K"
  defaultDate: Date.now(), // new Date() | | "today"
  minDate: "today", // "today" | "2024-06-01" | new Date()
  onClose(data) {
      const today = new Date();
      userSelectDate = Date.parse(data[0]);
    if (userSelectDate < today) {
      iziToast.error(toastOptions);
      return;
    }
    iziToast.success(toastOptions);
    // btnSelector.removeAttribute("disabled");
  }
}