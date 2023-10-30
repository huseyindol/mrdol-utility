'use client';

import React from 'react';

import { Accordion, Button } from 'flowbite-react';
type Props = {};
const PreviewPane = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className=" border-b bg-gray-100 p-8 [&_h1]:mb-8 [&_h1]:text-2xl [&_h1]:font-bold">
    <h1>{title}</h1>
    <div className="flex flex-row flex-wrap items-start">{children}</div>
  </div>
);

const Col = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="w-80 p-8">
    <h2 className="mb-5 border-b font-bold">{title}</h2>
    <div className="flex flex-col items-start space-y-3">{children}</div>
  </div>
);
const PageClient = (props: Props) => {
  return (
    <div>
      <Button>asd</Button>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                buttons, dropdowns, modals, navbars, and more.
              </p>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <p>Check out this guide to learn how to</p>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/docs/getting-started/introduction/"
              >
                <p>get started</p>
              </a>
              <p>and start developing websites even faster with components on top of Tailwind CSS.</p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the
                library has a design equivalent in our Figma file.
              </p>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <p>Check out the</p>
              <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://flowbite.com/figma/">
                <p>Figma design system</p>
              </a>
              <p>based on the utility classes from Tailwind CSS and components from Flowbite.</p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
          <Accordion.Content>
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                The main difference is that the core components from Flowbite are open source under the MIT license,
                whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
                standalone components, whereas Tailwind UI offers sections of pages.
              </p>
            </div>
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
            </div>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://flowbite.com/pro/">
                  <p>Flowbite Pro</p>
                </a>
              </li>
              <li>
                <a
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                  href="https://tailwindui.com/"
                  rel="nofollow"
                >
                  <p>Tailwind UI</p>
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default PageClient;
