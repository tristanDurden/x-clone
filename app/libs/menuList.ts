

export interface MenuItem {
    id: number,
    name: string,
    icon: string,
    href: string
}

export const menuList: MenuItem[] = [
  {
    id: 1,
    name: 'Home',
    icon: 'home.svg',
    href: '/',
  },
  {
    id: 2,
    name: 'Explore',
    icon: 'explore.svg',
    href: '/explore',
  },
  {
    id: 3,
    name: 'Notifications',
    icon: 'notifications.svg',
    href: '/notifications',
  },
  {
    id: 4,
    name: 'Messages',
    icon: 'messages.svg',
    href: '/messages',
  },
  {
    id: 5,
    name: 'Bookmarks',
    icon: 'bookmarks.svg',
    href: '/bookmarks'
  },
  {
    id: 6,
    name: 'Jobs',
    icon: 'work.svg',
    href: '/jobs',
  },
  {
    id: 7,
    name: 'Communities',
    icon: 'community.svg',
    href: '/communities',
  },
  {
    id: 8,
    name: 'Premium',
    icon: 'premium.svg',
    href: '/premium',
  },
  {
    id: 9,
    name: 'Profile',
    icon: 'profile.svg',
    href: '/profile'
  },
  {
    id: 10,
    name: 'More',
    href: '/more',
    icon: 'more.svg'
  }
]