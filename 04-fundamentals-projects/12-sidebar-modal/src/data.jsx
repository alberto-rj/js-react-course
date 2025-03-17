import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome aria-hidden='true' />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends aria-hidden='true' />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen aria-hidden='true' />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt aria-hidden='true' />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms aria-hidden='true' />,
  },
];

export const socialLinks = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    text: 'Facebook',
    icon: <FaFacebook aria-hidden='true' />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    text: 'Twitter',
    icon: <FaTwitter aria-hidden='true' />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    text: 'Linkedin',
    icon: <FaLinkedin aria-hidden='true' />,
  },
  {
    id: 4,
    url: 'https://www.behance.com',
    text: 'Behance',
    icon: <FaBehance aria-hidden='true' />,
  },
  {
    id: 5,
    url: 'https://www.sketch.com',
    text: 'Sketch',
    icon: <FaSketch aria-hidden='true' />,
  },
];
