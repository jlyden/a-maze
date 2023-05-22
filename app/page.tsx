import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-4 items-center p-24">
      <h1>hello, next.js!</h1>
      <h2>this is a-maze</h2>
        <Image
          src="/maze.svg"
          alt="maze image"
          className="dark:invert"
          width={100}
          height={100}
          priority
        />
      <a
          href="/original"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Original Home{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
        </a>
    </main>
  );
}