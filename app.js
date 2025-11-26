// Modern CUA & Outils IA App JS
(function() {
  'use strict';

  /* State */
  let currentPillar = 'engagement';
  let filterByCategory = {
    engagement: 'all',
    representation: 'all',
    action: 'all'
  };
  let toolSearchQuery = '';
  
  /* --- Init --- */
  function init() {
    if (!window.CUA_DATA || !window.CUA_DATA.piliers) {
      console.error('CUA_DATA not loaded');
      return;
    }
    renderPillar(currentPillar);
    setupModalHandler();
    renderCombinations();
    renderHeatmap();
  }

  /* Pillar Navigation */
  window.showPillar = function(pillar) {
    renderPillar(pillar);
  };

  function renderPillar(pillar) {
    currentPillar = pillar;
    const sections = {
      engagement: document.getElementById('engagement-section'),
      representation: document.getElementById('representation-section'),
      action: document.getElementById('action-section')
    };
    Object.entries(sections).forEach(([key, section]) => {
      if (section) section.classList.toggle('active', key === pillar);
    });
    filterByCategory[pillar] = 'all';
    renderTools();
  }

  /* Filter by category */
  window.filterCategory = function(pillar, category) {
    currentPillar = pillar;
    filterByCategory[pillar] = category;
    const tabs = document.querySelectorAll('.category-tab.' + pillar);
    tabs.forEach(tab => tab.classList.remove('active'));
    if (event && event.target) {
      event.target.classList.add('active');
    }
    renderTools();
  };

  window.setToolSearch = function(value) {
    toolSearchQuery = (value || '').toLowerCase();
    renderTools();
  };

  /* Render tools */
  function renderTools() {
  const pillar = currentPillar;
  const cat = filterByCategory[pillar];
  const container = document.getElementById(pillar + '-tools');
  if (!container) return;
  container.innerHTML = '';

  const pillarData = window.CUA_DATA.piliers[pillar];
  if (!pillarData || !pillarData.tools) return;

  let filtered = pillarData.tools;

  // Filtre par catégorie CUA
  if (cat !== 'all') {
    filtered = filtered.filter(t => t.categories && t.categories.includes(cat));
  }

  // Filtre par recherche texte globale
  if (toolSearchQuery && toolSearchQuery.trim() !== '') {
    const q = toolSearchQuery.trim().toLowerCase();
    filtered = filtered.filter(t => {
      const searchText = [
        t.name || '',
        t.type || '',
        t.description || '',
        (t.categories || []).join(' '),
        (t.usageCases || []).join(' ')
      ].join(' ').toLowerCase();
      return searchText.includes(q);
    });
  }

  filtered.forEach(tool => {
    container.appendChild(ToolCard(tool, pillar));
  });
}

function ToolCard(tool, pillar) {
    const card = document.createElement('div');
    card.className = `tool-card ${pillar}`;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    
    let color = pillar === 'engagement' ? 'var(--engagement-color)' : 
                pillar === 'representation' ? 'var(--representation-color)' : 
                'var(--action-color)';
    
    const relVal = Math.max(...Object.values(tool.relevance));
    const stars = '★'.repeat(relVal) + '☆'.repeat(3 - relVal);
    
    card.innerHTML = `
      <div class="tool-header">
        <span class="tool-name">${tool.name}</span>
        <span class="tool-type">${tool.type}</span>
      </div>
      <div class="tool-description">${tool.description}</div>
      <div class="tool-relevance">${stars}</div>
      <div style="display:flex; gap:12px; margin-top:16px;">
        <button class="btn-access" style="flex:1; background:${color}; color:#fff; border:0; border-radius:6px; padding:8px 0; font-weight:500; cursor:pointer;" onclick="event.stopPropagation();window.open('${tool.url}','_blank')">Accéder</button>
        <button class="btn-tuto" style="flex:1; background:#fff; color:${color}; border:1px solid ${color}; border-radius:6px; padding:8px 0; font-weight:500; cursor:pointer;" onclick="event.stopPropagation();window.open('${tool.tutorialUrl}','_blank')">Tutoriel</button>
      </div>
    `;
    
    card.addEventListener('click', () => showModal(tool, pillar));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') showModal(tool, pillar);
    });
    return card;
  }

  /* Modal handlers */
  function setupModalHandler() {
    const modalElem = document.getElementById('tool-modal');
    if (!modalElem) return;
    
    modalElem.addEventListener('click', function(ev) {
      if (ev.target === modalElem) closeModal();
    });
    
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }
  
  window.closeModal = function() {
    const modalElem = document.getElementById('tool-modal');
    if (modalElem) modalElem.classList.remove('active');
    document.body.style.overflow = '';
  };

  function showModal(tool, pillar) {
    const modalElem = document.getElementById('tool-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (!modalElem || !modalTitle || !modalBody) return;
    
    let color = pillar === 'engagement' ? 'var(--engagement-color)' : 
                pillar === 'representation' ? 'var(--representation-color)' : 
                'var(--action-color)';
    
    modalTitle.textContent = tool.name;
    modalBody.innerHTML = `
      <div class="modal-section">
        <div style='color:var(--text-secondary); margin-bottom:16px;'>${tool.description}</div>
      </div>
      <div class="modal-section">
        <h3>Cas d'usage</h3>
        <ul>
          ${tool.usageCases.map(u => `<li>✅ ${u}</li>`).join('')}
        </ul>
      </div>
      <div class='modal-section'>
        <h3>Pertinence selon les sous-catégories</h3>
        <div>${Object.entries(tool.relevance).map(([k, v]) => {
          const stars = '★'.repeat(v) + '☆'.repeat(3 - v);
          return `<div style='margin-bottom:12px'><span style='display:inline-block;width:180px;font-weight:500;'>${k}</span><span style='display:inline-block;width:120px;height:10px;background:#F3F4F6;vertical-align:middle;border-radius:6px;overflow:hidden;margin:0 12px;'><span style='display:inline-block;height:10px;background:${color};width:${33.33 * v}%;border-radius:6px;'></span></span><span style='font-weight:500;color:var(--text-secondary);'>${stars}</span></div>`;
        }).join('')}</div>
      </div>
      <div class='modal-section'>
        <span class='modal-badge' style='background:#F3F4F6;font-size:14px;padding:8px 16px;'>Prix : ${tool.price}</span>
      </div>
      <div class='modal-section' style='display:flex;flex-direction:column;gap:12px;'>
        <a href='${tool.url}' target='_blank' class='modal-link' style='background:${color};color:#fff;'>🔗 Accéder à l'outil</a>
        <a href='${tool.tutorialUrl}' target='_blank' class='modal-link' style='background:#fff;color:${color};border:1px solid ${color};'>📺 Tutoriel vidéo</a>
      </div>
    `;
    
    modalElem.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  /* Combinations */
  function renderCombinations() {
    const grid = document.getElementById('combinations-grid');
    if (!grid || !window.CUA_DATA || !window.CUA_DATA.combinaisons) return;
    
    grid.innerHTML = '';
    window.CUA_DATA.combinaisons.forEach(comb => {
      grid.appendChild(CombinationCard(comb));
    });
  }

  function CombinationCard(comb) {
  let color = comb.pilier === 'engagement' ? 'var(--engagement-color)' :
              comb.pilier === 'representation' ? 'var(--representation-color)' :
              'var(--action-color)';

  const pilierLabel =
    comb.pilier === 'engagement' ? 'Engagement' :
    comb.pilier === 'representation' ? 'Représentation' :
    'Action & Expression';

  const card = document.createElement('div');
  card.className = `combination-card ${comb.pilier}`;
  card.innerHTML = `
    <h3>${comb.emoji || '💡'} ${comb.nom}</h3>
    <div class="combination-meta">Pilier principal : <strong>${pilierLabel}</strong></div>
    <div class="combination-tools">
      ${comb.outils.map(o => `<span class="combination-tool">${o}</span>`).join('')}
    </div>
    <div class="combination-integration" style="border-left-color:${color};">
      <strong>Exemple de scénario pédagogique :</strong> ${comb.integration}
    </div>
  `;
  return card;
}

/* Heatmap */
  function renderHeatmap() {
    const table = document.getElementById('heatmap-table');
    if (!table || !window.CUA_DATA) return;
    
    const piliers = window.CUA_DATA.piliers;
    let html = '<thead><tr><th>Outil</th>';
    
    Object.values(piliers).forEach(p => {
      Object.keys(p.categories).forEach(cat => {
        html += `<th style="font-size:11px;">${cat}</th>`;
      });
    });
    html += '</tr></thead><tbody>';
    
    const allTools = [];
    Object.entries(piliers).forEach(([pillarKey, pillar]) => {
      pillar.tools.forEach(tool => {
        allTools.push({ name: tool.name, relevance: tool.relevance, pillar: pillarKey });
      });
    });
    
    allTools.forEach(tool => {
      html += `<tr><td>${tool.name}</td>`;
      Object.values(piliers).forEach(p => {
        Object.keys(p.categories).forEach(cat => {
          const val = tool.relevance[cat] || 0;
          const bgColor = val === 0 ? '#F3F4F6' : 
                         val === 1 ? 'rgba(139, 92, 246, 0.2)' :
                         val === 2 ? 'rgba(139, 92, 246, 0.5)' :
                         'rgba(139, 92, 246, 0.8)';
          html += `<td><div class="heatmap-cell" style="background:${bgColor};margin:0 auto;">${val > 0 ? '★'.repeat(val) : '-'}</div></td>`;
        });
      });
      html += '</tr>';
    });
    
    html += '</tbody>';
    table.innerHTML = html;
  }

window.openGpis = function() {
  const url = 'https://novapeda.eu/gpis';
  window.open(url, '_blank', 'noopener');
};

window.copyGpisLink = function() {
  const url = 'https://novapeda.eu/gpis';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => {
        showGpisFeedback('Lien copié dans le presse-papiers.');
      })
      .catch(() => {
        showGpisFeedback('Impossible de copier, sélectionnez le lien ci-dessous.');
      });
  } else {
    showGpisFeedback('Copie non supportée, sélectionnez le lien ci-dessous.');
  }
};

function showGpisFeedback(message) {
  const span = document.getElementById('gpis-copy-feedback');
  if (!span) return;
  span.textContent = message;
  setTimeout(() => {
    if (span.textContent === message) {
      span.textContent = '';
    }
  }, 3000);
}

  /* Smooth scroll */
  window.scrollTo = function(sectionId) {
    const elem = document.getElementById(sectionId);
    if (elem) {
      window.scroll({ top: elem.offsetTop - 70, behavior: 'smooth' });
    }
  };

  /* Initialize */
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
