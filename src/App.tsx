import Landing from "./Landing";

export default function App() {
  return (
    <>
      {/* Skip-to-content para leitores de tela e navegação por teclado */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Landing />
    </>
  );
}
