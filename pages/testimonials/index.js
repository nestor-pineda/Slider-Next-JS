import Slider from "../../components/Elements/Slider/Slider";
import LayoutBody from "../../components/Layout/LayoutBody/LayoutBody";
import {
  Col,
  Container,
  Row,
} from "../../components/Layout/LayoutGrid/LayoutGrid";
import SectionCentered from "../../components/Typography/SectionCentered/SectionCentered";
import RequestHelper from "../../helpers/RequestHelper";

export const getStaticProps = async () => {
  let content = await RequestHelper.GETrequest(
    process.env.API_URL +
      `/wp-json/wp/v2/posts?include[]=100&include[]=200&include[]=34&include[]=152&include[]=235&include[]=56`,
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

const titles = [
  { title: "This is a hard coded title for post 235" },
  { title: "This is a hard coded title for post 200" },
  { title: "This is a hard coded title for post 152" },
  { title: "This is a hard coded title for post 100" },
  { title: "This is a hard coded title for post 34" },
  { title: "This is a hard coded title for post 56" },
];

const Testimonials = ({ content }) => {
  // console.log(content);
  return (
    <LayoutBody>
      <SectionCentered>
        <Container>
          <Row>
            <Col xs={12}>
              <Slider content={content} titles={titles} />
            </Col>
          </Row>
        </Container>
      </SectionCentered>
    </LayoutBody>
  );
};

export default Testimonials;
