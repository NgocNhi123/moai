import { background, border, shadow, Popover } from "../../../../../core";
import s from "./popover.module.css";

Popover.styles.outset = {
  content: [shadow.boxStrong, border.radius, background.strong].join(" "),
  arrow: s.arrow,
};
