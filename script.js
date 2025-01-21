const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    // close any already open content
    const openContent = document.querySelector(".accordion-container.show");
    if (openContent && openContent !== header.nextElementSibling) {
      openContent.classList.remove("show");
    }
    // Toggle the clicked content
    const content = header.nextElementSibling;
    content.classList.toggle("show");
  });
});
