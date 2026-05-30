export default function App() {
  return (
    <div>
      <div style={{
        fontSize: "40px",
        color: "red",
        animation: "float 2s infinite"
      }}>
        FLOAT TESTE
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}