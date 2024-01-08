import ProductPageCSS from "./productpage.module.css";

const Productpage = () => {

  return (
    <div className={ProductPageCSS.layout}>
      <div className={ProductPageCSS.content}>
        <div style={{ width: "25em" }}>
          <h1>Title</h1>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            nisi accusamus ipsum, laboriosam, magnam optio ea sint sed commodi
            repellendus non magni quas cum deleniti temporibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            nisi accusamus ipsum, laboriosam, magnam optio ea sint sed commodi
            repellendus non magni quas cum deleniti temporibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            nisi accusamus ipsum, laboriosam, magnam optio ea sint sed commodi
            repellendus non magni quas cum deleniti temporibus?
          </p>
        </div>
        <div style={{ width: "40em" }}></div>
      </div>
    </div>
  );
};

export default Productpage;
