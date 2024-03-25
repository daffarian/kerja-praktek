'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import clsx from 'clsx';
import { Icons } from './Icons';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10 //default page size
  });
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination
    },
    autoResetPageIndex: false,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  function handelPageSizeOnChange(event: any) {
    const value = parseInt(event.target.value); // mengambil nilai dari input dan mengonversi menjadi angka
    setPagination({
      ...pagination,
      pageSize: value
    });
  }

  return (
    <div className="mt-5 pb-10">
      <div className="w-full">
        <hr />
      </div>
      <div className="flex w-full flex-row items-center py-4 justify-between">
        <div className="flex flex-row items-center justify-between gap-2">
          <span className="text-sm">Item page</span>
          <input
            className="w-16 text-center border-[1px] text-sm dark:bg-slate-900 border-slate-200 rounded-md px-2 py-[6px]"
            onChange={handelPageSizeOnChange}
            type="number"
            inputMode="numeric"
            defaultValue={pagination.pageSize}
          />
        </div>
        <div className="flex flex-row gap-2 items-center justify-betweens">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {<Icons.previous />}
          </Button>
          <div className="w-14 text-center">
            {pagination.pageIndex + 1}
            {' / '}
            {table.getPageCount()}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {<Icons.next />}
          </Button>
        </div>
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table className="">
          <TableHeader className="bg-sky-500 dark:text-slate-100 rounded-t-md hover:bg-sky-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-sky-500">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className=" text-white dark:text-slate-100"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={clsx(
                        'text-nowrap',
                        { 'text-green-500': cell.getValue() == 'UP' },
                        {
                          'text-red-500': cell.getValue() === 'DOWN'
                        }
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
