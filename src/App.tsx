import { useState } from "react";
import ItemKoder from "./components/ItemKoder";

export default function App() {
  const [ koders, setKoders ] = useState<{firstName:string, lastName:string}[]>([]); //operador diamante
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function onAddItem () {
    setKoders([{firstName, lastName}, ...koders]);
    setFirstName('')
    setLastName('')
    
  }

  function onEnter (event) {
    if(event.key === 'Enter'){
      onAddItem();
    }
  }

  function onDelete (indexToDelete) {
    koders.splice(indexToDelete, 1); //Tambien se pudiera utilizar filter, la ventaja es que filter regresa un nuevo arreglo (es decir, no muta el array original) y por lo tanto no se requeriria utilizar un spread operator en la siguiente linea
    setKoders([...koders]) // El spread operator se utiliza aquí para hacer una copia de task
  }

  function empty(){
    setKoders([])
  }

  return (
    <main className="bg-gradient-to-b from-slate-600 to-slate-800 min-h-screen flex items-center text-white p-10 flex-col gap-10">
      <h1 className="text-3xl font-bold">Lista de Koders</h1>

      <section className="flex flex-row gap-2 w-full justify-center max-w-md">
        <input
          id="firstName"
          type="text"
          className="bg-stone-100 border text-black border-white/10 rounded w-full p-3"
          onChange={(event) => setFirstName(event.target.value,)}
          onKeyUp = {onEnter}
          value={firstName}
          placeholder="nombre"
        />
        <input
          id="lastName"
          type="text"
          className="bg-stone-100 border text-black border-white/10 rounded w-full p-3"
          onChange={(event) => setLastName(event.target.value)}
          onKeyUp = {onEnter}
          value={lastName}
          placeholder="apellido"
        />
        <button
          type="submit"
          className="bg-stone-300 text-2xl font-semibold text-black flex items-center justify-center p-2 rounded w-1/5"
          onClick={onAddItem}
        >
          +
        </button>
      </section>

      <section className="w-full flex flex-col gap-3">
        {koders.map((koder, index) => {
          return (
            <ItemKoder
              key={`task-${index}`}
              firstName={koder.firstName}
              lastName={koder.lastName}
              onDelete={() => onDelete(index)} //a diferencia de la linea 45 o 53 aquí se llama a la función con una función anonima porque va a requerir de un parámetro, en las otras lineas mencionadas funcionaba directamente con el evento ... por eso no era necesario pasar la función como anonima
            />
          );
        })}
      </section>

      <button className="bg-yellow-600 font-semibold w-full max-w-md p-2 rounded" onClick={empty}>
        🗑️ BORRAR TODO 🗑️
      </button>
    </main>
  );
}

