"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CookieSettings from "./CookieSettings";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";

export default function BannerCookies() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultOpen: true }); // Default abierto
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false); // Estado del switch
  const [disabledConfigButton, setDisabledConfigButton] = useState(true);
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null); // banner activo

  useEffect(() => {
    // Obtiene el consentimiento almacenado en localStorage
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
    if (storedCookieConsent !== null) {
      onClose(); // Si ya se dio consentimiento, cierra el modal
    }
  }, [onClose]);

  useEffect(() => {
    if (cookieConsent === null) return;

    // Actualiza el modo de consentimiento en Google Analytics
    const newValue = cookieConsent ? "granted" : "denied";
    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    // Almacena el consentimiento en localStorage
    setLocalStorage("cookie_consent", cookieConsent);

    // Cierra el modal
    onClose();
  }, [cookieConsent, onClose]);

  // Actualiza el estado del botón basado en el switch
  const handleSwitchChange = (enabled: boolean) => {
    setIsSwitchEnabled(enabled);
    setDisabledConfigButton(!enabled);
  };

  const handleDenyCookies = () => {
    setCookieConsent(false);
  };

  const handleAcceptCookies = () => {
    setCookieConsent(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
      size="4xl"
      isDismissable={false}
      hideCloseButton={true}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Información sobre cookies 🍪
        </ModalHeader>
        <ModalBody>
          <p className="text-sm">
            BDN Digital Studio utiliza, como corresponsables del tratamiento,
            cookies propias y de terceros para mejorar su navegación por nuestro
            sitio web, distinguirle de otros usuarios, analizar sus hábitos para
            mejorar la calidad de nuestros servicios y su experiencia de
            usuario. Para más información, acceda a nuestra Política de cookies.
            Puede aceptar la instalación de todas las cookies haciendo clic en
            el botón “Aceptar Cookies”, configurar tus preferencias haciendo
            clic en el botón “Guardar configuración”, o rechazar su instalación,
            haciendo clic en el botón “Denegar Cookies”.
          </p>
          {/* Pasar estado y controlador como props */}
          <CookieSettings
            isSwitchEnabled={isSwitchEnabled}
            onSwitchChange={handleSwitchChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" isDisabled={disabledConfigButton}>
            Guardar configuración
          </Button>
          <Button color="primary" onPress={handleDenyCookies}>
            Denegar todas
          </Button>
          <Button color="primary" onPress={handleAcceptCookies}>
            Aceptar todas
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
