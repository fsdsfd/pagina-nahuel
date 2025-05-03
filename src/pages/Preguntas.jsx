import React from 'react'
import { useState } from "react";
import PreguntasInner from './PreguntasInner';
import './Preguntas.scss'
const Preguntas = () => {

const faqs = [
  {
    question: "¿Cómo hago para comprar?",
    answer: "Ingresa a nuestra sección de tienda online para realizar la compra de nuestros productos."
  },
  {
    question: "¿Dónde puedo ver los productos?",
    answer: "En nuestras sucursales podes conocer todos los modelos de nuestros productos. Dirección: Cafferata 3226, Rosario Santa Fe"
  },
  {
    question: "¿Fabrican productos a medida?",
    answer: "No fabricamos productos a medida. Todos los artefactos se fabrican en forma estandarizada."
  },
  {
    question: "¿Cuánto tiempo tardan en entregar un producto?",
    answer: "El tiempo de entrega depende del producto, pero suele ser entre 5 y 10 días hábiles."
  },
  {
    question: "¿Ofrecen garantía en sus productos?",
    answer: "Sí, todos nuestros productos cuentan con garantía de fábrica por 12 meses."
  },
];



  return (
    <div className="">
    <h2 className="h1-preguntas">Preguntas Frecuentes</h2>
    {faqs.map((faq, index) => (
      <PreguntasInner key={index} {...faq} />
    ))}

  </div>
  )
}

export default Preguntas