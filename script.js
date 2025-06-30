// Configuración inicial
const avatarParts = {
    base: ['base1', 'base2', 'base3'],
    eyes: ['eyes1', 'eyes2', 'eyes3', 'eyes4'],
    nose: ['nose1', 'nose2'],
    mouth: ['mouth1', 'mouth2', 'mouth3'],
    hair: ['hair1', 'hair2', 'hair3', 'hair4'],
    accessory: ['accessory1', 'accessory2', 'none']
};

// Estado del avatar
let currentAvatar = {
    base: 'base1',
    eyes: 'eyes1',
    nose: 'nose1',
    mouth: 'mouth1',
    hair: 'hair1',
    accessory: 'accessory1'
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    renderAvatar();
});

// Manejadores de eventos
function initEventListeners() {
    // Cambiar partes del avatar
    document.querySelectorAll('.options button').forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.closest('.category').dataset.category;
            const value = e.target.dataset.value;
            updateAvatarPart(category, value);
        });
    });
    
    // Selector de color
    document.getElementById('bgColor').addEventListener('input', (e) => {
        document.querySelector('.avatar-preview').style.backgroundColor = e.target.value;
    });
    
    // Botones de acción
    document.getElementById('downloadBtn').addEventListener('click', downloadAvatar);
    document.getElementById('resetBtn').addEventListener('click', resetAvatar);
}

// Actualizar parte específica
function updateAvatarPart(category, value) {
    currentAvatar[category] = value;
    const imgElement = document.querySelector(`.avatar-part[data-type="${category}"]`);
    
    if (value === 'none') {
        imgElement.style.display = 'none';
    } else {
        imgElement.style.display = 'block';
        imgElement.src = `assets/${category}/${value}.png`;
    }
}

// Renderizar avatar completo
function renderAvatar() {
    Object.keys(currentAvatar).forEach(part => {
        updateAvatarPart(part, currentAvatar[part]);
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
    currentAvatar = {
        base: 'base1',
        eyes: 'eyes1',
        nose: 'nose1',
        mouth: 'mouth1',
        hair: 'hair1',
        accessory: 'accessory1'
    };
    document.querySelector('.avatar-preview').style.backgroundColor = '#f0f0f0';
    document.getElementById('bgColor').value = '#f0f0f0';
    renderAvatar();
}

// En script.js
function addPatternBackground() {
    // Implementar fondos texturizados
}

function shareOnSocialMedia() {
    // Integración con APIs de redes sociales
}

// script.js
const bodyParts = {
    base: [
        { id: 'base1', name: 'Tono Claro', color: '#FFDBAC' },
        { id: 'base2', name: 'Tono Medio', color: '#E0AC69' },
        { id: 'base3', name: 'Tono Oscuro', color: '#8D5524' }
    ],
    eyes: [
        { id: 'eyes1', name: 'Ojos Normales', svg: '<circle cx="100" cy="120" r="15" fill="#000"/>' },
        { id: 'eyes2', name: 'Ojos Felices', svg: '<path d="M80 110 Q100 140 120 110" stroke="#000" fill="none"/>' }
    ],
    // Añade más partes según necesites
};

function createBodyPartOptions() {
    for (const [category, items] of Object.entries(bodyParts)) {
        const container = document.createElement('div');
        container.className = 'category';
        container.dataset.category = category;
        
        const title = document.createElement('h3');
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        container.appendChild(title);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        items.forEach(item => {
            const button = document.createElement('button');
            button.dataset.value = item.id;
            button.dataset.category = category;
            
            if (category === 'base') {
                button.style.backgroundColor = item.color;
                button.style.width = '40px';
                button.style.height = '40px';
                button.style.borderRadius = '50%';
            } else {
                button.textContent = item.name;
            }
            
            optionsDiv.appendChild(button);
        });
        
        container.appendChild(optionsDiv);
        document.querySelector('.customization-panel').appendChild(container);
    }
}
// script.js - Continuación
document.getElementById('addCircle').addEventListener('click', () => {
    const svg = document.getElementById('partCanvas');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '100');
    circle.setAttribute('cy', '100');
    circle.setAttribute('r', '20');
    circle.setAttribute('fill', document.getElementById('shapeColor').value);
    circle.setAttribute('class', 'draggable');
    svg.appendChild(circle);
    makeDraggable(circle);
});

// Función para hacer elementos SVG arrastrables
function makeDraggable(element) {
    let selectedElement = null;
    
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('mousemove', drag);
    element.addEventListener('mouseup', endDrag);
    element.addEventListener('mouseleave', endDrag);

    function startDrag(e) {
        selectedElement = e.target;
    }

    function drag(e) {
        if (selectedElement) {
            const rect = svg.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            selectedElement.setAttribute('cx', x);
            selectedElement.setAttribute('cy', y);
        }
    }

    function endDrag() {
        selectedElement = null;
    }
}

document.getElementById('savePart').addEventListener('click', () => {
    const partType = document.getElementById('partType').value;
    const svgContent = document.getElementById('partCanvas').innerHTML;
    
    // Generar ID único
    const newId = `${partType}_custom_${Date.now()}`;
    
    // Añadir a las opciones
    if (!bodyParts[partType]) bodyParts[partType] = [];
    bodyParts[partType].push({
        id: newId,
        name: 'Mi Creación',
        svg: svgContent
    });
    
    // Actualizar interfaz
    updateCustomizationPanel();
    
    // Resetear canvas
    document.getElementById('partCanvas').innerHTML = '';
    alert('¡Parte guardada con éxito!');
});

function updateCustomizationPanel() {
    document.querySelectorAll('.category').forEach(el => el.remove());
    createBodyPartOptions();
    initEventListeners(); // Reasignar eventos
}
// script.js - Continuación
function updateAvatarPart(category, value) {
    const layer = document.getElementById(`${category}Layer`);
    
    if (bodyParts[category]) {
        const part = bodyParts[category].find(p => p.id === value);
        
        if (part) {
            if (part.color) {
                layer.style.background = part.color;
                layer.style.backgroundImage = 'none';
            } else if (part.svg) {
                layer.innerHTML = `<svg viewBox="0 0 200 200">${part.svg}</svg>`;
            } else if (part.imageUrl) {
                layer.style.backgroundImage = `url(${part.imageUrl})`;
            }
        }
    }
}