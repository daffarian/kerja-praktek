import LoginForm from '@/components/Form';
import { Card } from '@/components/ui/card';
export default function Login() {
  return (
    <main className="flex min-h-svh items-center dark:bg-slate-900 justify-center">
      <Card className="p-10 dark:bg-slate-900/60 backdrop:blur-sm">
        <h1 className="text-2xl text-center mb-10  text-sky-500 font-bold">
          MANTAU APP
        </h1>
        <LoginForm />
      </Card>
    </main>
  );
}
