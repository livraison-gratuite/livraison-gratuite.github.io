// node pdf.js entree.html sortie.pdf "Titre" : A5, pages numérotées en bas
const { chromium } = require('playwright');
(async () => {
  const [entree, sortie, titre] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + entree); await p.waitForTimeout(300);
  const t = String(titre || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  await p.pdf({ path: sortie, width: '148mm', height: '210mm', printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-family:Inter,sans-serif;font-size:7px;color:#8A94AB;display:flex;justify-content:space-between;padding:0 13mm;">' +
      '<span>' + t + '</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    margin: { top: '14mm', bottom: '16mm', left: '13mm', right: '13mm' } });
  await b.close();
})();
