"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const containerStyle = {
  width: "100%",
  height: "100%",
  transition: "0.2s",
};

const noClickStyle = {
  borderRadius: "8px",
  width: "100%",
  height: "100%",
  transition: "0.2s",
};

export default function Mapa() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_Maps_API_KEY || "",
  });
  const { t } = useTranslation();

  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [isClick, setIsClicked] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        },
        (err) => console.error("Erro ao obter localização:", err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const clickHandle = () => setIsClicked(!isClick);

  if (!isLoaded || !position) {
    return (
      <section id="localizacao" className="flex items-center justify-center w-full h-screen bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  return (
    <section id="localizacao" className="bg-gradient-to-r from-white to-blue-400 w-full h-screen dark:from-black dark:to-black/90">
      {isClick ? (
        <div className="relative w-full h-full">
          <GoogleMap
            onClick={clickHandle}
            mapContainerStyle={containerStyle}
            center={position}
            zoom={15}
            options={{ disableDefaultUI: true, zoomControl: true }}
          >
            <Marker position={position} />
          </GoogleMap>
        </div>
      ) : (
        <div className="pt-6 flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mt-2 mb-4">{t('Location.page_title')}</h1>
          <div className="w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] xs:w-[250px] xs:h-[250px]">
            <GoogleMap
              onClick={clickHandle}
              mapContainerStyle={noClickStyle}
              center={position}
              zoom={15}
              options={{ disableDefaultUI: true, zoomControl: true }}
            >
              <Marker position={position} />
            </GoogleMap>
          </div>
          <div>
            <p className="mt-6">
              {t('Location.you_are_at', { lat: position.lat.toFixed(4), lng: position.lng.toFixed(4) })}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}