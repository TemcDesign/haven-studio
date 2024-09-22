"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

type Theme = "light" | "dark"; // Define un tipo específico para los temas

const themesIcons: Record<Theme, string> = {
  light: "ri:moon-fill", // Icono para tema claro
  dark: "ri:sun-fill", // Icono para tema oscuro
};

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Aplicar el tema guardado en el localStorage al cargar
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Guardar el tema en localStorage
  };

  return (
    <button onClick={toggleTheme} className="flex items-center p-2">
      <Icon icon={themesIcons[theme]} className="w-5 h-5 text-white" />
    </button>
  );
}
