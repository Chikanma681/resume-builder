import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const BusinessPage = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default BusinessPage;