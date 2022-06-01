import React, { FC } from 'react';

interface Props {
  title: string;
  message: string;
  type: 'error' | 'success' | 'info' | 'warning';
  dismiss?: () => void;
}

export const Notifications: FC<Props> = (props) => {
  const { title, message, dismiss, type } = props;
  const colors = {
    info: {
      container: 'border-blue-400',
      button: 'text-blue-400',
      content: 'text-blue-700',
    },
    success: {
      container: 'border-green-400',
      button: 'text-green-400',
      content: 'text-green-700',
    },
    error: {
      container: 'border-red-400',
      button: 'text-red-400',
      content: 'text-red-700',
    },
    warning: {
      container: 'border-yellow-400',
      button: 'text-yellow-400',
      content: 'text-yellow-700',
    },
  };
  return (
    <div
      className={`w-96 border-l-4 ${colors[type].container} bg-white p-4 text-sm flex items-center shadow-lg relative`}>
      <button
        type="button"
        className={`absolute right-0 top-0 w-4 ${colors[type].button} m-3`}
        onClick={dismiss}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className={`grid grid-rows-3 grid-flow-col gap-1 ${colors[type].content} mr-2 text-left`}>
        <svg
          className="row-span-3 w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="row-span-1 font-semibold">{title}</h1>
        <p className="row-span-2 font-medium">{message}</p>
      </div>
    </div>
  );
};
