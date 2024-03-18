import { Button } from './ui/button';
import { Input } from './ui/input';
import Link from 'next/link';
import { Icons } from './Icons';

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Input type="text" placeholder="Username" />
      </div>
      <div>
        <Input type="password" placeholder="Password" />
      </div>
      <div>
        <Link href={'/dashboard'}>
          <Button variant={'default'} className="inline-flex justify-between w-full">
            Login{Icons.login}
          </Button>
        </Link>
      </div>
    </div>
  );
}
