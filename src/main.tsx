import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { KcPage } from "./kc.gen";
import { getKcContextMock } from "./login/KcPageStory";

if (import.meta.env.DEV) {
    const urlParams = new URLSearchParams(window.location.search);
    const mockPageId = urlParams.get("mockPageId") ?? "login.ftl"; // Valor por defecto

    window.kcContext = getKcContextMock({
        pageId: mockPageId,
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
