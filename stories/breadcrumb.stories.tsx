import { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui";

const meta: Meta = {
  title: "Breadcrumb",
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/dashboard/settings">Settings</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};
