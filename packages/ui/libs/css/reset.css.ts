import { globalStyle } from "@vanilla-extract/css";
import { nanumGothicMedium } from "./text.css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  border: 0,

  fontSize: "100%",
  verticalAlign: "baseline",
  lineHeight: "150%",
  fontFamily: nanumGothicMedium,
});

globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  }
);

globalStyle("nav ul", {
  listStyle: "none",
});

globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote:before, blockquote:after, q:before, q:after", {
  content: "",
});

globalStyle("a", {
  margin: 0,
  padding: 0,
  fontSize: "100%",
  verticalAlign: "baseline",
  background: "transparent",
});