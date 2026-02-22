// ==========================================
    // 1. DATABASE MENU (Pusat Pengaturan Toolbar)
    // ==========================================
    const menus = [
        {
            label: "Templates ▾", icon: "\\sum_{i=1}^{n}", style: "grid-template-columns: 1fr; width: 280px;",
            items: [
                { insert: '\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}', math: '\\begin{cases} ax+by=c \\\\ dx+ey=f \\end{cases}', text: 'SPLDV' },
                { insert: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', math: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', text: 'Rumus ABC' },
                { insert: '\\bar{x} = \\frac{\\sum x_i}{n}', math: '\\bar{x} = \\frac{\\sum x_i}{n}', text: 'Mean' },
                { insert: '\\lim_{x \\to a} f(x) = L', math: '\\lim_{x \\to a} f(x) = L', text: 'Limit' },
                { insert: '\\int_{a}^{b} f(x) \\, dx', math: '\\int_{a}^{b} f(x) \\, dx', text: 'Integral' }
            ]
        },
        {
            label: "Fraction ▾", icon: "\\frac{a}{b}", style: "grid-template-columns: repeat(3, 1fr);",
            items: [
                { insert: '\\frac{}{}', math: '\\frac{\\square}{\\square}' },
                { insert: '^{}/_{}', math: '\\square/\\square' },
                { insert: '\\tfrac{}{}', math: '\\small \\frac{a}{b}' },
                { insert: '\\frac{dy}{dx}', math: '\\frac{dy}{dx}' },
                { insert: '\\frac{\\partial y}{\\partial x}', math: '\\frac{\\partial y}{\\partial x}' },
                { insert: '\\frac{\\Delta y}{\\Delta x}', math: '\\frac{\\Delta y}{\\Delta x}' }
            ]
        },
        {
            label: "Script ▾", icon: "x^n", style: "grid-template-columns: repeat(2, 1fr);",
            items: [
                { insert: '^{2}', math: '\\square^{2}' },
                { insert: '^{}', math: '\\square^{\\square}' },
                { insert: '_{}', math: '\\square_{\\square}' },
                { insert: '_{}^{}', math: '\\square_n^m' }
            ]
        },
        {
            label: "Akar ▾", icon: "\\sqrt{x}", style: "grid-template-columns: repeat(3, 1fr);",
            items: [
                { insert: '\\sqrt{}', math: '\\sqrt{\\square}' },
                { insert: '\\sqrt[{}]{}', math: '\\sqrt[\\square]{\\square}' },
                { insert: '\\sqrt[3]{}', math: '\\sqrt[3]{\\square}' }
            ]
        },
        {
            label: "Operators ▾", icon: "\\pm \\neq", style: "grid-template-columns: repeat(4, 1fr); width: 280px;",
            items: [
                { insert: ': =', math: ':=' }, { insert: '= =', math: '==' }, { insert: '+ =', math: '+=' }, { insert: '- =', math: '-=' },
                { insert: '\\nabla', math: '\\nabla' }, { insert: '\\stackrel{\\text{def}}{=}', math: '\\stackrel{\\text{def}}{=}' }, 
                { insert: '\\stackrel{m}{=}', math: '\\stackrel{m}{=}' }, { insert: '\\triangleq', math: '\\triangleq' },
                { insert: '\\equiv', math: '\\equiv' }, { insert: '\\neq', math: '\\neq' }, { insert: '\\sim', math: '\\sim' }, 
                { insert: '\\cong', math: '\\cong' }, { insert: '\\approx', math: '\\approx' }, { insert: '\\le', math: '\\le' }, { insert: '\\ge', math: '\\ge' }
            ]
        },
        {
            label: "Delimiters ▾", icon: "\\left( \\dots \\right)", style: "grid-template-columns: repeat(4, 1fr); width: 280px;",
            items: [
                { insert: '\\left(  \\right)', math: '\\left( \\square \\right)' }, { insert: '\\left[  \\right]', math: '\\left[ \\square \\right]' },
                { insert: '\\left\\{  \\right\\}', math: '\\left\\{ \\square \\right\\}' }, { insert: '\\left\\langle  \\right\\rangle', math: '\\langle \\square \\rangle' },
                { insert: '\\left|  \\right|', math: '\\left| \\square \\right|' }, { insert: '\\left\\|  \\right\\|', math: '\\left\\| \\square \\right\\|' },
                { insert: '\\left\\lceil  \\right\\rceil', math: '\\lceil \\square \\rceil' }, { insert: '\\left\\lfloor  \\right\\rfloor', math: '\\lfloor \\square \\rfloor' },
                
            ]
        },
        {
            label: "Struktur ▾", icon: "\\xrightarrow{\\square}", style: "grid-template-columns: repeat(4, 1fr); width: 320px;",
            items: [
                { insert: '\\sum_{}^{}', math: '\\sum' }, { insert: '\\int_{}^{}', math: '\\int' }, { insert: '\\lim_{x \\to \\infty}', math: '\\lim' }, { insert: '\\prod_{}^{}', math: '\\prod' },
                { insert: '\\xleftarrow{}', math: '\\xleftarrow{\\square}' }, { insert: '\\xrightarrow{}', math: '\\xrightarrow{\\square}' },
                { insert: '\\xleftarrow[\\square]{}', math: '\\xleftarrow[\\square]{}' }, { insert: '\\xrightarrow[\\square]{}', math: '\\xrightarrow[\\square]{}' },
                { insert: '\\xLeftarrow{}', math: '\\xLeftarrow{\\square}' }, { insert: '\\xRightarrow{}', math: '\\xRightarrow{\\square}' },
                { insert: '\\xLeftarrow[\\square]{}', math: '\\xLeftarrow[\\square]{}' }, { insert: '\\xRightarrow[\\square]{}', math: '\\xRightarrow[\\square]{}' },
                { insert: '\\xleftrightarrow{}', math: '\\xleftrightarrow{\\square}' }, { insert: '\\xleftrightarrow[\\square]{}', math: '\\xleftrightarrow[\\square]{}' },
                { insert: '\\xLeftrightarrow{}', math: '\\xLeftrightarrow{\\square}' }, { insert: '\\xLeftrightarrow[\\square]{}', math: '\\xLeftrightarrow[\\square]{}' }
            ]
        },
        {
            label: "Greek ▾", icon: "\\alpha \\beta", style: "grid-template-columns: repeat(6, 1fr); width: 400px;",
            items: [
                'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'varepsilon',
                'Gamma', 'Delta', 'Theta', 'Lambda', 'Xi', 'Pi', 'Sigma', 'Phi', 'Psi', 'Omega'
            ].map(g => ({ insert: `\\${g}`, math: `\\${g}` }))
        },
        {
            label: "Himpunan ▾", icon: "\\subset \\in", style: "grid-template-columns: repeat(4, 1fr); width: 280px;",
            items: [
                'subset', 'supset', 'subseteq', 'supseteq', 'not\\subset', 'not\\supset', 'not\\subseteq', 'not\\supseteq',
                'in', 'ni', 'notin', 'emptyset', 'sqsubset', 'sqsupset', 'sqsubseteq', 'sqsupseteq'
            ].map(h => ({ insert: `\\${h}`, math: `\\${h}` }))
        },
        {
            label: "Arrows ▾", icon: "\\leftrightarrow", style: "grid-template-columns: repeat(5, 1fr); width: 350px;",
            items: [
                'leftarrow', 'rightarrow', 'uparrow', 'downarrow', 'leftrightarrow',
                'Leftarrow', 'Rightarrow', 'Uparrow', 'Downarrow', 'Leftrightarrow',
                'longleftarrow', 'longrightarrow', 'updownarrow', 'Updownarrow', 'rightleftharpoons',
                'mapsto', 'longmapsto', 'nearrow', 'searrow', 'nwarrow'
            ].map(a => ({ insert: `\\${a}`, math: `\\${a}` }))
        },
        {
            label: "Matrix ▾", icon: "\\begin{pmatrix} \\cdot \\end{pmatrix}", style: "grid-template-columns: repeat(2, 1fr);",
            items: [
                { insert: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', text: '(2×2)' },
                { insert: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\end{pmatrix}', text: '(2×3)' },
                { insert: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}', text: '(3×3)' },
                { insert: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}', text: '|2×2|' },
                { insert: '\\begin{bmatrix} a & b \\end{bmatrix}', math: '\\begin{bmatrix} a & b \\end{bmatrix}' },
                { insert: '\\begin{bmatrix} a \\\\ b \\end{bmatrix}', math: '\\begin{bmatrix} a \\\\ b \\end{bmatrix}' },
                { insert: '\\dots', math: '\\dots' }, { insert: '\\cdots', math: '\\cdots' }, { insert: '\\vdots', math: '\\vdots' }, { insert: '\\ddots', math: '\\ddots' }
            ]
        },
        {
            label: "Function ▾", icon: "\\sin \\log", style: "grid-template-columns: repeat(3, 1fr);",
            items: [
                'sin', 'cos', 'tan', 'log', 'ln'
            ].map(f => ({ insert: `\\${f}`, math: `\\${f}` })).concat([ { insert: '\\lim_{x \\to \\infty}', math: '\\lim' } ])
        }
    ];

    const colors = [
        '#000000', '#ff0000', '#00ff00', '#0000ff', '#800000', '#008000', '#000080', 
        '#ffff00', '#00ffff', '#ff00ff', '#4d0000', '#008080', '#800080', '#ff8000', 
        '#00c0a0', '#a000f0', '#c04000', '#a08000', '#ff4080'
    ];

    // ==========================================
    // 2. MESIN PENCETAK UI (Render Engine)
    // ==========================================
    function buildUI() {
        // Cetak Toolbar Simbol
        const toolbar = document.getElementById('dynamic-toolbar');
        menus.forEach(menu => {
            const group = document.createElement('div');
            group.className = 'ribbon-group';
            group.innerHTML = `
                <div class="ribbon-icon" data-math="${menu.icon}"></div>
                <span class="ribbon-label">${menu.label}</span>
                <div class="submenu" style="${menu.style}"></div>
            `;
            
            const submenu = group.querySelector('.submenu');
            menu.items.forEach(item => {
                const subItem = document.createElement('div');
                subItem.className = 'sub-item';
                subItem.onclick = () => insert(item.insert);
                
                if (item.math) {
                    const mDiv = document.createElement('div');
                    mDiv.setAttribute('data-math', item.math);
                    subItem.appendChild(mDiv);
                }
                
                if (item.text) {
                    const span = document.createElement('span');
                    span.innerText = item.text;
                    if(item.math) span.style.cssText = "font-size: 11px; color: #666; margin-left: 10px;";
                    subItem.appendChild(span);
                }
                
                submenu.appendChild(subItem);
            });
            toolbar.appendChild(group);
        });

        // Cetak Menu Warna
        const colorMenu = document.getElementById('dynamic-color-menu');
        colors.forEach(hex => {
            const cBtn = document.createElement('div');
            cBtn.className = 'sub-item';
            cBtn.style.cssText = `background: ${hex}; width: 25px; height: 25px; min-width: unset; padding: 0; border: ${hex === '#000000' ? '1px solid #555' : 'none'};`;
            cBtn.onclick = () => setColor(hex);
            colorMenu.appendChild(cBtn);
        });

        // Render semua simbol matematika yang baru dicetak
        document.querySelectorAll('[data-math]').forEach(el => {
            katex.render(el.getAttribute('data-math'), el, { throwOnError: false });
        });
    }

    // ==========================================
    // 3. LOGIKA EDITOR & CLIPBOARD
    // ==========================================
    const input = document.getElementById('latexInput');
    const display = document.getElementById('math-display');
    const captureArea = document.getElementById('math-capture-area');
    const fSize = document.getElementById('fontSizeSelect');
    let activeColor = "#000000";

    window.onload = function() {
        buildUI();
        input.value = ""; 
        render();
    };

    function setColor(hex) {
        activeColor = hex;
        document.getElementById('currentColorPreview').style.background = hex;
        render(); 
    }

    function render() {
        if (!display || !input || !fSize) return;
        display.style.fontSize = fSize.value;
        display.style.color = activeColor;
        
        const val = input.value.trim();
        if (!val) {
            display.innerHTML = "<span style='color:#94a3b8;'>...</span>";
            return;
        }
        katex.render(val, display, { throwOnError: false, displayMode: false });
    }

    function insert(code) {
        const start = input.selectionStart;
        const end = input.selectionEnd;
        input.value = input.value.slice(0, start) + code + input.value.slice(end);
        input.focus();
        const cursorOffset = code.indexOf('{}') !== -1 ? code.indexOf('{}') + 1 : code.length;
        input.setSelectionRange(start + cursorOffset, start + cursorOffset);
        render();
    }

    function clearAll() { 
        if(confirm("Hapus seluruh ketikan?")) { input.value = ""; render(); } 
    }

    function copyLaTeX() { 
        if(!input.value) return alert("Rumus kosong!");
        navigator.clipboard.writeText(input.value); 
        alert("Kode LaTeX disalin!"); 
    }

    function trimCanvas(canvas) {
        const ctx = canvas.getContext('2d');
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        let top = null, bottom = null, left = null, right = null;

        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const alpha = data[(y * canvas.width + x) * 4 + 3];
                if (alpha > 0) { 
                    if (top === null) top = y;
                    bottom = y;
                    if (left === null || x < left) left = x;
                    if (right === null || x > right) right = x;
                }
            }
        }
        if (top === null) return canvas;

        const trimmed = document.createElement('canvas');
        trimmed.width = right - left + 1;
        trimmed.height = bottom - top + 1;
        trimmed.getContext('2d').putImageData(
            ctx.getImageData(left, top, trimmed.width, trimmed.height), 0, 0
        );
        return trimmed;
    }

   
    async function copyToClipboard() {
        if (!input.value.trim()) return alert("Tulis rumus terlebih dahulu!");

        
        const btn = document.querySelector('.btn-success'); // Ini kelas untuk tombol SALIN
        const originalText = btn.innerText;
        btn.innerText = "Memproses...";

        try {
            let sharedData = null;
            
            const processCanvas = async () => {
                if (sharedData) return sharedData;
                
                const canvas4x = await html2canvas(captureArea, { 
                    backgroundColor: null, 
                    scale: 4, 
                    logging: false, 
                    useCORS: true 
                });
                
                const croppedCanvas = trimCanvas(canvas4x);
                const displayWidth = croppedCanvas.width / 4;
                const displayHeight = croppedCanvas.height / 4;
                
                sharedData = { canvas: croppedCanvas, w: displayWidth, h: displayHeight };
                return sharedData;
            };
            
            const pngPromise = processCanvas().then(data => {
                return new Promise(resolve => data.canvas.toBlob(resolve, "image/png", 1.0));
            });
            
            const htmlPromise = processCanvas().then(data => {
                const dataUrl = data.canvas.toDataURL("image/png");
               const htmlString = `<img src="${dataUrl}" width="${data.w}" height="${data.h}">`;
                return new Blob([htmlString], { type: "text/html" });
            });
                const item = new ClipboardItem({
                "text/html": htmlPromise,
                "image/png": pngPromise
            });

            await navigator.clipboard.write([item]);
            
            btn.innerText = "Berhasil Disalin!";
            setTimeout(() => { btn.innerText = originalText; }, 2000);

        } catch (err) {
            console.error(err);
            alert("Gagal menyalin di HP. Browser ini mungkin membatasi Clipboard API. Silakan gunakan tombol Simpan PNG.");
            btn.innerText = originalText;
        }
    }
            
    function downloadImage() {
        if (!input.value.trim()) return;
        html2canvas(captureArea, { backgroundColor: null, scale: 4 }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'persamaan-mtk.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    
    async function copyToCBT() {
        if (!input.value.trim()) return alert("Tulis rumus terlebih dahulu!");
       
        const btn = document.querySelector('.btn-cbt');
        const originalText = btn.innerText;
        btn.innerText = "Memproses...";

        try {
            let sharedData = null;
            
            const processCanvas = async () => {
                if (sharedData) return sharedData;
                
                const canvas4x = await html2canvas(captureArea, { backgroundColor: null, scale: 4, logging: false, useCORS: true });
                const cropped = trimCanvas(canvas4x);
                const targetWidth = Math.round(cropped.width / 4);
                const targetHeight = Math.round(cropped.height / 4);
                
                const finalCanvas = document.createElement('canvas');
                finalCanvas.width = targetWidth;
                finalCanvas.height = targetHeight;
                const ctx = finalCanvas.getContext('2d');
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(cropped, 0, 0, targetWidth, targetHeight);
                
                sharedData = { canvas: finalCanvas, w: targetWidth, h: targetHeight };
                return sharedData;
            };
            
            const pngPromise = processCanvas().then(data => {
                return new Promise(resolve => data.canvas.toBlob(resolve, "image/png", 1.0));
            });

            const htmlPromise = processCanvas().then(data => {
                const dataUrl = data.canvas.toDataURL("image/png");
                const htmlString = `<img src="${dataUrl}" width="${data.w}" height="${data.h}" style="height:${data.h}px; width:auto; vertical-align:middle; display:inline-block; margin:0 2px;" alt="math">`;
                return new Blob([htmlString], { type: "text/html" });
            });
            
            const item = new ClipboardItem({
                "text/html": htmlPromise,
                "image/png": pngPromise
            });
            
            await navigator.clipboard.write([item]);            
            
            btn.innerText = "Berhasil Disalin!";
            setTimeout(() => { btn.innerText = originalText; }, 2000);

        } catch (err) {
            console.error(err);
            alert("Gagal menyalin.");
            btn.innerText = originalText;
        }

    }


