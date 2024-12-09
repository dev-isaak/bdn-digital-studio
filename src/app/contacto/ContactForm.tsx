"use client";
import React from "react";
import { Form, Input, Checkbox, Button, Textarea } from "@nextui-org/react";
import "react-toastify/dist/ReactToastify.css";
import { errorToast } from "../_components/toastify";
import { useRouter } from "next/navigation";

export const metadata = {
  alternates: {
    canonical: `https://bdndigitalstudio.com/contacto`,
  },
  title: `Contacto | BDN Digital Studio`,
  description: `Contáctanos en BDN Digital Studio, expertos en desarrollo web, mantenimiento, SEO, SEM y gestión de redes sociales. Descubre cómo podemos impulsar tu negocio con soluciones digitales personalizadas. ¡No te lo pienses!`,
};

interface ErrorProps {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  terms: string;
  web: string;
  seo: string;
  sem: string;
  webDesign: string;
  wordpressDevelopment: string;
  customDevelopment: string;
  webMaintenance: string;
  webOptimization: string;
  description: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [errors, setErrors] = React.useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    terms: "",
    web: "",
    seo: "",
    sem: "",
    webDesign: "",
    wordpressDevelopment: "",
    customDevelopment: "",
    webMaintenance: "",
    webOptimization: "",
    description: "",
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors = {} as ErrorProps;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    if (!data.terms) {
      setErrors({ ...errors, terms: "Please accept the terms" });

      return;
    }

    // Clear errors and submit
    setErrors({
      name: "",
      lastname: "",
      email: "",
      phone: "",
      terms: "",
      web: "",
      seo: "",
      sem: "",
      webDesign: "",
      wordpressDevelopment: "",
      customDevelopment: "",
      webMaintenance: "",
      webOptimization: "",
      description: "",
    });

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res)
      errorToast(
        "No se ha podido enviar el correo. Prueba de nuevo más tarde."
      );
    router.push("/mensaje-enviado");
  };

  return (
    <Form
      className="max-w-2xl m-auto items-center my-10"
      validationBehavior="native"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-8 w-full">
        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Por favor introduce tu nombre";
            }

            return errors.name;
          }}
          label="Nombre"
          labelPlacement="outside"
          name="name"
          placeholder="Introduce tu nombre"
          variant="underlined"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Por favor introduce tu apellido";
            }

            return errors.lastname;
          }}
          label="Apellidos"
          labelPlacement="outside"
          name="lastname"
          placeholder="Introduce tu apellido"
          variant="underlined"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Porfavor introduce tu email";
            }
            if (validationDetails.typeMismatch) {
              return "Por favor introduce un email válido";
            }
          }}
          label="email"
          labelPlacement="outside"
          name="email"
          placeholder="Introduce tu email"
          type="email"
          variant="underlined"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Porfavor introduce tu teléfono";
            }

            return errors.phone;
          }}
          label="Teléfono"
          labelPlacement="outside"
          name="telf"
          placeholder="Introduce tu teléfono"
          variant="underlined"
        />

        <Input
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Porfavor introduce la página web de tu empresa";
            }

            return errors.web;
          }}
          label="Web de tu empresa"
          labelPlacement="outside"
          name="web"
          placeholder="Introduce la página web de tu empresa"
          variant="underlined"
        />

        <p className="text-sm">¿En que podemos ayudarte?</p>
        <div className="flex flex-col gap-4 ml-4">
          <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.seo}
            name="seo"
            validationBehavior="aria"
            value="true"
            onValueChange={() => setErrors((prev) => ({ ...prev, seo: "" }))}
          >
            Posicionamiento SEO
          </Checkbox>

          <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.sem}
            name="sem"
            validationBehavior="aria"
            value="true"
            onValueChange={() => setErrors((prev) => ({ ...prev, sem: "" }))}
          >
            Posicionamiento SEM
          </Checkbox>

          <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.webDesign}
            name="webDesign"
            validationBehavior="aria"
            value="true"
            onValueChange={() =>
              setErrors((prev) => ({ ...prev, webDesign: "" }))
            }
          >
            Diseño Web
          </Checkbox>

          <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.wordpressDevelopment}
            name="wordpressDevelopment"
            validationBehavior="aria"
            value="true"
            onValueChange={() =>
              setErrors((prev) => ({
                ...prev,
                wordpressDevelopment: "",
              }))
            }
          >
            Desarrollo web Wordpress
          </Checkbox>

          <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.customDevelopment}
            name="customDevelopment"
            validationBehavior="aria"
            value="true"
            onValueChange={() =>
              setErrors((prev) => ({ ...prev, customDevelopment: "" }))
            }
          >
            Desarrollo a medida
          </Checkbox>

          <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.webMaintenance}
            name="webMaintenance"
            validationBehavior="aria"
            value="true"
            onValueChange={() =>
              setErrors((prev) => ({ ...prev, webMaintenance: "" }))
            }
          >
            Mantenimiento web
          </Checkbox>

          <Checkbox
            isRequired
            classNames={{
              label: "text-small",
            }}
            isInvalid={!!errors.webOptimization}
            name="webOptimization"
            validationBehavior="aria"
            value="true"
            onValueChange={() =>
              setErrors((prev) => ({ ...prev, webOptimization: "" }))
            }
          >
            Optimización web
          </Checkbox>
        </div>

        <Textarea
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Porfavor introduce una descripción";
            }

            return errors.description;
          }}
          label="Descripción"
          labelPlacement="outside"
          name="description"
          placeholder="Introduce una breve descripción"
          variant="underlined"
        />

        <Checkbox
          isRequired
          classNames={{
            label: "text-small",
          }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          value="true"
          onValueChange={() => setErrors((prev) => ({ ...prev, terms: "" }))}
        >
          He leido y acepto los Términos y Condiciones
        </Checkbox>

        {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )}

        <div className="flex gap-4">
          <Button className="w-fit" color="primary" type="submit">
            Contactar
          </Button>
        </div>
      </div>
    </Form>
  );
}
