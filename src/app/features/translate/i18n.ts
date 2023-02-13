/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import en from "./en/en_dict.json"
import ru from "./ru/ru_dict.json"

void i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: en,
            },

            ru: {
                translation: ru,
            },
        },
    })
