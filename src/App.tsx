// import React, { useState, useCallback,  } from 'react';


// interface ButtonProps {
//   onClick: () => void;
// }

// const Button = React.memo(({ onClick }: ButtonProps) => {
//   console.log('Renderizou o Button');
//   return <button onClick={onClick}>Clique aqui</button>;
// });


// const ParentComponent: React.FC = () => {
//   const [count, setCount] = useState(0);

//   // Função memorizada pelo useCallback
//   const handleClick = useCallback(() => {
//     console.log('Botão clicado!');
//     setCount((prevCount) => prevCount + 1);
//   }, []); // Nenhuma dependência, a função não será recriada em novas renderizações

//   return (
//     <div>
//       <p>Você clicou {count} vezes</p>
//       <Button onClick={handleClick} />
//     </div>
//   );
// };

// export default ParentComponent;


import React, { useState } from 'react';

// Definindo o tipo das props do botão
interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  console.log('Renderizou o Button');
  return <button onClick={onClick}>Clique aqui</button>;
};

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  // Função recriada em cada renderização
  const handleClick = () => {
    console.log('Botão clicado!');
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <Button onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;

// import React, { useState, useCallback } from "react";

// // Componente filho
// const Button = React.memo(({ handleClick, children }) => {
//   console.log("Botão renderizado: ", children);
//   return <button onClick={handleClick}>{children}</button>;
// });

// // Componente principal
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);

//   // useCallback memoriza a função para evitar a recriação em cada renderização
//   const increment = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   // Esta função vai ser recriada sempre que o componente for renderizado
//   const incrementAnother = () => {
//     setAnotherCount(anotherCount + 1);
//   };

//   return (
//     <div>
//       <h1>Contador: {count}</h1>
//       <Button handleClick={increment}>Incrementar Count</Button>

//       <h1>Outro Contador: {anotherCount}</h1>
//       <Button handleClick={incrementAnother}>Incrementar Outro Count</Button>
//     </div>
//   );
// };

// export default App;