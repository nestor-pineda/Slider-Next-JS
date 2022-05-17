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

export async function getStaticProps() {
  let content = await RequestHelper.GETrequest(
    process.env.API_URL + "/wp-json/wp/v2/pages/2333",
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
}

export default function Page({ content }) {
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
                    path: "/tesimonials",
                  }}
                />
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </SectionCentered>
    </LayoutBody>
  );
}
