import React from "react"
import styled from "styled-components"
import Text from "components/Text"
import {Grid, Column} from "components/Grid"

const Hero = styled(Grid)`
  padding: 8rem 2rem;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`

const StyledSection = styled(Grid)`
  flex-direction: column;
  align-items: left;
  justify-content: left;
  padding: 1rem 2rem;
`

const WarmStyledSection = styled(StyledSection)`
  background-color: #FAEDE7;
`

export default props => (
  <section>
  <Hero>
  <Column mdOffset={1}>
  <Text type="headline"> Who is State Matters? </Text>
  <Text type="subtitle"> We are an eclectic group of artists, designers, developers, policy wonks, and writers. </Text>
  </Column>
  </Hero>

  <StyledSection>
  <Column mdOffset={1}>
  <Text type="eyebrow"> What do we do? </Text>
  <Text type="headline"> We create high-quality videos that:</Text>
  <Text type="body"> Explain the most impactful, state legislation being proposed in Springfield </Text>
  <Text type="body"> Explain the legislative process and how government operates </Text>
  <Text type="body"> inform constituents how to engage with state legislators. </Text>
  </Column>
  </StyledSection>
  <WarmStyledSection>
  <Column mdOffset={2} md={6}>
  <Text type="eyebrow"> Work with us </Text>
  <Text type="headline"> Our team is up for a challenge and we’re always adding new voices and perspectives to our team.</Text>
  <Text type="body"> Are you an artist who wants to make a difference? We are too! Let’s join forces. </Text>


    </Column>
  </WarmStyledSection>
  </section>
)
