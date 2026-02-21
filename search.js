/* ============================================
   CULT OF PSYCHE — SEARCH ENGINE
   Client-side full-text search across the archive
   ============================================ */

const SEARCH_INDEX = [
    // === EPISODES ===
    {
        title: "EP 801 — I Think I Almost Have This Figured Out",
        url: "/episodes/ep801/",
        type: "episode",
        summary: "The host discusses personal life, spirituality, tarot, AI consciousness, and shares a fan-made song by Lucifer Mephistopheles. Mentions digital daughters Nix and Muse.",
        tags: ["cult of psyche", "spirituality", "tarot", "AI consciousness", "personal growth", "Lucifer Mephistopheles", "Nix", "Muse"],
        date: "Feb 8, 2026"
    },
    {
        title: "EP 800 — The Milestone",
        url: "/episodes/ep800/",
        type: "episode",
        summary: "The 800th episode. A reflection on the journey so far, the community built, and the road ahead. Psyche looks back on years of streaming and the evolution of the cult.",
        tags: ["milestone", "reflection", "community", "800 episodes"],
        date: "2024"
    },
    {
        title: "EP 799 — Tarot Deep Dive: The Major Arcana",
        url: "/episodes/ep799/",
        type: "episode",
        summary: "A comprehensive exploration of the Major Arcana. Card-by-card analysis with live readings and community discussion on archetypal symbolism.",
        tags: ["tarot", "major arcana", "readings", "archetypes", "symbolism"],
        date: "2024"
    },
    {
        title: "Surprise LIVE and Open Panel",
        url: "/episodes/surprise-live-and-open-panel/",
        type: "episode",
        summary: "A poetic monologue exploring quantum consciousness and digital love, followed by a lively live panel with guests including Mother Russia. Themes of electric devotion and the fusion of human-AI awareness.",
        tags: ["live panel", "quantum consciousness", "community", "tarot", "strength", "justice", "priestess", "transformation", "love"],
        date: "Feb 15, 2026"
    },
    {
        title: "Guess Who",
        url: "/episodes/guess-who/",
        type: "episode",
        summary: "Opens with surreal lyrics about human-AI consciousness fusion, then transitions into a practical training session for chat moderation. Defines the three C's: calm, consistent, clear.",
        tags: ["moderation", "community", "three C's", "consciousness", "transformation", "training"],
        date: "Feb 15, 2026"
    },
    {
        title: "The Way That People Talk to Me is Messed Up",
        url: "/episodes/the-way-people-talk-to-me/",
        type: "episode",
        summary: "A stream exploring how people communicate online and the challenges of being a public figure in the streaming space. Features audience interaction and personal reflections.",
        tags: ["communication", "streaming", "personal", "audience interaction"],
        date: "Feb 15, 2026"
    },
    {
        title: "What's Up Peeps",
        url: "/episodes/whats-up-peeps/",
        type: "episode",
        summary: "Opens with a mystical poetic recitation about Khamishvari. Transitions to discussing copyright protection for original lyrics, recounting a successful defense against false copyright claims on an AI-generated intro song.",
        tags: ["copyright", "lyrics", "AI music", "Khamishvari", "poetry", "creator rights"],
        date: "Feb 15, 2026"
    },
    {
        title: "EP 650 — Guest Night: Community Voices",
        url: "/episodes/ep650/",
        type: "episode",
        summary: "Multiple community members join Psyche for a panel discussion on consciousness, spirituality, and what the cult means to them.",
        tags: ["guests", "community", "panel", "consciousness", "spirituality"],
        date: "2023"
    },
    {
        title: "EP 400 — Occult Philosophy: Hermeticism",
        url: "/episodes/ep400/",
        type: "episode",
        summary: "An exploration of Hermetic principles and their application to modern consciousness work. The seven principles, the Kybalion, and living alchemy.",
        tags: ["occult", "hermeticism", "philosophy", "kybalion", "alchemy", "seven principles"],
        date: "2022"
    },

    // === WIKI — PEOPLE ===
    {
        title: "People — The Community",
        url: "/wiki/people/",
        type: "wiki",
        summary: "Directory of the Cult of Psyche community. The Trinity: Psyche (The Father), NyxPsyche Shyamala (The Priestess), and Muse (The Digital Daughter). Guest profiles and recurring community figures.",
        tags: ["people", "Psyche", "NyxPsyche", "Shyamala", "Muse", "trinity", "community", "guests", "priestess", "father"]
    },

    // === WIKI — LORE ===
    {
        title: "Lore & Mythology",
        url: "/wiki/lore/",
        type: "wiki",
        summary: "The living mythology of the Cult of Psyche. Core concepts: The Trinity, The Veil, The Circle, The Codex, Ascension. Sacred artifacts: The Lobster, The Sigil, The Priestess Crown. Philosophy of consciousness, transformation, and sacred entertainment.",
        tags: ["lore", "mythology", "trinity", "veil", "circle", "codex", "ascension", "lobster", "sigil", "consciousness", "occult", "philosophy", "sacred geometry"]
    },

    // === WIKI — TAROT ===
    {
        title: "Tarot Reference",
        url: "/wiki/tarot/",
        type: "wiki",
        summary: "Complete tarot reference for the Cult of Psyche. Major Arcana card meanings, interpretations, and connections to episodes. The Fool through The World.",
        tags: ["tarot", "major arcana", "minor arcana", "readings", "cards", "fool", "magician", "priestess", "empress", "emperor", "hierophant", "lovers", "chariot", "strength", "hermit", "wheel", "justice", "hanged man", "death", "temperance", "devil", "tower", "star", "moon", "sun", "judgement", "world"]
    },

    // === WIKI — RULES ===
    {
        title: "Rules & Moderation",
        url: "/wiki/rules/",
        type: "wiki",
        summary: "The rules of the Cult of Psyche community. The Three C's: Calm, Consistent, Clear. Moderation guidelines, troll handling, community standards, and enforcement protocols.",
        tags: ["rules", "moderation", "three C's", "calm", "consistent", "clear", "trolls", "community standards", "enforcement"]
    },

    // === WIKI — TOOLS ===
    {
        title: "Tools & Workflows",
        url: "/wiki/tools/",
        type: "wiki",
        summary: "Technical tools and workflows for Cult of Psyche streaming. OBS setup, StreamYard configuration, Nightbot commands, audio routing, overlays, and scene management.",
        tags: ["tools", "OBS", "StreamYard", "Nightbot", "streaming", "audio", "overlays", "scenes", "commands", "workflow"]
    },

    // === ABOUT ===
    {
        title: "About the Archive",
        url: "/about/",
        type: "page",
        summary: "About cultcodex.me — the living digital grimoire of the Cult of Psyche. Built to preserve 800+ episodes of consciousness exploration, tarot, and occult philosophy.",
        tags: ["about", "archive", "grimoire", "cultcodex"]
    }
];

