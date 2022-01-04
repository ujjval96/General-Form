import React from "react";
import FlexGrid from '@tds/core-flex-grid';
import Box from '@tds/core-box';
import Heading from '@tds/core-heading';
import Text from "@tds/core-text";
import Paragraph from '@tds/core-paragraph';
import TextButton from '@tds/core-text-button';
import ChevronLink from '@tds/core-chevron-link';
import HairlineDivider from '@tds/core-hairline-divider'
import "./info.css"

const Info = () => {
  return (
    <FlexGrid>
      <FlexGrid.Row xsReverse={true} smReverse={true} mdReverse={false}>

        <FlexGrid.Col xs={12} md={6}>
          <Box between={3} vertical={8} horizontal={8}>
            <Box >
              <Heading level="h2" tag="h2">
                Travel & Romaing
              </Heading>
            </Box>
            <Text>
              Save on reliable roaming with the confidence of cost-certainty to more than 200 U.S. and international destinations.
            </Text>
            <Box>

              <TextButton>See all Travel & Roaming</TextButton>
            </Box>

          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={12} md={6}>
          <Box vertical={6} horizontal={8}>

            <Paragraph>I'm travelling to:</Paragraph>
            <Box vertical={3}>

              <ChevronLink href="#" variant="secondary">
                Managed Videos
              </ChevronLink>
              <Box vertical={3}>

              <HairlineDivider />
              </Box>
            </Box>
            <Box vertical={0}>
              <ChevronLink variant="secondary" href="#">Telepresence</ChevronLink >
              <Box vertical={3}>
                <HairlineDivider />
              </Box>
            </Box>
            <Box vertical={3}>

              <ChevronLink variant="secondary" href="#">Web Conferencing</ChevronLink >
             
            </Box>
          </Box>


        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
  )
}

export default Info;
