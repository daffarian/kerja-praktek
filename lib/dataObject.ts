import { Icons } from "@/components/Icons";
// Navigasi Link
export const links = [
  {
    id: '1',
    name: 'Dashboard',
    href: '/dashboard',
    icon: Icons.dasboard,
    subLinks: null
  },
  {
    id: '2',
    name: 'Alat',
    href: '/dashboard/alat',
    icon: Icons.alat,
    subLinks: null
  },
  {
    id: '3',
    name: 'Wilayah',
    href: '/dashboard/wilayah',
    icon: Icons.wilayah,
    subLinks: null
  },
  {
    id: '4',
    name: 'Log Ping',
    href: '/dashboard/log-ping',
    icon: Icons.ping,
    subLinks: null
  },
  {
    id: '5',
    name: 'Pool Update',
    href: '/dashboard/pool-update',
    icon: Icons.pool,
    subLinks: null
  },
  {
    id: '6',
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Icons.settings,
    subLinks: [
      {
        id: 'sub-01',
        name: 'Alat',
        href: '/dashboard/settings/alat'
      },
      {
        id: 'sub-02',
        name: 'Wilayah',
        href: '/dashboard/settings/wilayah'
      },
      {
        id: 'sub-03',
        name: 'User',
        href: '/dashboard/settings/user'
      }
    ]
  },
  {
    id: '7',
    name: 'Maintenance',
    href: '/dashboard/maintenance',
    icon: Icons.maintenance,
    subLinks: null
  }
];
