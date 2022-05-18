export const onHandlerSmoothScroll = (e: any, elementId: string) => {
    let hero = document.getElementById(elementId);
    e.preventDefault();  // Stop Page Reloading
    hero && hero.scrollIntoView({behavior: "smooth",});
}

