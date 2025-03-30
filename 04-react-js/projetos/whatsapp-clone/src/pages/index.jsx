import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function HomePage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/chats");
    console.log("Form submitted:", formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="max-w-md mx-auto flex min-h-full flex-col justify-center px-6 py-12">
        <div>
          <img
            alt="Your Company"
            src="https://img.freepik.com/vetores-premium/icone-redondo-do-aplicativo-whatsapp-mensageiro-popular-logo-da-midia-social_277909-873.jpg"
            className="mx-auto h-28 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold text-gray-900">
            Faça login para continuar
          </h2>
        </div>

        <div className="mt-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
