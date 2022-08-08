import * as T from "../types";
import arroz from "../assets/images/arroz.png";
import arroztemperado from "../assets/images/arroztemperado.png";
import feijaotropeiro from "../assets/images/feijaotropeiro.png";
import lasanha from "../assets/images/lasanha.png";
import feijao from "../assets/images/feijao.png";
import quiabo from "../assets/images/quiabo.png";
import cocacola from "../assets/images/cocacola.png";
import cocaCola1 from "../assets/images/cocaCola1.png";
import pudim from "../assets/images/pudim.png";
import brigadeiro from "../assets/images/brigadeiro.png";
import beijinho from "../assets/images/beijinho.png";

export const mockedProducts: T.Product[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    name: "Feijao tropeiro",
    description: "Feijao com farinha temperada e carne",
    price: 17.99,
    ingredient: ["Feijao", "salada", "farinha"],
    image: `${feijaotropeiro}`,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10c6c5d1-24eb-436d-a21a-0c9b8516f9fa",
    name: "Arroz temperado",
    description: "Arroz temperado com cenoura milho frango desfiado",
    price: 22.99,
    ingredient: ["Arroz", "Cenoura", "Milho", "Frango desfiado"],
    image: `${arroztemperado}`,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "b201ee19-c00d-4e2a-bdf0-f4101348f1b5",
    name: "Arroz comum ",
    description: "Arroz Branco soltinho",
    price: 28.99,
    ingredient: ["Arroz"],
    image: `${arroz}`,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ef550853-9fb4-4b97-8e88-843c2f827ee4",
    name: "Lazanha",
    description: "Lasanha com molho branco da casa e mussarela caseira",
    price: 28.99,
    ingredient: ["Macarão ", "Mussarela", "presunto", "Molho Branco da Casa"],
    image: `${lasanha}`,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "75904227-fdc1-4cc2-a8e1-bf5f6449b2d8",
    name: "Feijao ",
    description: "Feikao da casa com cebola e alho ",
    price: 30.99,
    ingredient: ["Feijao", "Alho", "Cebola"],
    image: `${feijao}`,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "b1cb2926-59e1-4443-abd7-22ba2e81f9cf",
    name: "Quiabo com frango ",
    description:
      "Hamburguer com duas carnes bovinas de 180g, bacon e muito queijo cheddar.",
    price: 32.99,
    ingredient: ["Quiabo", "Frango", "Molho de Tomate"],
    image: `${quiabo}`,
    categoryId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "908816bd-c27d-4813-96a0-5096a0b65725",
    name: "Coca Cola 2l",
    description: "Refrigerante para adoçar sua vida",
    price: 12.99,
    ingredient: ["Secret"],
    image: `${cocacola}`,
    categoryId: "a6e86fe9-ca7f-40a3-9b95-331e749038f1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "731b7290-54c7-4f3c-80bf-fecefd2e08ea",
    name: "Cola Cola 300ml",
    description: "Refrigerante para adoçar sua vida",
    price: 22.99,
    ingredient: ["Secret"],
    image: `${cocaCola1}`,
    categoryId: "a6e86fe9-ca7f-40a3-9b95-331e749038f1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "c3147cd9-1edf-44a6-8e74-414c485b31b2",
    name: "Pudim de leite Condensado",
    description: "Maça macia como se estivese comendo um pedaço de nuvem",
    price: 3.99,
    ingredient: ["Leite Condensado", "Leite", "Ovo"],
    image: `${pudim}`,
    categoryId: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "22608f2d-131b-4a1d-b27f-fbeb8722eca6",
    name: "Brigadeiro",
    description: "Brigadiro caseiro com cacau ",
    price: 7.99,
    ingredient: ["Leite condensado", "Chocolate", "Creme de leite"],
    image: `${brigadeiro}`,
    categoryId: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cca818db-e7fa-4acc-99d7-c0667d9e068a",
    name: "Beijinho",
    description: "Beijinho caseiro com leite fresco",
    price: 2.99,
    ingredient: ["Leite condensado", "Coco ralado", "Creme de leite "],
    image: `${beijinho}`,
    categoryId: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedCategories: T.Category[] = [
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    name: "Pratos",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a6e86fe9-ca7f-40a3-9b95-331e749038f1",
    name: "Bebidas",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    name: "Sobremesas",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedTables: T.Table[] = [
  {
    id: "922135eb-97dd-47cb-b5d5-7497c753ad57",
    number: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4bf14495-5ae7-4313-9407-7ee9c506cf26",
    number: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "496df91e-0740-4950-b8f7-e1d33b1519d0",
    number: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "e9950c4a-d449-41d3-b91a-ccd1caa05fbb",
    number: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "323fad4f-7630-428d-9140-35d62f7f9c22",
    number: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedUsers: T.User[] = [
  {
    id: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    name: "Ivan Borba",
    email: "ivan@blue.com",
    password: "7ccbf779f22b9579f80ba3afebcb0e7e",
    country: "Brasil",
    state: "Minas Gerais",
    cities: "Dona Euzebia",
    cep: 1526,
    district: "Centro",
    street: "Rua Joao Carneiro",
    number: 1029,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedFavorites: T.Favorite[] = [
  {
    id: "35abf7f1-c999-4bcf-abfb-a95cb483a2b9",
    productName: "Burguer Salada e Queijo Especial",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
  {
    id: "9a5a8f0e-43aa-4d77-8afd-e3a95deddc81",
    productName: "Burguer Duplo Bacon e Cheddar",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
];

export const mockedOrders: T.Order[] = [
  {
    id: "e45555e4-8933-420b-bedb-9814c9a8374d",
    tableNumber: 1,
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    createdAt: new Date(),
  },
];

export const mockedOrdersToProducts: T.OrderToProduct[] = [
  {
    id: "41889bd0-a2a1-454d-823d-eb5d73d73e59",
    productId: "10c6c5d1-24eb-436d-a21a-0c9b8516f9fa",
    orderId: "e45555e4-8933-420b-bedb-9814c9a8374d",
    quantity: 2,
    createdAt: new Date(),
  },
  {
    id: "53eeb0a6-ed71-458c-b1e3-1a22ba4d2b76",
    productId: "b1cb2926-59e1-4443-abd7-22ba2e81f9cf",
    orderId: "e45555e4-8933-420b-bedb-9814c9a8374d",
    quantity: 1,
    createdAt: new Date(),
  },
];
