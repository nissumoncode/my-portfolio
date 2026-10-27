import { Download, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <p className="mb-2 font-mono text-sm tracking-[0.2em] text-primary">
            CURRICULUM VITAE
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            My <span className="text-gradient">Resume</span>
          </h1>

          <p className="mt-3 text-muted-foreground">
            Nafiz Iqbal Sumon · Junior Full Stack Developer
          </p>
        </div>

        <Button asChild size="lg" className="shrink-0">
          <a href="/resume.pdf" download="Nafiz-Iqbal-Sumon-Resume.pdf">
            <Download className="mr-2 size-4" />
            Download CV
          </a>
        </Button>
      </div>

      {/* PDF Preview */}
      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileText className="size-5" />
            </div>

            <div>
              <h2 className="font-semibold">Resume Preview</h2>
              <p className="text-xs text-muted-foreground">PDF Document</p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Open PDF
          </a>
        </div>

        <iframe
          src="/resume.pdf"
          title="Nafiz Iqbal Sumon's Resume"
          className="h-[75vh] min-h-[600px] w-full bg-white"
        />
      </section>

      {/* PDF Help */}
      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-medium">Can&apos;t view the PDF?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Open the document separately or download a copy.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Open PDF
            </a>
          </Button>

          <Button asChild>
            <a href="/resume.pdf" download="Nafiz-Iqbal-Sumon-Resume.pdf">
              <Download className="mr-2 size-4" />
              Download
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
