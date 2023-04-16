import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
 {
    title: 'Add Pharmacy',
    path: '/registerpharmacy',
    icon: <IoIcons.IoIosAddCircleOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Add Product',
    path: '/registerproduct',
    icon: <IoIcons.IoMdMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/viewdrugs',
    icon: <IoIcons.IoMdGrid />,
    cName: 'nav-text'
  },
  {
    title: 'Edit Product',
    path: '/editproduct',
    icon: <IoIcons.IoMdGrid />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: <IoIcons.IoMdLogOut />,
    cName: 'nav-text'
  }
];