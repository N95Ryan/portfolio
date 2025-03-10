"use client";
import { useTranslations, useLocale } from "next-intl";
import AboutPicture from "./aboutPicture";
import AboutInfos from "./aboutInfos";
import Link from "next/link";
import SocialMedia from "../socialMedia";

export default function About() {
  const t = useTranslations("about"); // Traductions pour "about"
  const tCta = useTranslations("cta"); // Traductions pour "cta"
  const locale = useLocale(); // Récupère la locale actuelle ("fr" ou "en")

  // Détermine le chemin du CV en fonction de la locale
  const cvPath = `/${locale === "fr" ? "CV_fr" : "CV_en"}.pdf`;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="animate-fade-down animate-once animate-duration-[1300ms]">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center">
          {t("title")}
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <AboutPicture />
        <AboutInfos />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex justify-center animate-fade-up animate-once animate-duration-[1300ms]">
          <Link
            href={cvPath} // Chemin dynamique basé sur la locale
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-indigo-600 text-white font-semibold text-lg rounded hover:bg-indigo-800 transition-colors"
          >
            {tCta("open_cv")}
          </Link>
        </div>
        <div className="flex justify-center animate-fade-up animate-once animate-duration-[1300ms]">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
