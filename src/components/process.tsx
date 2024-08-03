import { Icon } from "@iconify/react";

interface Process {
  _key: string;
  text: string;
  title: string;
  icon: {
    name: string | null;
  };
}

interface ProcessProps {
  title: string;
  processes: Process[];
}

export function Process({ title, processes }: ProcessProps) {
  return (
    <section className="container mt-8 py-8">
      <h2 className="mb-10 text-balance text-center font-title text-2xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {processes.map((process) => (
          <ProcessCard key={process._key} {...process} />
        ))}
      </div>
    </section>
  );
}

function ProcessCard({ title, icon, text }: Process) {
  return (
    <article className="group relative flex flex-col items-center gap-y-4 rounded border border-primary-light bg-foreground px-6 py-7 text-center shadow-sm">
      <div
        className="flex w-fit items-center justify-center bg-primary p-3.5 text-primary-content"
        aria-hidden
      >
        <Icon
          icon={icon.name as string}
          className="size-[30px] transition-transform duration-300 group-hover:rotate-[360deg]"
        />
      </div>
      <hgroup className="space-y-2">
        <h3 className="font-title text-2xl uppercase tracking-tight">
          {title}
        </h3>
        <p className="leading-tight text-copy-light">{text}</p>
      </hgroup>
    </article>
  );
}
