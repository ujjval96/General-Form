import React from "react";
import FlexGrid from '@tds/core-flex-grid';
import Box from '@tds/core-box';
import Heading from '@tds/core-heading';
import Text from "@tds/core-text";
import Paragraph from '@tds/core-paragraph'

const Info = () => {
  return (
    <FlexGrid>
      <FlexGrid.Row xsReverse={true} smReverse={true} mdReverse={false}>

        <FlexGrid.Col xs={12} md={6}>
          <Box between={4} vertical={8} horizontal={8}>
            <Box between={3}>
              <Heading level="h2" tag="h2">
                Travel & Romaing
              </Heading>
            </Box>
            <Text>
              Save on reliable roaming with the confidence of cost-certainty to more than 200 U.S. and international destinations.
            </Text>


          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={12} md={6}>
          <Box vertical={8} horizontal={8}>

          <Paragraph>I'm travelling to:</Paragraph>
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
  )
}

export default Info;
