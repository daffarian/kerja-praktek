import { Icons } from "@/components/Icons";
// Navigasi Link
export const links = [
  {
    id: '01',
    name: 'Dashboard',
    href: '/dashboard',
    icon: Icons.dasboard,
    subLinks: null
  },
  {
    id: '02',
    name: 'Alat',
    href: '/dashboard/alat',
    icon: Icons.alat,
    subLinks: null
  },
  {
    id: '03',
    name: 'Wilayah',
    href: '/dashboard/wilayah',
    icon: Icons.wilayah,
    subLinks: null
  },
  {
    id: '04',
    name: 'Log Ping',
    href: '/dashboard/log-ping',
    icon: Icons.ping,
    subLinks: null
  },
  {
    id: '05',
    name: 'Pool Update',
    href: '/dashboard/pool-update',
    icon: Icons.pool,
    subLinks: null
  },
  {
    id: '06',
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
    id: '07',
    name: 'Maintenance',
    href: '/dashboard/maintenance',
    icon: Icons.maintenance,
    subLinks: null
  }
];
