import {
  faAngleDown,
  faAngleRight,
  faArrowRight,
  faRight,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure } from '@headlessui/react';
import React, { FC } from 'react';
import DashboardComponent from '../components/DashboardComponent';

const Week1: FC = () => {
  return (
    <DashboardComponent title="Week 1">
      <div className="h-96 p-12 bg-gray-50 rounded-lg">
        <Disclosure>
          {({ open }: any) => (
            <div className="bg-white rounded-lg shadow-lg">
              <Disclosure.Button className="text-left p-8 pl-6 w-full rounded-lg bg-white inline-flex shadow-md">
                <h1 className="text-3xl font-semibold inline">
                  Measure your happiness
                </h1>
                <FontAwesomeIcon
                  className="block ml-auto my-auto"
                  icon={open ? faAngleDown : faAngleRight}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="bg-white p-8 rounded-lg">
                <p className="text-sm mt-2 ">
                  By measuring your happiness at the start of the course, your
                  score will act as a baseline measurement to compare to later
                  on. If you do not want to take surveys online (Options 1 & 2),
                  you can answer the following question and use that as your
                  measure (Option 3): On a scale of 1-5, how happy are you with
                  your life right now?
                </p>
                <h2 className="text-lg mt-4 text-gray-800">
                  Enter your scores
                </h2>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </DashboardComponent>
  );
};
export default Week1;
