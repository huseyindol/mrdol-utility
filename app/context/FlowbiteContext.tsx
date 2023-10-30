'use client';

import { FC, PropsWithChildren } from 'react';

import { Flowbite } from 'flowbite-react';

import { flowbiteTheme as theme } from '../theme';

const FlowbiteContext: FC<PropsWithChildren> = function ({ children }) {
  return <Flowbite theme={{ theme }}>{children}</Flowbite>;
};

export default FlowbiteContext;
