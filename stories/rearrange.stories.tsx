import React from "react";

import { GripVertical, X } from "@/components/icons";
import {
  Badge,
  Rearrange,
  RearrangeButton,
  RearrangeGroup,
  RearrangeItem,
  RearrangeTrack,
} from "@/components/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Rearrange",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/wTW5aoJfEb9KtPeU8KkbG3/BM---Integration-Partner---Development?type=design&node-id=3-90308&mode=design&t=bvOGFGTydafQJUbm-4",
    },
  },
};

export default meta;

const values = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export const Default: StoryObj = {
  render: () => {
    return (
      <>
        <div className="space-y-3">
          <Rearrange
            values={values}
            track={(value) => <RearrangeTrack>{value}</RearrangeTrack>}
            button={
              <RearrangeButton className="mt-4">Clear All</RearrangeButton>
            }
          >
            {({ value, patch, remove }) => (
              <RearrangeGroup values={value} onRearrange={patch}>
                {value.map((item, index) => (
                  <React.Fragment key={item}>
                    <RearrangeItem value={item}>
                      {(fn) => (
                        <Badge className="select-none" visual="primary">
                          <GripVertical
                            className="cursor-pointer opacity-60"
                            onPointerDown={fn}
                          />
                          {item}
                          <button
                            className="inline-flex flex-none cursor-pointer opacity-60 transition-opacity duration-300 ease-out hover:opacity-100 focus-visible:outline-none"
                            onClick={() => remove(index)}
                          >
                            <X />
                          </button>
                        </Badge>
                      )}
                    </RearrangeItem>
                    <span className="inline-block h-1 w-1 flex-none rounded-full bg-gray-400 last-of-type:hidden" />
                  </React.Fragment>
                ))}
              </RearrangeGroup>
            )}
          </Rearrange>
        </div>
      </>
    );
  },
};
