'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

import { Button } from '@/components/ui/button';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);

  const canGoBack = pageNumber > 1;
  const canGoForward = Boolean(numPages && pageNumber < numPages);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function goToPreviousPage() {
    setPageNumber((page) => Math.max(page - 1, 1));
  }

  function goToNextPage() {
    setPageNumber((page) => Math.min(page + 1, numPages ?? page));
  }

  function goToPage(value: string) {
    if (!numPages) return;

    const nextPage = Number(value);
    if (!Number.isInteger(nextPage)) return;

    setPageNumber(Math.min(Math.max(nextPage, 1), numPages));
  }

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-5 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="flex w-full flex-wrap items-center justify-center gap-3 rounded-lg border border-white/10 bg-black/50 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={goToPreviousPage}
          disabled={!canGoBack}
          aria-label="Previous page"
          className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
        >
          <ChevronLeft aria-hidden="true" />
        </Button>

        <label className="flex items-center gap-2 text-sm text-white/75">
          <span>Page</span>
          <input
            type="number"
            min={1}
            max={numPages ?? 1}
            value={pageNumber}
            onChange={(event) => goToPage(event.target.value)}
            className="h-10 w-16 rounded-md border border-white/15 bg-white px-2 text-center text-sm font-semibold text-black outline-none focus:border-[#00a3e4]"
            aria-label="Current page"
          />
          <span>of {numPages ?? '-'}</span>
        </label>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={goToNextPage}
          disabled={!canGoForward}
          aria-label="Next page"
          className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
        >
          <ChevronRight aria-hidden="true" />
        </Button>
      </div>

      <div className="flex w-full justify-center overflow-x-auto rounded-lg bg-[#111] p-3 shadow-2xl shadow-black/40 sm:p-5">
        <Document
          file="/Encore%20Profile.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p className="px-6 py-10 text-sm text-white/70">Loading PDF...</p>}
          error={<p className="px-6 py-10 text-sm text-red-300">Could not load the PDF file.</p>}
          className="flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="overflow-hidden rounded-md bg-white"
            width={Math.min(900, typeof window === 'undefined' ? 900 : window.innerWidth - 56)}
          />
        </Document>
      </div>
    </section>
  );
}
