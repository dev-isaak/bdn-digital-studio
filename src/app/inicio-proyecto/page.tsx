"use client";
import { useState } from "react";
import HowToBeContacted from "./steps/HowToBeContacted";
import { Button } from "@nextui-org/react";
import WebType from "./steps/WebType";
import WhichSections from "./steps/WhichSections";
import WebPreferences from "./steps/WebPreferences";
import WebVisually from "./steps/WebVisually";
import Competitors from "./steps/Competitors";
import Analytics from "./steps/Analytics";
import Resources from "./steps/Resources";
import SEO from "./steps/SEO";
import HostingAndDomain from "./steps/HostingAndDomain";

export default function InicioProyecto() {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState({
		contact: "",
		whatYouHaveInMind: "",
		sections: {
			pages: [],
			description: "",
		},
		colorAndTypography: "",
		brand: "",
		competitors: "",
		analytics: {
			tools: [],
			description: "",
		},
		resources: "",
		seo: "",
		hostingAndDomain: "",
	});
	const totalSteps = 10;
	const stepTitles = [
		"Contacto",
		"Qué tienes en mente",
		"Secciones",
		"Colores y tipografías",
		"Marca",
		"Competidores",
		"Analíticas",
		"Recursos",
		"SEO",
		"Hosting y dominio",
	];

	const DynamicSteps = () => {
		const elements = Array.from({ length: totalSteps }, (_, index) => (
			<div className='flex gap-2 p-2' key={index}>
				<div
					className={
						step === index
							? "w-10 h-10 rounded-full flex justify-center items-center bg-secondary text-white"
							: "w-10 h-10 rounded-full flex justify-center items-center border-small border-secondary-50"
					}>
					<p>{index + 1}</p>
				</div>
				<div>
					<p className='text-sm'>Paso {index + 1}</p>
					<p className='font-medium uppercase'>{stepTitles[index]}</p>
				</div>
			</div>
		));

		return <div>{elements}</div>;
	};

	return (
		<section className='bg-green-200 p-2 pt-12 min-h-screen w-full'>
			<h1 className='uppercase xs:text-4xl md:text-4xl font-bold'>
				¿Empezamos con el proyecto?
			</h1>
			<h2 className='max-w-2xl mt-4'>
				Todo proyecto tiene un comienzo y a nosotros nos gusta empezar
				recolectando algo de información que nos ayudará a aclarar que ideas
				tienes en mente.
			</h2>

			<div className='flex mt-8'>
				<div className='bg-gray-300 w-[40%]'>
					<DynamicSteps />
				</div>
				<div className='bg-blue-200 w-full  flex flex-col gap-2 items-center justify-center'>
					{step === 0 && (
						<HowToBeContacted formData={formData} setFormData={setFormData} />
					)}
					{step === 1 && (
						<WebType formData={formData} setFormData={setFormData} />
					)}
					{step === 2 && (
						<WhichSections formData={formData} setFormData={setFormData} />
					)}
					{step === 3 && (
						<WebPreferences formData={formData} setFormData={setFormData} />
					)}
					{step === 4 && (
						<WebVisually formData={formData} setFormData={setFormData} />
					)}
					{step === 5 && (
						<Competitors formData={formData} setFormData={setFormData} />
					)}
					{step === 6 && (
						<Analytics formData={formData} setFormData={setFormData} />
					)}
					{step === 7 && <Resources />}
					{step === 8 && <SEO />}
					{step === 9 && (
						<HostingAndDomain formData={formData} setFormData={setFormData} />
					)}
					<div className='flex flex-col md:flex-row gap-2'>
						{step !== 0 && (
							<Button onPress={() => setStep(step - 1)}>Anterior</Button>
						)}
						{step < totalSteps - 1 && (
							<Button onPress={() => setStep(step + 1)}>Siguiente</Button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
