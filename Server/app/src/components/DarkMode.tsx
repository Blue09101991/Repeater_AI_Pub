import "./DarkMode.css";
import { ChangeEventHandler } from "react";

const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
    setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
        setDark();
    } else {
        setLight();
    }
};

const DarkMode = () => {
    return (
        <div className="align-middle mt-1">
            <div className="flex basis-full my-2.5 lg:mb-0 space-x-2">
                <div className="toggle-theme-wrapper">
                    <label className="toggle-theme" htmlFor="checkbox">
                        <input
                            type="checkbox"
                            id="checkbox"
                            onChange={toggleTheme}
                            defaultChecked={defaultDark}
                        />
                        <div className="slider round"></div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DarkMode;
