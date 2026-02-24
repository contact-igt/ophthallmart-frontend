// ─── Google Apps Script Web App URL ────────────────────────────────────────
// Replace the placeholder below with your deployed Apps Script URL.
// Deploy → Web App → Execute as: Me, Who has access: Anyone
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbz0FqCxgwwXUBPNqal0uVmZEOOY9x4IesW_56T_EfI8C0mL7f9oom7FiwI7-IJI6zlVdA/exec';

/**
 * Post a JSON payload to the Google Sheet via Apps Script Web App.
 * Uses no-cors mode so there is no CORS preflight; the response body is
 * opaque but the request still reaches the sheet.
 *
 * @param {Object} payload - Key/value pairs to write as a new row.
 * @returns {Promise<boolean>} true if the request was dispatched without throwing.
 */
export async function postToSheet(payload) {
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) =>
        params.append(k, v != null ? String(v) : '')
    );
    try {
        await fetch(SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params,
        });
        return true;                               // opaque response; treat as success
    } catch (err) {
        console.error('[postToSheet] fetch failed:', err);
        return false;
    }
}
