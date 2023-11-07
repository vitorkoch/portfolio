export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-center p-24">
      <img
        src="/logo.png"
        width="64px"
        height="64px"
        alt="logo"
        className="shadow-accent shadow-md rounded-full"
      />
      <h1 className="text-xl flex gap-1">
        Hi, I&apos;m
        <span className="text-accent bold inline underline">Vitor Koch</span>
      </h1>
    </main>
  );
}
