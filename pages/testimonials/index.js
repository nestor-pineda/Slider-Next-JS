import Slider from "../../components/Elements/Slider/Slider";
import RequestHelper from "../../helpers/RequestHelper";

export const getStaticProps = async () => {
  let content = await RequestHelper.GETrequest(
    process.env.API_URL +
      `/wp-json/wp/v2/posts?include[]=100&include[]=200&include[]=34&include[]=152&include[]=235`,
    {}
  ).then((result) => {
    return result.body;
  });

  return {
    props: {
      content: content,
    },

    revalidate: 60,
  };
};

// const myArray = [100, 200, 34, 152, 235];
let num = 100;
let num2 = 200;

const Testimonials = ({ content }) => {
  // console.log(content);
  return (
    <>
      <h1>This is the testimonial page</h1>
      {/* {content.map((item, i) => {
        return (
          <div
            key={item.id}
            dangerouslySetInnerHTML={{ __html: item.content.rendered }}
          ></div>
        );
      })} */}
      <Slider content={content} />
    </>
  );
};

export default Testimonials;
