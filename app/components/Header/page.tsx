export default function Header() {
  return (
    <header className="flex items-center bg-[--black] w-full px-20 py-3">
      <nav className="flex justify-between w-full pt-3 pb-2 px-2 border-white border-b-2">
        <a className="text-white text-lg font-bold" href="/">
          Twój Domowy Budżet
        </a>
        <div className="flex gap-x-16">
          <a
            className="text-white hover:text-[--violet] font-medium transition"
            href="/login"
          >
            Zaloguj
          </a>
          <a
            className="text-white hover:text-[--violet] font-medium transition"
            href="/register"
          >
            Zarejestruj
          </a>
        </div>
      </nav>
    </header>
  );
}
