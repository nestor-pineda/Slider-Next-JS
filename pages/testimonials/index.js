import Slider from "../../components/Elements/Slider/Slider";

import LayoutBody from "../../components/Layout/LayoutBody/LayoutBody";
import {
  Col,
  Container,
  Row,
} from "../../components/Layout/LayoutGrid/LayoutGrid";
import SectionCentered from "../../components/Typography/SectionCentered/SectionCentered";
import RequestHelper from "../../helpers/RequestHelper";

/* We use the GETrequest helper function to fetch our desired posts*/
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

/* Hard coded titles for each post */
const titles = [
  { id: 235, mainTitle: "Lorem ipsum dolor sit amet, consectetur" },
  { id: 200, mainTitle: "Sed do eiusmod tempor incididunt ut labore" },
  { id: 152, mainTitle: "Dolore magna aliqua ut enim ad minim" },
  { id: 100, mainTitle: "Quis nostrud exercitation ullamco laboris" },
  { id: 34, mainTitle: "Aliquip ex ea commodo consequat duis aute" },
];

const Testimonials = ({ content }) => {
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
