// Configuración de partes del avatar
const avatarParts = {
    cabeza: [
        { id: 'cabeza1', name: 'Cuadrada Blanca', image: 'assets/cabezas/cabeza (1).png' },
        { id: 'cabeza2', name: 'Cuadrada Morena', image: 'assets/cabezas/cabeza (2).png' },
        { id: 'cabeza3', name: 'Cuadrada Negra', image: 'assets/cabezas/cabeza (3).png' },
        { id: 'cabeza4', name: 'Triangular Blanca', image: 'assets/cabezas/cabeza (4).png' },
        { id: 'cabeza5', name: 'Triangular Morena', image: 'assets/cabezas/cabeza (5).png' },
        { id: 'cabeza6', name: 'Triangular Negra', image: 'assets/cabezas/cabeza (6).png' },
        { id: 'cabeza7', name: 'Rectangular Blanca ', image: 'assets/cabezas/cabeza (7).png' },
        { id: 'cabeza8', name: 'Rectangular Morena', image: 'assets/cabezas/cabeza (8).png' },
        { id: 'cabeza9', name: 'Rectangular Negra', image: 'assets/cabezas/cabeza (9).png' },
    ],

    cejas: [
        { id: 'cejas1', name: 'Finas', image: 'assets/cejas/cejas (1).png' },
        { id: 'cejas2', name: 'Gruesas', image: 'assets/cejas/cejas (2).png' },
        { id: 'cejas3', name: 'Uniceja', image: 'assets/cejas/cejas (3).png' },
        { id: 'cejas4', name: 'Rectas', image: 'assets/cejas/cejas (4).png' }
    ],
    ojos: [
        { id: 'ojos1', name: 'Sorprendido', image: 'assets/ojos/ojo (1).png' },
        { id: 'ojos2', name: 'Felices', image: 'assets/ojos/ojo (2).png' },
        { id: 'ojos3', name: 'Normal', image: 'assets/ojos/ojo (3).png' },
        { id: 'ojos4', name: 'Cerrados', image: 'assets/ojos/ojo (4).png' },
        { id: 'ojos5', name: 'Felices', image: 'assets/ojos/ojo (5).png' },
        { id: 'ojos6', name: 'Sorprendidos', image: 'assets/ojos/ojo (6).png' },
        { id: 'ojos7', name: 'Cerrados', image: 'assets/ojos/ojo (7).png' },
        { id: 'ojos8', name: 'Chinos', image: 'assets/ojos/ojo (8).png' }
    ],

    nariz: [
        { id: 'nariz1', name: 'Normal', image: 'assets/nariz/nariz (1).png' },
        { id: 'nariz2', name: 'Grande', image: 'assets/nariz/nariz (2).png' },
        { id: 'nariz3', name: 'Pequeña', image: 'assets/nariz/nariz (3).png' },
        { id: 'nariz4', name: 'Respingada', image: 'assets/nariz/nariz (4).png' },
        { id: 'nariz5', name: 'Ancha', image: 'assets/nariz/nariz (5).png' },
        { id: 'nariz6', name: 'Corta', image: 'assets/nariz/nariz (6).png' },
    ],

    boca: [
        { id: 'boca1', name: 'Sonriente', image: 'assets/bocas/boca (1).png' },
        { id: 'boca2', name: 'Neutral', image: 'assets/bocas/boca (2).png' },
        { id: 'boca3', name: 'Abierta', image: 'assets/bocas/boca (3).png' },
        { id: 'boca4', name: 'Abierta', image: 'assets/bocas/boca (4).png' },
        { id: 'boca5', name: 'Abierta', image: 'assets/bocas/boca (5).png' },
    ],

    cuello: [
        { id: 'cuello1', name: 'C', image: 'assets/cuellos/cuello (1).png' },
        { id: 'cuello2', name: 'Cuello V', image: 'assets/cuellos/cuello (2).png' },
        { id: 'cuello3', name: 'Vestido', image: 'assets/cuellos/cuello (3).png' },
        { id: 'cuello4', name: 'Suéter', image: 'assets/cuellos/cuello (4).png' },
        { id: 'cuello5', name: 'Camiseta', image: 'assets/cuellos/cuello (5).png' },
        { id: 'cuello6', name: 'Cuello V', image: 'assets/cuellos/cuello (6).png' },
        { id: 'cuello7', name: 'Vestido', image: 'assets/cuellos/cuello (7).png' },
        { id: 'cuello8', name: 'Suéter', image: 'assets/cuellos/cuello (8).png' },
        { id: 'cuello9', name: 'Suéter', image: 'assets/cuellos/cuello (9).png' },
        { id: 'cuello10', name: 'Vestido', image: 'assets/cuellos/cuello (10).png' },
        { id: 'cuello11', name: 'Suéter', image: 'assets/cuellos/cuello (11).png' },
        { id: 'cuello12', name: 'Suéter', image: 'assets/cuellos/cuello (12).png' }
    ],

    orejas: [
        { id: 'orejas1', name: 'Redondas', image: 'assets/orejas/orejas (1).png' },
        { id: 'orejas2', name: 'Redondas M', image: 'assets/orejas/orejas (2).png' },
        { id: 'orejas3', name: 'Redondas N', image: 'assets/orejas/orejas (3).png' },
        { id: 'orejas4', name: 'Cuadradas B', image: 'assets/orejas/orejas (4).png' },
        { id: 'orejas5', name: 'Cuadradas M', image: 'assets/orejas/orejas (5).png' },
        { id: 'orejas6', name: 'Redondas M', image: 'assets/orejas/orejas (6).png' },
        { id: 'orejas7', name: 'Redondas N', image: 'assets/orejas/orejas (7).png' },
        { id: 'orejas8', name: 'Cuadradas B', image: 'assets/orejas/orejas (8).png' },
        { id: 'orejas9', name: 'Cuadradas M', image: 'assets/orejas/orejas (9).png' }
    ],

    cabello: [
        { id: 'cabello1', name: 'peluca 1', image: 'assets/cabellos/cabello (1).png' },
        { id: 'cabello2', name: 'peluca 2', image: 'assets/cabellos/cabello (2).png' },
        { id: 'cabello3', name: 'peluca 3', image: 'assets/cabellos/cabello (3).png' },
        { id: 'cabello4', name: 'peluca 4', image: 'assets/cabellos/cabello (4).png' },
        { id: 'cabello5', name: 'peluca 5', image: 'assets/cabellos/cabello (5).png', colorable: true },
        { id: 'cabello6', name: 'peluca 6', image: 'assets/cabellos/cabello (6).png', colorable: true },
        { id: 'cabello7', name: 'peluca 7', image: 'assets/cabellos/cabello (7).png', colorable: true },
        { id: 'cabello8', name: 'peluca 8', image: 'assets/cabellos/cabello (8).png', colorable: true },
        { id: 'cabello9', name: 'peluca 9', image: 'assets/cabellos/cabello (9).png' },
        { id: 'cabello10', name: 'peluca 10', image: 'assets/cabellos/cabello (10).png' },
    ]
};

