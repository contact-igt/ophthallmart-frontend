
(async () => {
    const fs = require('fs');
    const path = 'd:\\INVICTUS\\ophthallmart-frontend\\src\\data\\mockData.js';
    const content = fs.readFileSync(path, 'utf8');

    // Extract PRODUCTS array
    const match = content.match(/export const PRODUCTS = \[\s*([\s\S]*?)\];/);
    if (!match) return;

    let products = eval('[' + match[1] + ']');

    // Sort alphabetically
    products.sort((a, b) => a.name.localeCompare(b.name));

    // Get first 12
    const first12 = products.slice(0, 12);

    console.log("First 12 products (Alphabetical):");
    first12.forEach((p, i) => {
        console.log(`${i + 1}. ID: ${p.id}, Name: ${p.name}`);
    });
})();
