import Slider from "../../components/Elements/Slider/Slider";
import RequestHelper from "../../helpers/RequestHelper";

export const getStaticProps = async () => {
  let content = await RequestHelper.GETrequest(
    // process.env.API_URL + "/wp-json/wp/v2/pages?include=100",
    // process.env.API_URL + "/wp-json/wp/v2/posts?include=235" `/wp-json/wp/v2/posts?include=${num}`,
    process.env.API_URL + `/wp-json/wp/v2/posts?include=235+?include=135`,
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
  console.log(content);
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
      <Slider />
    </>
  );
};

export default Testimonials;
