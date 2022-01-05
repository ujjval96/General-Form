import Input from '@tds/core-input';
import FlexGrid from '@tds/core-flex-grid';
import Heading from '@tds/core-heading';
import Box from '@tds/core-box';
import React from 'react';

const InputText = (props) => {
  console.log(props.input);
  return (
    <FlexGrid>
      <FlexGrid.Row >
        <FlexGrid.Col xs={8}>
          <Box vertical={3}>
            <Heading level="h3" >{props.subheading}</Heading>
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row distribute="between">
        <FlexGrid.Col xs={5}>
          <Box vertical={1}>
            <Input label="firstname" feedback="error" error="Error Mesage"/>
          </Box>
        </FlexGrid.Col>
        
        
      </FlexGrid.Row>
    </FlexGrid>
  )
}
export default InputText;
