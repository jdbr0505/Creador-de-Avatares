// Configuración de partes del avatar
const avatarParts = {
    cabeza: [
        { id: 'cabeza1', name: 'Redonda', image: 'assets/cabezas/cabeza (1).png' },
        { id: 'cabeza2', name: 'Ovalada', image: 'assets/cabezas/cabeza (2).png' },
        { id: 'cabeza3', name: 'Cuadrada', image: 'assets/cabezas/cabeza (3).png' },
        { id: 'cabeza4', name: 'Triangular', image: 'assets/cabezas/cabeza (4).png' }
    ],
    cejas: [
        { id: 'cejas1', name: 'Finas', image: 'assets/cejas/ceja (1).png' },
        { id: 'cejas2', name: 'Gruesas', image: 'assets/cejas/ceja (2).png' },
        { id: 'cejas3', name: 'Arqueadas', image: 'assets/cejas/ceja (3).png' },
        { id: 'cejas4', name: 'Rectas', image: 'assets/cejas/cejas4.png' }
    ],
    ojos: [
        { id: 'ojos1', name: 'Normales', image: 'assets/ojos/ojos1.png' },
        { id: 'ojos2', name: 'Felices', image: 'assets/ojos/ojos2.png' },
        { id: 'ojos3', name: 'Sorprendidos', image: 'assets/ojos/ojos3.png' },
        { id: 'ojos4', name: 'Cerrados', image: 'assets/ojos/ojos4.png' }
    ],
    nariz: [
        { id: 'nariz1', name: 'Pequeña', image: 'assets/narices/nariz (1).png' },
        { id: 'nariz2', name: 'Grande', image: 'assets/narices/nariz (2).png' },
        { id: 'nariz3', name: 'Recta', image: 'assets/narices/nariz (3).png' },
        { id: 'nariz4', name: 'Respingada', image: 'assets/narices/nariz (4).png' }
    ],
    boca: [
        { id: 'boca1', name: 'Sonriente', image: 'assets/boca/boca1.png' },
        { id: 'boca2', name: 'Neutral', image: 'assets/boca/boca2.png' },
        { id: 'boca3', name: 'Abierta', image: 'assets/boca/boca3.png' },
        { id: 'boca4', name: 'Triste', image: 'assets/boca/boca4.png' }
    ],
    ropa: [
        { id: 'ropa1', name: 'Camiseta', image: 'assets/ropa/ropa1.png' },
        { id: 'ropa2', name: 'Cuello V', image: 'assets/ropa/ropa2.png' },
        { id: 'ropa3', name: 'Vestido', image: 'assets/ropa/ropa3.png' },
        { id: 'ropa4', name: 'Suéter', image: 'assets/ropa/ropa4.png' }
    ],
    accesorios: [
        { id: 'accesorio1', name: 'Gafas', image: 'assets/accesorios/accesorio1.png' },
        { id: 'accesorio2', name: 'Sombrero', image: 'assets/accesorios/accesorio2.png' },
        { id: 'accesorio3', name: 'Aretes', image: 'assets/accesorios/accesorio3.png' },
        { id: 'accesorio4', name: 'Collar', image: 'assets/accesorios/accesorio4.png' },
        { id: 'none', name: 'Ninguno', image: '' }
    ]
};

// Estado del avatar
const avatarState = {
    cabeza: 'cabeza1',
    cejas: 'cejas1',
    ojos: 'ojos1',
    nariz: 'nariz1',
    boca: 'boca1',
    ropa: 'ropa1',
    accesorios: 'accesorio1',
    skinColor: '#ffdbac'
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initAvatar();
    initEventListeners();
    loadPartsOptions();
    renderAvatar();
    
    // Configurar cursor personalizado
    document.addEventListener('mousemove', moveCursor);
});

// Inicializar el avatar
function initAvatar() {
    document.getElementById('baseLayer').style.backgroundColor = avatarState.skinColor;
}

