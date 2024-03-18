import LoginForm from '@/components/Form';
import { Card } from '@/components/ui/card';
export default function Login() {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <Card className="p-10">
        <h1 className='text-2xl text-center mb-10 text-sky-500 font-bold'>MANTAU APP</h1>
        <LoginForm />
      </Card>
    </main>
  );
}
