import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      //Screens
      "WELCOME": "WELCOME",
      "Get Started": "Get Started",
      "Help": "Help",
      "Dashboard": "Dashboard",
      "Arrival Time": "Arrival Time", 
      "Route Name": "Route Name",
      "Terminal Station Gate": "Terminal Station Gate",
      "Feels Like:": "Feels Like:",
      "ROUTE 1 - BOWNESS": "ROUTE 1 - BOWNESS",
      "ROUTE 82 - NOLAN HILL": "ROUTE 82 - NOLAN HILL",
      "ROUTE 8 - NORTH POINTE": "ROUTE 8 - NORTH POINTE",
      "Purchase Ticket": "Purchase Ticket",
      "Route Information": "Route Information",
      "Refund": "Refund",
      "Cancel": "Cancel",
      "Payment": "Payment",
      "Please insert or tap card": "Please insert or tap card",
      "Accepted Card Types": "Accepted Card Types",
      "Summary": "Summary",
      "Total Tickets:": "Total Tickets:",
      "Purchase Tickets": "Purchase Tickets",
      "Cancel Purchase": "Cancel Purchase",
      "Select Route:": "Select Route;",
      "Next Departure:": "Next Departure:",
      "Route Number:": "Route Number:",
      "Duration: ": "Duration: ",
      "Next": "Next",
      "Return to Dashboard": "Return to Dashboard",
      "Number of Stops:": "Number of Stops:",
      "More Info": "More Info",
      "Route Map": "Route Map",
      "Refund": "Refund",
      "Reference Number": "Reference Number",
      "Please find the reference number on the ticket. Example format: BOW145": "Please find the reference number on the ticket. Example format: BOW145",
      "Enter reference Number": "Enter reference Number",
      "Dashboard": "Dashboard",
      "Enter reference Number": "Enter reference Number",
      "More Information": "More Information",
      "Next Departures": "Next Departures",
      "Bus Types": "Bus Types",
      "Last departure": "Last departure",
      "Bus Frequency": "Bus Frequency",
      "Monday-Friday": "Monday-Friday",
      "Every 15 minutes": "Every 15 minutes",
      "Saturday-Sunday": "Saturday-Sunday",
      "Every 45 minutes": "Every 45 minutes",
      "Buses offering accessibility are identified with this icon": "Buses offering accessibility are identified with this icon",
      "Return to Route Information": "Return to Route Information",
      "Refund Success": "Refund Success",
      "Refund Failed": "Refund Failed",
      "Your refund has been initiated.": "Your refund has been initiated.",
      "Please contact us via 📧 email or phone 📞+1-(403)-262-1000 in 24 hours if your refund is not processed on your original payment method.": "Please contact us via 📧 email or phone 📞+1-(403)-262-1000 in 24 hours if your refund is not processed on your original payment method.",
      "You have entered an incorrect reference number. Please return to the refund screen to try again.": "You have entered an incorrect reference number. Please return to the refund screen to try again.",
      "Please find your tickets below": "Please find your tickets below",
      "Purchase Successful": "Purchase Successful",
      "Refunds can be processed within 1 hour with reference code on ticket": "Refunds can be processed within 1 hour with reference code on ticket",
      //Components
      "Confirmation": "Confirmation",
      "Are you sure you want to go back to the bus ticketing kiosk homepage?": "Are you sure you want to go back to the bus ticketing kiosk homepage?",
      "Confirm": "Confirm",
      "Calgary Transit Office": "Calgary Transit Office",
      "Address:": "Address:",
      "Phone:": "Phone:",
      "Email:": "Email",
      "If you're facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.": "If you're facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.",
      "Close": "Close",
      "Adult": "Adult",
      "Youth": "Youth",
      "Child": "Child"

    }
  },
  fr: {
    translation: {
        "WELCOME": "BIENVENUE",
        "Get Started": "Commencer",
        "Help": "Aide",
        "Dashboard": "Tableau de bord",
        "Arrival Time": "Heure d'arrivée", 
        "Route Name": "Nom de l'itinéraire",
        "Terminal Station Gate": "Porte de la station terminale",
        "Feels Like:": "Ressenti:",
        "ROUTE 1 - BOWNESS": "ROUTE 1 - BOWNESS",
        "ROUTE 82 - NOLAN HILL": "ROUTE 82 - NOLAN HILL",
        "ROUTE 8 - NORTH POINTE": "ROUTE 8 - NORTH POINTE",
        "Purchase Ticket": "Acheter un billet",
        "Route Information": "Informations sur l'itinéraire",
        "Refund": "Remboursement",
        "Cancel": "Annuler",
        "Payment": "Paiement",
        "Please insert or tap card": "Veuillez insérer ou taper la carte",
        "Accepted Card Types": "Types de cartes acceptées",
        "Summary": "Résumé",
        "Total Tickets:": "Total des billets:",
        "Cancel Purchase": "Annuler l'achat",
        "Purchase Tickets": "Acheter un billets",
        "Select Route:": "Sélectionnez l'itinéraire:",
        "Next Departure:": "Prochain départ:",
        "Route Number:": "Numéro de l'itinéraire:",
        "Duration: ": "Durée:",
        "Next": "Suivant",
        "Return to Dashboard": "Retour au tableau de bord",
        "Number of Stops:": "Nombre d'arrêts:",
        "More Info": "Plus d'infos",
        "Route Map": "Carte de l'itinéraire",
        "Refund": "Remboursement",
        "Reference Number": "Numéro de référence",
        "Please find the reference number on the ticket. Example format: BOW145": "Veuillez trouver le numéro de référence sur le billet. Format d'exemple: BOW145",
        "Enter reference Number": "Enter reference Number",
        "Dashboard": "Tableau de bord",
        "Enter reference Number": "Entrez le numéro de référence",
        "More Information": "Plus d'informations",
        "Next Departures": "Prochains départs",
        "Bus Types": "Types de bus",
        "Last departure": "Dernier départ",
        "Bus Frequency": "Fréquence des bus",
        "Monday-Friday": "Lundi-Vendredi",
        "Every 15 minutes": "Toutes les 15 minutes",
        "Saturday-Sunday": "Samedi-Dimanche",
        "Every 45 minutes": "Toutes les 45 minutes",
        "Buses offering accessibility are identified with this icon": "Les bus offrant l'accessibilité sont identifiés par cette icône",
        "Return to Route Information": "Retour aux informations de l'itinéraire",
        "Refund Success": "Remboursement réussi",
        "Refund Failed": "Échec du remboursement",
        "Your refund has been initiated.": "Votre remboursement a été initié.",
        "Please contact us via 📧 email or phone 📞+1-(403)-262-1000 in 24 hours if your refund is not processed on your original payment method.": "Veuillez nous contacter par 📧 email ou téléphone 📞+1-(403)-262-1000 dans les 24 heures si votre remboursement n'est pas traité sur votre méthode de paiement originale.",
        "You have entered an incorrect reference number. Please return to the refund screen to try again.": "Vous avez saisi un numéro de référence incorrect. Veuillez retourner à l'écran de remboursement pour réessayer.",
        "Please find your tickets below": "Veuillez trouver vos billets ci-dessous",
        "Purchase Successful": "Achat réussi",
        "Refunds can be processed within 1 hour with reference code on ticket": "Les remboursements peuvent être traités dans l'heure avec le code de référence sur le billet",

        //Components
        "Confirmation": "Confirmation",
        "Are you sure you want to go back to the bus ticketing kiosk homepage?": "Êtes-vous sûr de vouloir retourner à la page d'accueil du kiosque de billetterie de bus ?",
        "Confirm": "Confirmer",
        "Calgary Transit Office": "Bureau de Transit de Calgary",
        "Address:": "Adresse:",
        "Phone:": "Téléphone:",
        "Email:": "Email:",
        "If you're facing immediate issues at the kiosk, press the emergency button located at the side of the kiosk. Assistance will be on the way.": "Si vous rencontrez des problèmes immédiats au kiosque, appuyez sur le bouton d'urgence situé à côté du kiosque. L'assistance est en route.",
        "Close": "Fermer",
        "Adult": "Adulte",
        "Youth": "Jeunesse",
        "Child": "Enfant"
    }
  }
};

i18n
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng: "en", // Use English if the detected language is not available
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
