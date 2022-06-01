import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import logo from '../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import DashboardComponent from '../components/DashboardComponent';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Week 1', href: '/week1', current: true },
  { name: 'Week 2', href: '/week2', current: false },
  { name: 'Week 3', href: '/week3', current: false },
  { name: 'Week 4', href: '/week4', current: false },
  { name: 'Week 5', href: '/week5', current: false },
  { name: 'Week 6', href: '/week6', current: false },
  { name: 'Week 7', href: '/week7', current: false },
  { name: 'Week 8', href: '/week8', current: false },
  { name: 'Week 9', href: '/week9', current: false },
  { name: 'Week 10', href: '/week10', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  return (
    <DashboardComponent>
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
    </DashboardComponent>
  );
}
