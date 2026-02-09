import flatpickr from "flatpickr";
import { flatpickerOptions, userSelectDate } from "./config/flatpicker";

import "flatpickr/dist/flatpickr.min.css";
import "./style.css";

const inputData = document.querySelector("#datatime-picker");
// const selector = ".js-timepicker";

// flatpickr(selector, flatpickerOptions);
flatpickr(inputData, flatpickerOptions);
