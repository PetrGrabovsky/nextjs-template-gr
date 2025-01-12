/** @type {import('prettier').Config} */
module.exports = {
  /**
   * Základní pravidla pro formátování kódu
   */
  printWidth: 100, // Maximální délka řádku před zalomením
  tabWidth: 2, // Počet mezer na tabulátor
  useTabs: false, // Používat mezery místo tabulátorů
  semi: true, // Přidávat středníky na konec řádků
  singleQuote: true, // Používat jednoduché uvozovky místo dvojitých
  jsxSingleQuote: true, // Používat jednoduché uvozovky v JSX
  quoteProps: 'as-needed', // Přidávat uvozovky k názvům vlastností jen v nutných případech
  trailingComma: 'all', // Přidávat čárky na konci seznamů a objektů
  bracketSpacing: true, // Přidávat mezery mezi závorky a obsahem (např. { foo: bar })
  arrowParens: 'always', // Vždy používat závorky u parametrů šipkových funkcí
  endOfLine: 'lf', // Používat unixový styl ukončení řádků (LF)
  proseWrap: 'preserve', // Zachovat existující zalamování textu v Markdownu

  /**
   * Pluginy pro rozšíření funkcionality Prettier
   */
  plugins: [
    'prettier-plugin-tailwindcss', // Automatické třídění Tailwind CSS tříd podle jejich priorit
    'prettier-plugin-prisma', // Formátování souborů Prisma schématu
    'prettier-plugin-packagejson', // Automatické řazení klíčů v souboru package.json
    'prettier-plugin-sort-json', // Abecední třídění klíčů v JSON souborech
    '@prettier/plugin-xml', // Formátování XML souborů (např. SVG, RSS)
  ],
};