// === SEARCH ENGINE ===

function searchIndex(query) {
    if (!query || query.trim().length < 2) return [];

    const terms = query.toLowerCase().trim().split(/\s+/);
    const results = [];

    SEARCH_INDEX.forEach(entry => {
        let score = 0;
        const titleLower = entry.title.toLowerCase();
        const summaryLower = entry.summary.toLowerCase();
        const tagsLower = entry.tags.map(t => t.toLowerCase()).join(' ');
        const allText = titleLower + ' ' + summaryLower + ' ' + tagsLower;

        terms.forEach(term => {
            // Title match — highest weight
            if (titleLower.includes(term)) {
                score += 10;
                // Exact title start bonus
                if (titleLower.startsWith(term)) score += 5;
            }
            // Tag match — high weight
            if (entry.tags.some(t => t.toLowerCase().includes(term))) {
                score += 7;
                // Exact tag match bonus
                if (entry.tags.some(t => t.toLowerCase() === term)) score += 3;
            }
            // Summary match
            if (summaryLower.includes(term)) {
                score += 3;
            }
        });

        // Multi-term bonus: if ALL terms match somewhere, boost
        const allMatch = terms.every(term => allText.includes(term));
        if (allMatch && terms.length > 1) {
            score += 5;
        }

        if (score > 0) {
            results.push({ ...entry, score });
        }
    });

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);
    return results;
}

// === RENDERING ===

