import { Meta, StoryObj } from "@storybook/react";

import {
  HelperText,
  Label,
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemSelector,
} from "@/components/ui";

const meta: Meta = {
  title: "RadioGroup",
  component: RadioGroup,
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const SmLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <div className="flex gap-x-3">
          <RadioGroupItem value="Option 1" id="option-one" />
          <Label htmlFor="option-one">Option 1</Label>
        </div>

        <div className="flex gap-x-3">
          <RadioGroupItem value="Option 2" id="option-two" />
          <Label htmlFor="option-two">Option 2</Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202143&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const MdLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <RadioGroupItem size="md" value="Option 1" id="option-one" />
          <Label size="sm" htmlFor="option-one">
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <RadioGroupItem size="md" value="Option 2" id="option-two" />
          <Label size="sm" htmlFor="option-two">
            Option 2
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202225&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const LgLabel: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <RadioGroupItem size="lg" value="Option 1" id="option-one" />
          <Label size="md" htmlFor="option-one">
            Option 1
          </Label>
        </div>

        <div className="flex gap-x-4">
          <RadioGroupItem size="lg" value="Option 2" id="option-two" />
          <Label size="md" htmlFor="option-two">
            Option 2
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202303&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const SmLabelHelperText: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <div className="flex gap-x-3">
          <RadioGroupItem value="Option 1" id="option-one" />
          <Label className="flex flex-col" htmlFor="option-one">
            Option 1<HelperText>Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-3">
          <RadioGroupItem value="Option 2" id="option-two" />
          <Label className="flex flex-col" htmlFor="option-two">
            Option 2<HelperText>Short description here</HelperText>
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202158&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const MdLabelHelperText: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3" {...args}>
        <div className="flex gap-x-3.5">
          <RadioGroupItem size="md" value="Option 1" id="option-one" />
          <Label size="sm" className="flex flex-col" htmlFor="option-one">
            Option 1 <HelperText size="sm">Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-3.5">
          <RadioGroupItem size="md" value="Option 2" id="option-two" />
          <Label size="sm" className="flex flex-col" htmlFor="option-two">
            Option 2 <HelperText size="sm">Short description here</HelperText>
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202219&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const LgLabelHelperText: Story = {
  render: (args) => {
    return (
      <RadioGroup className="space-y-3.5" {...args}>
        <div className="flex gap-x-4">
          <RadioGroupItem size="lg" value="Option 1" id="option-one" />
          <Label className="flex flex-col" size="md" htmlFor="option-one">
            Option 1 <HelperText size="md">Short description here</HelperText>
          </Label>
        </div>

        <div className="flex gap-x-4">
          <RadioGroupItem size="lg" value="Option 2" id="option-two" />
          <Label className="flex flex-col" size="md" htmlFor="option-two">
            Option 2 <HelperText size="md">Short description here</HelperText>
          </Label>
        </div>
      </RadioGroup>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-202297&mode=design&t=oI200WrSfiwzeWIG-4",
    },
  },
};

export const SmRadioGroupItemSelector: Story = {
  render: (args) => (
    <RadioGroup className="grid gap-y-2" {...args}>
      <RadioGroupItemSelector value="Option 1">
        <Label>Option 1</Label>
        <HelperText>Short description here</HelperText>
      </RadioGroupItemSelector>
      <RadioGroupItemSelector value="Option 2">
        <Label>Option 2</Label>
        <HelperText>Short description here</HelperText>
      </RadioGroupItemSelector>
      <RadioGroupItemSelector value="Option 3">
        <Label>Option 3</Label>
        <HelperText>Short description here</HelperText>
      </RadioGroupItemSelector>
    </RadioGroup>
  ),
};

export const MdRadioGroupItemSelector: Story = {
  render: (args) => (
    <RadioGroup className="grid gap-y-2" {...args}>
      <RadioGroupItemSelector size="md" value="Option 1">
        <Label size="sm">Option 1</Label>
        <HelperText size="sm">Short description here</HelperText>
      </RadioGroupItemSelector>
      <RadioGroupItemSelector size="md" value="Option 2">
        <Label size="sm">Option 2</Label>
        <HelperText size="sm">Short description here</HelperText>
      </RadioGroupItemSelector>
      <RadioGroupItemSelector size="md" value="Option 3">
        <Label size="sm">Option 3</Label>
        <HelperText size="sm">Short description here</HelperText>
      </RadioGroupItemSelector>
    </RadioGroup>
  ),
};

export const LgRadioGroupItemSelector: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItemSelector size="lg" value="Option 1">
        <Label size="md">Option 1</Label>
        <HelperText size="md">Short description here</HelperText>
      </RadioGroupItemSelector>
      <RadioGroupItemSelector size="lg" value="Option 2">
        <Label size="md">Option 2</Label>
        <HelperText size="md">Short description here</HelperText>
      </RadioGroupItemSelector>
      <RadioGroupItemSelector size="lg" value="Option 3">
        <Label size="md">Option 3</Label>
        <HelperText size="md">Short description here</HelperText>
      </RadioGroupItemSelector>
    </RadioGroup>
  ),
};
