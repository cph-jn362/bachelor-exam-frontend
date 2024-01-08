import FlatBanner from "../../../media/flat-design/banner-flat.png"
import SkeuoBanner from "../../../media/skeuomorphism/banner-skeuo.png"
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";


const Banner = () => {
    const {theme} = useSelector((state: RootState) => state.style);
    const currentBanner = theme === "flat" ? FlatBanner : SkeuoBanner;
    return(
        <img src={currentBanner} alt="banner" style={{maxWidth: "100%"}}/>
    )
}

export default Banner;