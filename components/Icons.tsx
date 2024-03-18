import { AlignRight, Activity, Home, Map, LogIn, Server, Radar, NotepadText, Settings, Wrench } from 'lucide-react';

const primary = 'text-sky-500';
export const Icons = {
  menu: <AlignRight className={primary} />,
  dasboard: <Home className={primary} />,
  status: <Activity className={primary} />,
  wilayah: <Map className={primary} />,
  login: <LogIn color="white" />,
  alat: <Server className={primary}/>,
  ping: <Radar className={primary}/>,
  pool: <NotepadText className={primary}/>,
  settings: <Settings className={primary}/>,
  maintenance: <Wrench className={primary}/>
};
