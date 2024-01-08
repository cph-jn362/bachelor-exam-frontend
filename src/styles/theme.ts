import Woodenbg from "../media/skeuomorphism/wooden-textures-background.png";
import FlatBanner from "../media/flat-design/banner-flat.png";
import SkeuoBanner from "../media/skeuomorphism/banner-skeuo.png";
import Papertexture from "../media/skeuomorphism/paper-texture.png";


export const flatTheme = {
  text: "rgb(51, 51, 51)",
  text2: "rgb(30, 131, 247)",
  text3: "rgb(255, 255, 255)",
  bg: "rgb(255, 255, 255)",
  bg2: "rgb(30, 131, 247)",
  paragraph_font: "Roboto",
  header_bg: "rgb(255, 255, 255)",

  // -- headings --
  h1_size: "56px",
  h2_size: "32px",
  heading_font: "Roboto Condensed",

  // -- buttons --
  border_radius: "8px",
  primary_btn_bg: "rgb(30, 63, 247)",
  primary_btn_border: "2px solid rgb(30, 63, 247)",
  secondary_btn_bg: "rgb(255, 255, 255)",
  secondary_btn_border: "2px solid rgb(30, 131, 247)",
  bg_image: "",
  banner_image: `${FlatBanner}`,

  // -- filters --
  filters_border: "2px solid rgb(30, 131, 247)",
  filters_bg: "white",
  filters_container_bg: "",
  filter_icon: "",
  filter_margin: "4em",
  filter_padding: "1em 1em",
  filter_color: "rgb(30, 131, 247)",
  filter_input_bg: "rgb(255, 255, 255)",

  // -- inputs --
  input_bg: "",
  border_buttom: "",

  // -- Textarea
  textarea_border: "2px solid rgb(30, 131, 247)",

  // -- Image frame --
  img_frame_border: "0px",

  // -- Price tag --
  price_tag_bg: "",
  price_tag_border: "",
  price_size: "32px",
  discount_bg: "rgb(30, 131, 247)",
};

export const skeuoTheme = {
  text: "rgb(255, 255, 255)",
  text2: "rgb(255, 255, 255)",
  text3: "rgb(255, 255, 255)",
  bg: "linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.85) 100%)",
  bg2: "linear-gradient(180deg, #C18F54 0%, #AC722F 0.01%, #6C2E1A 100%)",
  paragraph_font: "Open Sans",
  header_bg: "linear-gradient(180deg, #C18F54 0%, #AC722F 0.01%, #6C2E1A 100%)",

  // -- headings --
  h1_size: "46px",
  h2_size: "32px",
  heading_font: "Open Sans",

  // -- buttons --
  border_radius: "0px",
  btn_boxshadow: "0px -2px 2px 2px rgba(0, 0, 0, 0.30), 0px 5px 4px -1px rgba(255, 255, 255, 0.50) inset",
  primary_btn_bg: "linear-gradient(180deg, #E68047 0%, #804727 50.84%)",
  primary_btn_border: "none",
  secondary_btn_bg: "linear-gradient(180deg, #E6B147 0%, #806227 50.84%)",
  secondary_btn_border: "none",
  bg_image: `${Woodenbg}`,
  banner_image: `${SkeuoBanner}`,

  // -- filters --
  filters_border: "12px solid #261311",
  filters_bg: "rgba(0, 0, 0, 0)",
  filters_container_bg: `${Papertexture}`,
  filter_icon: "none",
  filter_margin: "0",
  filter_padding: "1em 0",
  filter_color: "rgb(38, 20, 15)",


  // -- input --
  input_bg: "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#804727), to(#E68047))",
  border_bottom: "1px solid rgb(38, 20, 15)",


  // -- Textarea
  textarea_border: "2px solid rgb(38, 20, 15)",

  // -- Image frame --
  img_frame_border: "12px solid #261311",

  // -- Price tag --
  price_tag_bg: "linear-gradient(180deg, #26140f 0%, #120907 100%)",
  price_tag_border: "4px solid #261311",
  price_size: "16px",
  discount_bg: "radial-gradient(210.88% 210.88% at 50% 50.34%, #E6B147 0%, #806227 33.78%, #C8A96A 67.04%)",
};
