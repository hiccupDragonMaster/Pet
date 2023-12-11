import { CustomFlowbiteTheme } from "flowbite-react/lib/esm/components/Flowbite/FlowbiteTheme";

export const flowbiteTheme: CustomFlowbiteTheme = {
  modal: {
    body: {
      base: "space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8",
    },
  },
  sidebar: {
    "root": {
        "base": "h-full bg-white",
        "collapsed": {
            "on": "w-16",
            "off": "w-64"
        },
          "inner": "h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-gray-800"
    },
    collapse: {
      list: "space-y-2 py-2 list-none",
    },
    item: {
      base: "no-underline flex items-center rounded-lg p-2 text-lg font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    },
    itemGroup:
      "list-none border-t border-gray-200 pt-3 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
  },
  textInput:{
    "field": {
      "base": "relative w-full",
      "input": {
        "base": "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        "sizes": {
          "sm": "sm:text-xs",
          "md": "text-sm",
          "lg": "sm:text-md"
        },
        "colors": {
          "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        }
      }
    }
  },
  avatar: {
    "root": {
      "size": {
        "lg": "w-14 h-14",
      },
      "color":{
        "success": "bg-green-500 text-white",
      }
      
    },
  },
  badge: {
    "root": {
      "color": {
        "cat": "bg-[#C3F584] text-black dark:bg-[#C3F584] dark:text-black font-regular group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
        "dog": "bg-[#44B9CB] text-white dark:bg-[#44B9CB] dark:text-white font-regular group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      },
    },
  }
};