// Configurar listeners de eventos
function initEventListeners() {
    // Cambiar pestañas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Activar pestaña
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar contenido de la categoría
            document.querySelectorAll('.category-content').forEach(content => {
                content.classList.remove('active');
                if (content.dataset.category === category) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Botones de acción
    document.getElementById('downloadBtn').addEventListener('click', downloadAvatar);
    document.getElementById('resetBtn').addEventListener('click', resetAvatar);
    
    // Botones de funciones especiales
    document.getElementById('randomizeBtn').addEventListener('click', randomizeAvatar);
    document.getElementById('animateBtn').addEventListener('click', animateExpression);
}

// Cargar opciones en el panel
function loadPartsOptions() {
    for (const [category, items] of Object.entries(avatarParts)) {
        const container = document.querySelector(`.category-content[data-category="${category}"] .options-grid`);
        if (!container) continue;
        
        container.innerHTML = '';
        
        items.forEach(item => {
            const option = document.createElement('div');
            option.className = 'option';
            option.dataset.category = category;
            option.dataset.value = item.id;
            
            if (item.id === 'none') {
                option.innerHTML = `
                    <div style="width:60px;height:60px;background:#f0f0f0;border-radius:8px;
                                display:flex;align-items:center;justify-content:center;">
                        <i class="fas fa-ban" style="font-size:24px;color:#777"></i>
                    </div>
                    <div class="name">${item.name}</div>
                `;
            } else {
                option.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="name">${item.name}</div>
                `;
            }
            
            option.addEventListener('click', function() {
                const category = this.dataset.category;
                const value = this.dataset.value;
                updateAvatarPart(category, value);
                
                // Resaltar opción seleccionada
                this.parentElement.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
            });
            
            // Marcar la opción activa inicial
            if (avatarState[category] === item.id) {
                option.classList.add('active');
            }
            
            container.appendChild(option);
        });
    }
}

// Actualizar parte específica del avatar
function updateAvatarPart(category, value) {
    avatarState[category] = value;
    const layer = document.getElementById(`${category}Layer`);
    
    if (value === 'none') {
        layer.style.backgroundImage = 'none';
    } else {
        const part = avatarParts[category].find(p => p.id === value);
        if (part) {
            // Usar la ruta correcta de la imagen
            layer.style.backgroundImage = `url('${part.image}')`;
        }
    }
}

// Renderizar avatar completo
function renderAvatar() {
    // Aplicar partes seleccionadas
    Object.keys(avatarState).forEach(category => {
        if (category !== 'skinColor') {
            updateAvatarPart(category, avatarState[category]);
        }
    });
}

// Descargar avatar
function downloadAvatar() {
    html2canvas(document.getElementById('avatarPreview')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'mi-avatar.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// Reiniciar avatar
function resetAvatar() {
    avatarState.cabeza = 'cabeza1';
    avatarState.cejas = 'cejas1';
    avatarState.ojos = 'ojos1';
    avatarState.nariz = 'nariz1';
    avatarState.boca = 'boca1';
    avatarState.ropa = 'ropa1';
    avatarState.accesorios = 'accesorio1';
    
    renderAvatar();
    
    // Resetear selecciones
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Marcar las opciones iniciales como activas
    document.querySelectorAll(`[data-value="cabeza1"]`).forEach(opt => opt.classList.add('active'));
    document.querySelectorAll(`[data-value="cejas1"]`).forEach(opt => opt.classList.add('active'));
    document.querySelectorAll(`[data-value="ojos1"]`).forEach(opt => opt.classList.add('active'));
    document.querySelectorAll(`[data-value="nariz1"]`).forEach(opt => opt.classList.add('active'));
    document.querySelectorAll(`[data-value="boca1"]`).forEach(opt => opt.classList.add('active'));
    document.querySelectorAll(`[data-value="ropa1"]`).forEach(opt => opt.classList.add('active'));
    document.querySelectorAll(`[data-value="accesorio1"]`).forEach(opt => opt.classList.add('active'));
}

// Cursor personalizado
function moveCursor(e) {
    const cursor = document.querySelector('.cursor-follower');
    if (cursor) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }
}

// Combinación aleatoria
function randomizeAvatar() {
    // Seleccionar valores aleatorios para cada categoría
    Object.keys(avatarParts).forEach(category => {
        const randomIndex = Math.floor(Math.random() * avatarParts[category].length);
        const randomPart = avatarParts[category][randomIndex].id;
        avatarState[category] = randomPart;
        updateAvatarPart(category, randomPart);
        
        // Actualizar selección visual
        document.querySelectorAll(`.category-content[data-category="${category}"] .option`).forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.value === randomPart) {
                opt.classList.add('active');
            }
        });
    });
}

// Animación de expresión
function animateExpression() {
    // Guardar la expresión actual
    const originalEyes = avatarState.ojos;
    const originalMouth = avatarState.boca;
    
    // Cambiar a expresión feliz
    updateAvatarPart('ojos', 'ojos2');
    updateAvatarPart('boca', 'boca1');
    
    // Aplicar animación
    const avatarPreview = document.getElementById('avatarPreview');
    avatarPreview.classList.add('expression-animation');
    
    // Restaurar expresión original después de la animación
    setTimeout(() => {
        updateAvatarPart('ojos', originalEyes);
        updateAvatarPart('boca', originalMouth);
        avatarPreview.classList.remove('expression-animation');
    }, 800);
}

// Efecto parallax para la página principal
if (document.querySelector('.parallax-section')) {
    document.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const parallaxLayers = document.querySelectorAll('.parallax-layer');
        
        parallaxLayers.forEach(layer => {
            const depth = parseFloat(layer.dataset.depth) || 0.1;
            const movement = -(scrolled * depth);
            layer.style.transform = `translateY(${movement}px)`;
        });
    });
}

// Scroll suave para navegación
document.querySelectorAll('a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
