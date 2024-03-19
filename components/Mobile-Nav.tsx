'use client';
import Author from './Author';
import { Button } from '@/components/ui/button';
import { Icons } from './Icons';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { links } from '@/lib/dataObject';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function MobileNav() {
  // State untuk menyimpan status sheet
  const [isOpen, setIsOpen] = useState(false);
  // menyimpan path saat ini
  const pathname = usePathname();
  return (
    <header className=" w-full flex flex-row justify-between p-4">
      {/* Logo Aplikasi */}
      <Author />
      {/* Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button className="p-1" variant="ghost">
            {Icons.menu}
          </Button>
        </SheetTrigger>
        <SheetContent
          className="overflow-y-auto h-full justify-between flex flex-col"
          side={'left'}
        >
          <div>
            <Author />
            <div className="mt-10 flex flex-col gap-2 ">
              {/* Perulangan Komponen Link */}
              {links.map((link) => {
                // Jika Tidak memiliki sublink maka render tanpa komponen accordion
                if (link.subLinks === null) {
                  return (
                    <div key={link.id}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(!isOpen)}
                        className={clsx(
                          'flex flex-row gap-2 items-center hover:bg-sky-100 hover:text-sky-500 px-2 py-4 rounded-md',
                          {
                            'bg-sky-100 text-sky-500': link.href === pathname
                          }
                        )}
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    // Render dengan accordion jika memiliki sublink
                    <Accordion
                      type="single"
                      collapsible
                      key={link.id}
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="flex flex-row items-center hover:underline gap-2 px-2 py-4 rounded-md">
                          {link.icon}
                          {link.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-1">
                            {link.subLinks.map((sublink) => (
                              <>
                                <hr />
                                <Link
                                  key={sublink.id}
                                  href={sublink.href}
                                  onClick={() => setIsOpen(!isOpen)}
                                  className={clsx(
                                    'flex flex-row  pl-10 items-center hover:bg-sky-100 border-slate-200 py-2 rounded-md',
                                    {
                                      'bg-sky-100 text-sky-500':
                                        sublink.href === pathname
                                    }
                                  )}
                                >
                                  {sublink.name}
                                </Link>
                              </>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }
              })}
            </div>
          </div>
          <Link href={'/'} className="items-end">
            <Button
              variant={'destructive'}
              className="inline-flex w-full justify-between"
            >
              Logout{Icons.logout}
            </Button>
          </Link>
        </SheetContent>
      </Sheet>
    </header>
  );
}
