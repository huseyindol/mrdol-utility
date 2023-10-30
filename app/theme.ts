import { CustomFlowbiteTheme } from 'flowbite-react/lib/esm/components/Flowbite/FlowbiteTheme';

export const flowbiteTheme: CustomFlowbiteTheme = {
  footer: {
    brand: {
      base: 'm-6 flex items-center',
    },
    groupLink: {
      base: 'flex flex-col flex-wrap text-gray-500 dark:text-white',
      link: {
        base: 'mb-4 last:mr-0 md:mr-6',
      },
    },
    icon: {
      base: 'text-gray-400 hover:text-gray-900 dark:hover:text-white',
    },
  },
  modal: {
    body: {
      base: 'space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8',
    },
  },
  sidebar: {
    collapse: {
      list: 'space-y-2 py-2 list-none',
    },
    item: {
      base: 'no-underline flex items-center rounded-lg p-2 text-lg font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
    },
    itemGroup: 'list-none border-t border-gray-200 pt-3 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
  },
  accordion: {
    root: {
      base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
      flush: {
        off: 'rounded-lg border',
        on: 'border-b',
      },
    },
    content: {
      base: 'block overflow-hidden transition-all duration-300 ease-in-out py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg',
    },
    title: {
      arrow: {
        base: 'h-6 w-6 shrink-0',
        open: {
          off: '',
          on: 'rotate-180',
        },
      },
      base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
      flush: {
        off: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
        on: 'bg-transparent dark:bg-transparent',
      },
      heading: '',
      open: {
        off: '[&+div]:h-0 [&+div]:p-0',
        on: 'text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white',
      },
    },
  },
};
