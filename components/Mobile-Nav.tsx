'use client';

import Author from './Author';
import { Button } from '@/components/ui/button';
import { Icons } from './Icons';
import { useState, useEffect } from 'react';
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
import DbStatus from './DbStatus';
import { ModeToggle } from './ToggleTheme';
export default function MobileNav() {
  // State untuk menyimpan status sheet
  const [isOpen, setIsOpen] = useState(false);
  // menyimpan path saat ini
  const pathname = usePathname();
  // Tinggi Jendela
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [style, setStyle] = useState('');
  // Handle Scroll
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (clientWindowHeight > 10) {
      setStyle(' shadow-lg px-4');
    } else {
      setStyle(``);
    }
  }, [clientWindowHeight]);
  return (
    <header
      className={`fixed w-full top-0 left-0 z-10 dark:bg-slate-900/60 transition-all bg-white/60 backdrop-blur-md duration-300 rounded-b-3xl ${style}`}
    >
      <div
        className={` w-full flex flex-row items-center justify-between px-4 py-5 `}
      >
        {/* Logo Aplikasi */}
        <Author />
        {/* Right Side */}
        <div className='flex flex-row items-center gap-4'>
          {/* DbStatus */}
          <DbStatus />
          {/* Theme Toogle */}
          <ModeToggle/>
          {/* Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button className="p-1" variant="ghost">
                {Icons.menu}
              </Button>
            </SheetTrigger>
            <SheetContent
              className="overflow-y-auto h-full justify-between flex flex-col dark:bg-slate-900"
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
                              'flex flex-row gap-2 items-center hover:dark:bg-sky-950 hover:bg-sky-100 hover:text-sky-500 px-2 py-4 rounded-md',
                              {
                                'bg-sky-100 dark:bg-sky-950 text-sky-500':
                                  link.href === pathname
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
                        <Accordion type="single" key={link.id} collapsible>
                          <AccordionItem key={link.id} value="item-1">
                            <AccordionTrigger className="flex flex-row items-center hover:underline gap-2 px-2 py-4 rounded-md">
                              {link.icon}
                              {link.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-1">
                                {link.subLinks.map((sublink) => (
                                  <div key={sublink.id}>
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
                                  </div>
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
        </div>
      </div>
    </header>
  );
}