// Estado del avatar
const avatarState = {
    cabeza: 'cabeza1',
    cejas: 'cejas1',
    ojos: 'ojos1',
    nariz: 'nariz1',
    boca: 'boca1',
    cuello: 'cuello1',
    orejas: 'orejas1',
    cabello: 'cabello1',
    background: '#000000',
    hairColor: '#000000'
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
    
    // Selector de color
    document.getElementById('hairColorPicker')?.addEventListener('input', function(e) {
        updateHairColor(e.target.value);
    });
    
    // Presets de color
    document.querySelectorAll('.color-preset').forEach(preset => {
        preset.addEventListener('click', function() {
            const color = this.dataset.color;
            document.getElementById('hairColorPicker').value = color;
            updateHairColor(color);
            
            // Resaltar preset seleccionado
            document.querySelectorAll('.color-preset').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Botones de acción
    document.getElementById('downloadBtn')?.addEventListener('click', downloadAvatar);
    document.getElementById('resetBtn')?.addEventListener('click', resetAvatar);
    
    // Botones de funciones especiales
    document.getElementById('randomizeBtn')?.addEventListener('click', randomizeAvatar);
    document.getElementById('animateBtn')?.addEventListener('click', animateExpression);
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

// Modificar la función updateAvatarPart para el cabello
function updateAvatarPart(category, value) {
    avatarState[category] = value;
    const layer = document.getElementById(`${category}Layer`);
    
    if (!layer) return;
    
    if (value === 'none') {
        layer.style.backgroundImage = 'none';
    } else {
        const part = avatarParts[category].find(p => p.id === value);
        if (part) {
            // Para el cabello, mantenemos la imagen original y aplicamos el color después
            if (category === 'cabello') {
                layer.style.backgroundImage = `url('${part.image}')`;
                const colorPicker = document.querySelector('.color-picker-container');
                if (colorPicker) {
                    if (part.colorable) {
                        colorPicker.style.display = 'block';
                        updateHairColor(avatarState.hairColor);
                    } else {
                        colorPicker.style.display = 'none';
                    }
                }
            } else {
                layer.style.backgroundImage = `url('${part.image}')`;
            }
        }
    }
}

// Función para actualizar el color del cabello - VERSIÓN FINAL CORREGIDA
function updateHairColor(color) {
    avatarState.hairColor = color;
    const hairLayer = document.getElementById('cabelloLayer');
    
    if (!hairLayer) return;
    
    // Convertir color HEX a RGB
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    
    // Crear canvas temporal para procesar la imagen
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    // Obtener la imagen actual del cabello
    const currentHair = avatarParts.cabello.find(p => p.id === avatarState.cabello);
    if (!currentHair) return;
    
    img.src = currentHair.image;
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Dibujar la imagen original
        ctx.drawImage(img, 0, 0);
        
        // Obtener los datos de píxeles
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Aplicar el nuevo color manteniendo la luminosidad original
        for (let i = 0; i < data.length; i += 4) {
            if (data[i+3] > 0) { // Solo píxeles no transparentes
                // Calcular luminosidad (promedio ponderado)
                const lightness = (data[i] * 0.3 + data[i+1] * 0.59 + data[i+2] * 0.11) / 255;
                
                // Aplicar nuevo color manteniendo la luminosidad
                data[i] = r * lightness;   // R
                data[i+1] = g * lightness; // G
                data[i+2] = b * lightness; // B
            }
        }
        
        // Volver a poner los datos procesados
        ctx.putImageData(imageData, 0, 0);
        
        // Actualizar la capa de cabello con la nueva imagen
        hairLayer.style.backgroundImage = `url('${canvas.toDataURL()}')`;
    };
}

// Función auxiliar para convertir HEX a HSL (se mantiene para otras funciones)
function hexToHSL(hex) {
    let r = parseInt(hex.substr(1,2), 16) / 255;
    let g = parseInt(hex.substr(3,2), 16) / 255;
    let b = parseInt(hex.substr(5,2), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h *= 60;
    }

    return { h: h, s: s * 100, l: l * 100 };
}
// Renderizar avatar completo
function renderAvatar() {
    // Aplicar partes seleccionadas
    Object.keys(avatarState).forEach(category => {
        if (category !== 'skinColor' && category !== 'hairColor') {
            updateAvatarPart(category, avatarState[category]);
        }
    });
    
    // Aplicar color de cabello si existe
    if (avatarState.cabello) {
        const hairPart = avatarParts.cabello.find(p => p.id === avatarState.cabello);
        if (hairPart?.colorable) {
            updateHairColor(avatarState.hairColor);
        }
    }
}

// Modificar la función downloadAvatar para mantener el color
function downloadAvatar() {
    const preview = document.getElementById('avatarPreview');
    if (!preview) return;
    
    // Clonar el preview
    const clone = preview.cloneNode(true);
    
    // Asegurarnos de que el color del cabello se mantenga
    const hairLayer = clone.querySelector('#cabelloLayer');
    if (hairLayer && avatarState.cabello) {
        const hairPart = avatarParts.cabello.find(p => p.id === avatarState.cabello);
        if (hairPart?.colorable) {
            // Crear canvas temporal para el cabello
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.src = hairPart.image;
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                const color = avatarState.hairColor;
                const r = parseInt(color.substr(1, 2), 16);
                const g = parseInt(color.substr(3, 2), 16);
                const b = parseInt(color.substr(5, 2), 16);
                
                for (let i = 0; i < data.length; i += 4) {
                    if (data[i+3] > 0) {
                        const lightness = (data[i] * 0.3 + data[i+1] * 0.59 + data[i+2] * 0.11) / 255;
                        data[i] = r * lightness;
                        data[i+1] = g * lightness;
                        data[i+2] = b * lightness;
                    }
                }
                
                ctx.putImageData(imageData, 0, 0);
                hairLayer.style.backgroundImage = `url('${canvas.toDataURL()}')`;
                
                // Ocultar temporalmente el selector de color
                const colorPicker = document.querySelector('.color-picker-container');
                const originalDisplay = colorPicker?.style.display;
                if (colorPicker) colorPicker.style.display = 'none';
                
                // Capturar la imagen
                html2canvas(clone).then(canvas => {
                    const link = document.createElement('a');
                    link.download = 'mi-avatar.png';
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    
                    // Restaurar visibilidad del selector de color
                    if (colorPicker) colorPicker.style.display = originalDisplay;
                });
            };
            return;
        }
    }
    
    // Si no es cabello colorable, proceder normalmente
    html2canvas(clone).then(canvas => {
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
    avatarState.cuello = 'cuello1';
    avatarState.cabello = 'cabello1';
    avatarState.orejas = 'orejas1';
    avatarState.hairColor = '#000000';
    
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
    document.querySelectorAll(`[data-value="cuello1"]`).forEach(opt => opt.classList.add('active'));
    document.querySelectorAll(`[data-value="cabello1"]`).forEach(opt => opt.classList.add('active'));
    document.querySelectorAll(`[data-value="orejas1"]`).forEach(opt => opt.classList.add('active'));
    
    // Resetear selector de color
    if (document.getElementById('hairColorPicker')) {
        document.getElementById('hairColorPicker').value = '#000000';
    }
    document.querySelectorAll('.color-preset').forEach(p => p.classList.remove('active'));
    document.querySelector('.color-preset[data-color="#000000"]')?.classList.add('active');
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
    
    // Color de cabello aleatorio
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    avatarState.hairColor = randomColor;
    updateHairColor(randomColor);
    if (document.getElementById('hairColorPicker')) {
        document.getElementById('hairColorPicker').value = randomColor;
    }
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
    if (avatarPreview) {
        avatarPreview.classList.add('expression-animation');
        
        // Restaurar expresión original después de la animación
        setTimeout(() => {
            updateAvatarPart('ojos', originalEyes);
            updateAvatarPart('boca', originalMouth);
            avatarPreview.classList.remove('expression-animation');
        }, 800);
    }
}

    // Música de fondo al estilo Mii
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicSelector = document.getElementById('musicSelector');
    const volumeSlider = document.getElementById('volumeSlider');
    const musicPlayer = document.querySelector('.music-player');

    // Canciones disponibles
    const miiSongs = {
        "Tema Mii (Wii)": "assets/musica/Wii OST - Mii Maker.mp3",
        "Tema Mii (3DS)": "assets/musica/Nintendo 3DS - Mii Maker - Main Theme.mp3",
        "Tema Mii (Wii U)": "assets/musica/Mii Editor - Mii Maker (Wii U) Music.mp3",
        "Tema Mii (Tomodachi Life)": "assets/musica/Mii Maker - Tomodachi Life OST.mp3",
        "Tema Mii (Nintendo Switch)": "assets/musica/Character Customization - Nintendo Switch Sports Soundtrack.mp3"
    };

    // Inicializar el reproductor
    function initMusicPlayer() {
        // Configurar volumen inicial
        bgMusic.volume = volumeSlider.value;
        
        // Llenar el selector de canciones
        populateMusicSelector();
        
        // Configurar eventos
        setupEventListeners();
        
        // Cargar la primera canción por defecto
        loadSong("Tema Mii (Wii)");
    }

    function populateMusicSelector() {
        // Limpiar selector
        musicSelector.innerHTML = '<option value="">Seleccionar canción</option>';
        
        // Añadir opciones
        Object.keys(miiSongs).forEach(song => {
            const option = document.createElement('option');
            option.value = miiSongs[song];
            option.textContent = song;
            musicSelector.appendChild(option);
        });
    }

    function setupEventListeners() {
        musicToggle.addEventListener('click', toggleMusic);
        musicSelector.addEventListener('change', changeSong);
        volumeSlider.addEventListener('input', adjustVolume);
        
        // Manejar errores de audio
        bgMusic.addEventListener('error', handleAudioError);
        bgMusic.addEventListener('playing', () => {
            musicPlayer.classList.remove('music-error');
            musicToggle.classList.add('playing');
        });
        bgMusic.addEventListener('pause', () => {
            musicToggle.classList.remove('playing');
        });
    }

    async function toggleMusic() {
        try {
            if (bgMusic.paused) {
                await bgMusic.play();
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                musicToggle.classList.add('playing');
            } else {
                bgMusic.pause();
                musicToggle.innerHTML = '<i class="fas fa-music"></i>';
                musicToggle.classList.remove('playing');
            }
        } catch (error) {
            console.error("Error al reproducir:", error);
            handleAudioError();
        }
    }

    async function changeSong() {
        const selectedPath = musicSelector.value;
        if (!selectedPath) return;
        
        try {
            // Mostrar carga
            musicToggle.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            // Cargar nueva canción
            bgMusic.src = selectedPath;
            await bgMusic.play();
            
            // Actualizar interfaz
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            musicToggle.classList.add('playing');
            musicPlayer.classList.remove('music-error');
        } catch (error) {
            console.error("Error al cambiar canción:", error);
            handleAudioError();
        }
    }

    function adjustVolume() {
        bgMusic.volume = volumeSlider.value;
        // Actualizar el fondo del slider
        const percent = (volumeSlider.value - volumeSlider.min) / (volumeSlider.max - volumeSlider.min) * 100;
        volumeSlider.style.background = `linear-gradient(to right, var(--primary) ${percent}%, #e0e0e0 ${percent}%)`;
    }

    function handleAudioError() {
        console.error("Error de audio:", bgMusic.error);
        musicPlayer.classList.add('music-error');
        musicToggle.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        musicToggle.classList.remove('playing');
        
        // Restaurar después de 3 segundos
        setTimeout(() => {
            musicPlayer.classList.remove('music-error');
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        }, 3000);
    }

    async function loadSong(songName) {
        const songPath = miiSongs[songName];
        if (!songPath) return;
        
        try {
            bgMusic.src = songPath;
            musicSelector.value = songPath;
            
            // Intentar reproducción automática (requiere interacción del usuario)
            document.body.addEventListener('click', tryAutoPlay, { once: true });
        } catch (error) {
            console.error("Error al cargar canción:", error);
            handleAudioError();
        }
    }

    async function tryAutoPlay() {
        try {
            await bgMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            musicToggle.classList.add('playing');
        } catch (error) {
            console.log("Reproducción automática prevenida:", error);
            musicToggle.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    // Inicializar cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', initMusicPlayer);
