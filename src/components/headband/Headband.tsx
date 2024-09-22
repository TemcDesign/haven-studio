import LanguagesSwitcher from "./LanguagesSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Headband() {
  return (
    <>
      <section className="flex justify-between items-center px-6 w-full h-10 bg-primary dark:bg-dark lg:justify-end lg:gap-6">
        <LanguagesSwitcher />
        <ThemeSwitcher />
      </section>
    </>
  );
}
