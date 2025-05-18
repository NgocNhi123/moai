import { background, border, Dialog, shadow } from "../../../../../core";

Dialog.Pane.styles.outset = [
  shadow.boxStrong,
  background.strong,
  border.radius,
].join(" ");
