import RequestHelper from "../helpers/RequestHelper";
import LayoutBody from "../components/Layout/LayoutBody/LayoutBody";
import {
  Col,
  Container,
  Row,
} from "../components/Layout/LayoutGrid/LayoutGrid";
import SectionHeader from "../components/Typography/SectionHeader/SectionHeader";
import ButtonGroup from "../components/Elements/ButtonGroup/ButtonGroup";
import Link from "../components/Elements/Link/Link";
import WysiwigContent from "../components/Typography/WysiwigContent/WysiwigContent";
import SectionCentered from "../components/Typography/SectionCentered/SectionCentered";

export const getStaticProps = async () => {
  let content = await RequestHelper.GETrequest(
    process.env.API_URL + "/wp-json/wp/v2/pages/2333",
    // process.env.API_URL + "/wp-json/wp/v2/posts/?orderby=rand",
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

const Page = ({ content }) => {
  console.log(content);
  return (
    <LayoutBody>
      <SectionCentered>
        <Container>
          <Row>
            <Col xs={12}>
              <SectionHeader index={1}>Main page</SectionHeader>
              <WysiwigContent content={content.content.rendered} />
              <ButtonGroup>
                <Link
                  style="button"
                  link={{
                    type: "internal",
                    label: "See opinions",
                    path: "/testimonials",
                  }}
                />
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </SectionCentered>
    </LayoutBody>
  );
};

export default Page;
