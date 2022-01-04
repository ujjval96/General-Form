import React from "react";
import Input from '@tds/core-input';
import FlexGrid from '@tds/core-flex-grid';
import Box from '@tds/core-box';
import Heading from '@tds/core-heading';
import Checkbox from '@tds/core-checkbox';
import Text from '@tds/core-text';
import Step from "../step/Step";
import Info from "../travelinfo/Info";
import InputText from "../inputText/InputText";

const Form = () => {
  return (
    <FlexGrid>
      <Step />
      <Info />
     <InputText subheading="Tell us a bit about yourself" input={["First name","Last name"]} />
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
        <InputText 
      input={["Email","Phone"]}
      />
      </FlexGrid.Row>
        <InputText 
      subheading="Tell us about the location where you experienced the issue" 
      input={["Wi-Fi network name or SSID","Device Wi-Fi MAC address"]}
      />
       <InputText 
      input={["Company name","Company phone number"]}
      />
       <InputText 
      input={["Where did you experience the issue","City"]}
      />
    </FlexGrid>
  );
}
export default Form;