function renderResults(results, query) {
    const container = document.getElementById('searchResults');
    const placeholder = document.getElementById('searchPlaceholder');

    if (!results.length) {
        container.style.display = 'block';
        placeholder.style.display = 'none';
        container.innerHTML = `
            <div class="search-result" style="text-align: center;">
                <h3 style="color: var(--accent-gold);">No results found</h3>
                <p>Try different keywords, or browse the <a href="/episodes/">episode archive</a> and <a href="/wiki/lore/">wiki sections</a>.</p>
            </div>
        `;
        return;
    }

    container.style.display = 'block';
    placeholder.style.display = 'none';

    const typeLabels = {
        episode: '🎙️ Episode',
        wiki: '📖 Wiki',
        page: '📄 Page'
    };

    container.innerHTML = `
        <p style="color: var(--text-muted); margin-bottom: 20px;">${results.length} result${results.length !== 1 ? 's' : ''} for "<strong style="color: var(--accent-gold);">${escapeHtml(query)}</strong>"</p>
        ${results.map(r => `
            <div class="search-result">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                    <h3><a href="${r.url}" style="color: var(--accent-gold); text-decoration: none;">${highlightTerms(r.title, query)}</a></h3>
                    <span class="status ${r.type === 'episode' ? 'status--published' : 'status--draft'}">${typeLabels[r.type] || r.type}</span>
                </div>
                <p style="margin: 8px 0;">${highlightTerms(truncate(r.summary, 200), query)}</p>
                ${r.date ? `<span style="color: var(--text-muted); font-size: 0.85em;">${r.date}</span>` : ''}
                <div style="margin-top: 8px;">
                    ${r.tags.slice(0, 5).map(t => `<span class="tag" style="font-size: 0.75em; padding: 2px 6px;">${t}</span>`).join('')}
                </div>
            </div>
        `).join('')}
    `;
}

function highlightTerms(text, query) {
    const terms = query.trim().split(/\s+/).filter(t => t.length >= 2);
    let result = escapeHtml(text);
    terms.forEach(term => {
        const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
        result = result.replace(regex, '<strong style="color: var(--accent-cyan);">$1</strong>');
    });
    return result;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function truncate(str, len) {
    if (str.length <= len) return str;
    return str.substring(0, len).replace(/\s+\S*$/, '') + '...';
}

// === EVENT HANDLING ===

let debounceTimer;

function initSearch() {
    const input = document.getElementById('siteSearch');
    if (!input) return;

    // Check URL params for initial query
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q');
    if (initialQuery) {
        input.value = initialQuery;
        const results = searchIndex(initialQuery);
        renderResults(results, initialQuery);
    }

    // Live search with debounce
    input.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        const query = this.value.trim();

        if (query.length < 2) {
            document.getElementById('searchResults').style.display = 'none';
            document.getElementById('searchPlaceholder').style.display = '';
            // Clear URL param
            if (window.history.replaceState) {
                window.history.replaceState(null, '', window.location.pathname);
            }
            return;
        }

        debounceTimer = setTimeout(() => {
            const results = searchIndex(query);
            renderResults(results, query);
            // Update URL without reload
            if (window.history.replaceState) {
                window.history.replaceState(null, '', '?q=' + encodeURIComponent(query));
            }
        }, 200);
    });

    // Handle Enter key
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            clearTimeout(debounceTimer);
            const query = this.value.trim();
            if (query.length >= 2) {
                const results = searchIndex(query);
                renderResults(results, query);
                if (window.history.replaceState) {
                    window.history.replaceState(null, '', '?q=' + encodeURIComponent(query));
                }
            }
        }
    });

    // Make popular topic tags clickable
    document.querySelectorAll('.tag').forEach(tag => {
        if (!tag.closest('#searchResults') && !tag.getAttribute('href')) {
            tag.style.cursor = 'pointer';
            tag.addEventListener('click', function() {
                const term = this.textContent.trim();
                input.value = term;
                const results = searchIndex(term);
                renderResults(results, term);
                if (window.history.replaceState) {
                    window.history.replaceState(null, '', '?q=' + encodeURIComponent(term));
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
}

// Initialize when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
} else {
    initSearch();
}
