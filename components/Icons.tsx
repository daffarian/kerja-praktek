import {
  AlignRight,
  Activity,
  Home,
  Map,
  LogIn,
  Server,
  NotepadText,
  Settings,
  Wrench,
  LogOut,
  ListOrdered,
  LucideProps,
  ChevronRight,
  ChevronLeft,
  RefreshCcw,
  Search
} from 'lucide-react';

const primary = 'text-sky-500';
export const Icons = {
  menu: <AlignRight className={primary} />,
  dasboard: <Home className={primary} />,
  status: <Activity className={primary} />,
  wilayah: <Map className={primary} />,
  login: <LogIn color="white" />,
  logout: <LogOut color="white" />,
  alat: <Server className={primary} />,
  ping: <NotepadText className={primary} />,
  settings: <Settings className={primary} />,
  maintenance: <Wrench className={primary} />,
  pool: <ListOrdered className={primary} />,
  search: Search,
  refresh: <RefreshCcw color="white" />,
  next: ChevronRight,
  previous: ChevronLeft
};
