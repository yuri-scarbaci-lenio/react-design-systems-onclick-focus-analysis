/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Stack } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { DemoBox } from "./helpers/DemoBox";

const stackTokens = { childrenGap: 40 };

export const MicrosoftFluent = () => (
  <div>
    <div>
      <h2>Microsoft - Fluent</h2>
      <p>
        <a
          href="https://developer.microsoft.com/en-us/fluentui#/controls/web/button"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </p>

      <DemoBox>
        <Stack horizontal tokens={stackTokens}>
          <PrimaryButton text="Microsoft Fluent Button" />
        </Stack>
      </DemoBox>
    </div>
  </div>
);
