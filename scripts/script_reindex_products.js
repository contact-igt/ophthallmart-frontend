const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockData.js');
const rawData = fs.readFileSync(filePath, 'utf8');
const lines = rawData.split('\n');

let newLines = [...lines];
let idMap = {};
let newIdCounter = 1;

// Helper to find range
function findRange(lines, variableName) {
    const startRegex = new RegExp(`export const ${variableName} = \\[`);
    const startLine = lines.findIndex(l => startRegex.test(l));
    if (startLine === -1) return null;

    let endLine = -1;
    let bracketCount = 0;
    for (let i = startLine; i < lines.length; i++) {
        const line = lines[i];
        bracketCount += (line.match(/\[/g) || []).length;
        bracketCount -= (line.match(/\]/g) || []).length;
        if (bracketCount === 0 && i > startLine) {
            endLine = i;
            break;
        }
    }
    return { start: startLine, end: endLine };
}

// 1. Process PRODUCTS
const productsRange = findRange(lines, 'PRODUCTS');
if (productsRange) {
    console.log('Found PRODUCTS range:', productsRange);
    for (let i = productsRange.start + 1; i < productsRange.end; i++) {
        const line = newLines[i];
        const match = line.match(/\{ id: (\d+),/);
        if (match) {
            const oldId = parseInt(match[1]);
            const newId = newIdCounter++;
            idMap[oldId] = newId;
            newLines[i] = line.replace(`id: ${oldId},`, `id: ${newId},`);
        }
    }
} else {
    console.error('Could not find PRODUCTS array');
    process.exit(1);
}

console.log('ID Mapping created (first 5):', Object.entries(idMap).slice(0, 5));

// 2. Process other arrays
const arraysToUpdate = ['BEST_SELLING_PRODUCTS', 'TRENDING_PRODUCTS', 'FEATURED_PRODUCTS'];

arraysToUpdate.forEach(arrName => {
    const range = findRange(lines, arrName);
    if (!range) {
        console.log(`Skipping ${arrName} (not found)`);
        return;
    }
    console.log(`Updating ${arrName} range:`, range);

    for (let i = range.start + 1; i < range.end; i++) {
        const line = newLines[i];
        // Match "id: 123" with optional braces/commas around
        // Support "{ id: 123," and "    id: 123,"
        const match = line.match(/(?:id:\s*)(\d+)/);
        if (match) {
            const currentId = parseInt(match[1]);
            if (idMap[currentId]) {
                const newId = idMap[currentId];
                // Replace strictly the id part to avoid destroying the line
                // But simple replace might replace other numbers?
                // Construct regex based on match index?
                // Using replace on the String with specific substring is safer if multiple occur? 
                // ID is usually unique in the object definition line.
                // Replace "id: 123" with "id: 456"
                // Handle different spacing
                const regex = new RegExp(`id:\\s*${currentId}\\b`);
                newLines[i] = line.replace(regex, `id: ${newId}`);
            } else {
                // It might be an ID that was not in PRODUCTS? (e.g. 516 in featured?)
                // If 516 is in PRODUCTS, it should be in map.
                // If not, we leave it alone? Or warn?
                console.log(`Warning: ID ${currentId} in ${arrName} not found in PRODUCTS map. Keeping as is.`);
            }
        }
    }
});

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log('Successfully re-indexed mockData.js');
