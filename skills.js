
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".progress").forEach((bar) => {
                bar.style.width = bar.style.getPropertyValue("--progress-width");
            });
        });
    