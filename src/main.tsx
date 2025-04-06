import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { KcPage } from "./kc.gen";

import { getKcContextMock } from "./login/KcPageStory";

// 👇 Esto inyecta el contexto para la página de registro (mock)
if (import.meta.env.DEV) {
    window.kcContext = getKcContextMock({
        pageId: "register.ftl", // Puedes cambiar por "login.ftl", "info.ftl", etc.
        overrides: {}
    });
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {!window.kcContext ? (
            <h1>No Keycloak Context</h1>
        ) : (
            <KcPage kcContext={window.kcContext} />
        )}
    </StrictMode>
);
