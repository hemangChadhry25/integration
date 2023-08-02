import * as React from "react";
import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Inter } from "next/font/google";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

const Font = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const doc = element.ownerDocument;
    doc.documentElement.classList.add(inter.className);
  }, []);

  return <div ref={ref} {...props} />;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story) => (
      <Font className={inter.className}>
        <Story />
      </Font>
    ),
  ],
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default preview;
