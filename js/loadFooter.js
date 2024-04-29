function addFooter() {
    const footerTemplate = `
        <p style="text-align: center">Copyright 2024 - Alex Designs</p>
    `;
    const footer = document.getElementsByTagName('footer')[0];
    footer.innerHTML = footerTemplate;
}

addFooter()