import React from "react";
import Input from '@tds/core-input';
import FlexGrid from '@tds/core-flex-grid';
import Box from '@tds/core-box';
import Heading from '@tds/core-heading';
import Checkbox from '@tds/core-checkbox';
import Text from '@tds/core-text';
import Step from "../step/Step";
import Info from "../travelinfo/Info";
import Select from '@tds/core-select';
import InputFeedback from '@tds/core-input-feedback';
import Tooltip from '@tds/core-tooltip'

const Form = () => {
  return (
    <FlexGrid>
      <Step />
      <Info />

      <FlexGrid.Row distribute="between">
        <FlexGrid.Col xs={8}>
          <Box vertical={4}>
            <Heading level="h3" >Tell us a bit about yourself</Heading>
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input label="First name*" feedback="error" />
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input label="Last name*" required />
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
        <FlexGrid.Row distribute="between">
          <FlexGrid.Col xs={5}>
            <Box vertical={1}>
              <Input label="Email*" />
            </Box>
          </FlexGrid.Col>
          <FlexGrid.Col xs={5}>
            <Box vertical={1}>
              <Input label="Phone*" type="tel" pattern="[0-9]{10}" maxLength="10" defaultValue="+1-XXX-XXX-XXX" required />
            </Box>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid.Row>
      <FlexGrid.Col xs={8}>
        <Box vertical={4}>
          <Heading level="h3" >Tell us about business</Heading>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Row distribute="between">
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Select
              label="Wi-Fi network name or SSID"
              placeholder="Choose"
              options={[
                { text: 'Alberta', value: 'AB' },
                { text: 'British Columbia', value: 'BC' },
                { text: 'Ontario', value: 'ON' },
                { text: 'Quebec', value: 'QC' },
              ]}
            />
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input
              label="Device Wi-Fi MAC address"
              type="text"
              tooltip={
                <Tooltip copy="en">
                Tooltip hint message goes here.
                </Tooltip>
              }
            />
          </Box>
        </FlexGrid.Col> 
      </FlexGrid.Row>
      <FlexGrid.Col xs={8}>
        <Box vertical={4}>
          <Heading level="h3" >Tell us about the location where you experienced the issue</Heading>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Row distribute="between">
      <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input label="Company name" type="text" feedback="error" />
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input label="Company phone number" type="number" required />
          </Box>
        </FlexGrid.Col>
     
        <FlexGrid.Col xs={5}>
          <Box vertical={3}>
            <Input label="Where did you experiance the issue" type="text"  />
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={5}>
          <Box vertical={3}>
            <Input label="City*" type="text" />
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
          <Select
              label="Province"
              placeholder="Choose"
              options={[
                { text: 'Alberta', value: 'AB' },
                { text: 'British Columbia', value: 'BC' },
                { text: 'Ontario', value: 'ON' },
                { text: 'Quebec', value: 'QC' },
              ]}
            />
          </Box>
        </FlexGrid.Col>
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input label="Date" type="date" defaultValue="MM/DD/YY"/>
          </Box>
        </FlexGrid.Col>
        </FlexGrid.Row>
    </FlexGrid>
  );
}
export default Form;
