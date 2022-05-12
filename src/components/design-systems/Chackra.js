/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ChakraProvider, Button } from "@chakra-ui/react";
import { DemoBox } from "./helpers/DemoBox";

export const Chackra = () => (
  <div className="contentWrapper">
    <div>
      <h2>Independent - Chackra</h2>
      <p>
        <a
          href="https://chakra-ui.com/docs/components/form/button"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </p>
      <ChakraProvider resetCSS={false}>
        <DemoBox>
          <Button colorScheme="blue">Chackra UI Button</Button>
        </DemoBox>
      </ChakraProvider>
    </div>
    <div className="conclusionBox">
      <div className="conclusionGrid">
        <h3 className="conclusionHeader">Conclusions - on click:</h3>
        <b>Focus</b>
        <b>Apply particular style</b>
        <b>Browser apply :focus pseudo-selector</b>
        <div>✅</div>
        <div>✅</div>
        <div>✅</div>
      </div>

      <div className="extraConclusionInfo">
        <h3>How do they accomplish this?</h3>
        <p>They don't</p>
      </div>
    </div>
  </div>
);
