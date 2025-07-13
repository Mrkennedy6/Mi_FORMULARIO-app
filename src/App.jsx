import { useForm } from "react-hook-form";
import "./index.css";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-lg font-bold mb-4">Formulario</h2>

        <input
          {...register("email", { required: "Correo requerido" })}
          className="w-full p-2 border rounded mb-2"
          placeholder="Correo electrónico"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <button className="bg-blue-600 text-white py-2 w-full rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
