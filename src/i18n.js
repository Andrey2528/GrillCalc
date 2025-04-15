import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        lng: Cookies.get("language") || "en",
        fallbackLng: ["en", "uk", "ru",],
        detection: { order: ["cookie"], cache: ["cookie"] },
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {

                },
            },
            uk: {
                translation: {
                    home: {
                      "title": "SitePulse — контроль продуктивності веб-сайтів",
                      "description": "SitePulse — це інструмент для автоматичного моніторингу швидкодії, доступності та стабільності веб-ресурсів. Отримуй аналітику, попередження про збої та рекомендації для оптимізації у реальному часі."
                    },
                    buttons: {
                      "startMonitoring": "Почати моніторинг",
                      "checkStatus": "Перевірити статус",
                      "checkReport": "Переглянути звіти",
                    },
                    navMenu: {
                        "logo": "SitePulse",
                        "link1": "Головна",
                        "link2": "Інформація",
                        "link3": "Головна сторінка",
                        "link4": "Дашборд",
                        "link5": "English",
                        "link6": "Українська",
                        "link7": "руский",
                    }                       
                },
            },

        },
    });

export default i18n;
