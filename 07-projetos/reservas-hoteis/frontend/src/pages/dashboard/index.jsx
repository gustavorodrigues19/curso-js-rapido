import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import ModalComponent from "../../components/Modal";
import { getBookings } from "../../api";

// TODO:
// - Criar booking (backend já está pronto)
// - Criar um componente de modal para abstrair o componente
// - Criar a função de deletar a reserva
// - Criar a função de editar a reserva
// - Criar a função de sair do sistema
// - Ir para o dashboard caso o token já exista no localStorage
// - Criar função de loading
// - Criar registro de um novo usuário

export default function DashboardPage() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const headers = [
    {
      label: "Nome",
      key: "name",
    },
    {
      label: "Data de Checkin",
      key: "checkIn",
    },
    {
      label: "Data de Checkout",
      key: "checkOut",
    },
    {
      label: "Hóspedes",
      key: "people",
    },
  ];

  useEffect(() => {
    getBookings().then((res) => {
      setBookings(res);
    });
  }, []);

  return (
    <main>
      <nav className="bg-gray-800">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </div>
              <div className="w-full flex justify-end">
                <div className="flex space-x-4 justify-end">
                  <a
                    href="/"
                    aria-current="page"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Sair
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h2 class="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
            Lista de Reservas
          </h2>
          <div className="flex justify-end mb-4">
            <Button text="Nova Reserva" onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {headers.map((header) => (
                  <th scope="col" class="px-6 py-3">
                    {header.label}
                  </th>
                ))}
                <th scope="col" class="px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item) => (
                <tr class="bg-white border-b  border-gray-200">
                  {headers.map((header) => (
                    <td class="px-6 py-4">{item[header.key]}</td>
                  ))}
                  <td class="px-6 py-4 flex gap-2">
                    <span>Excluir</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </main>
  );
}
