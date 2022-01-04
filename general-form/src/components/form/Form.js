import React from "react";
import Input from '@tds/core-input';
import FlexGrid from '@tds/core-flex-grid';
import Box from '@tds/core-box';
import Heading from '@tds/core-heading';
import Checkbox from '@tds/core-checkbox';
import Text from '@tds/core-text';
import Step from "../step/Step";
import Info from "../travelinfo/Info";

const Form = () => {
  return (
    <FlexGrid>
      <Step />
      <Info />
      <FlexGrid.Row >
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Heading level="h3" >Tell us a bit about yourself</Heading>
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row distribute="between">
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input label="First name" />
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input label="Last name" />
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row distribute="between">
        <FlexGrid.Col xs={12}>
          <Box vertical={2}>
            <legend>
              <Text bold size="medium">
                TELUS may contact you for  further details about the issue you're reporting. Please check your preferred contact method
              </Text>
            </legend>
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={1}>
          <Box vertical={1} tag="fieldset" between={2}>
            <Checkbox name="contact" value="mobility" label="Email" />
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col>
          <Box vertical={1} >
            <Checkbox name="contact" value="phone" label="Phone" />
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
  );
}
export default Form;
