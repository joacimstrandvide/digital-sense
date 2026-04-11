<script>
    import ToolCard from '$lib/components/ToolCard.svelte'
    import { toolSections } from '$lib/tools.js'

    let selected = 0
    let query = ''

    $: totalTools = toolSections.reduce((sum, s) => sum + s.tools.length, 0)

    $: filteredTools = query.trim()
        ? toolSections[selected].tools.filter(
              (t) =>
                  t.name.toLowerCase().includes(query.toLowerCase()) ||
                  t.description.toLowerCase().includes(query.toLowerCase())
          )
        : toolSections[selected].tools
</script>

<header class="hero">
    <!-- Kategorier -->
    <div class="stats">
        <span><strong>{totalTools}</strong> tools</span>
        <span><strong>{toolSections.length}</strong> categories</span>
    </div>
</header>

<nav class="tabs" aria-label="Tool categories">
    {#each toolSections as section, i}
        <button
            class:active={i === selected}
            on:click={() => {
                selected = i
                query = ''
            }}
            aria-current={i === selected ? 'page' : undefined}
        >
            {section.title}
        </button>
    {/each}
</nav>

<main class="section">
    <div class="section-header">
        <h2>{toolSections[selected].title}</h2>
        <span class="count"
            >{filteredTools.length} tool{filteredTools.length !== 1
                ? 's'
                : ''}</span
        >
    </div>

    {#if filteredTools.length > 0}
        <div class="grid">
            {#each filteredTools as tool (tool.name)}
                <ToolCard {...tool} />
            {/each}
        </div>
    {:else}
        <p class="empty">No match for "<em>{query}</em>" in this category.</p>
    {/if}
</main>

<style>
    .hero {
        max-width: 780px;
        margin: 0 auto;
        padding: 3rem 1.5rem 2rem;
        border-bottom: 0.5px solid #e2e4e9;
        font-family: 'Inter', sans-serif;
    }

    .stats {
        display: flex;
        gap: 1.5rem;
        font-size: 0.8rem;
        color: #7a8090;
        font-family: 'Inter', sans-serif;
    }

    .stats strong {
        font-weight: 600;
        color: #0d0f14;
    }

    /* ── Tabs ── */
    .tabs {
        max-width: 780px;
        margin: 0 auto;
        padding: 0.9rem 1.5rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        border-bottom: 0.5px solid #e2e4e9;
        font-family: 'Inter', sans-serif;
    }

    .tabs button {
        padding: 5px 13px;
        border-radius: 100px;
        font-size: 0.8rem;
        font-weight: 400;
        cursor: pointer;
        border: 0.5px solid transparent;
        color: #565d6b;
        background: transparent;
        transition:
            background 0.13s,
            color 0.13s;
        font-family: 'Inter', sans-serif;
        margin-bottom: 0.6rem;
    }

    .tabs button:hover {
        background: #f1f3f6;
        color: #0d0f14;
    }

    .tabs button.active {
        background: #0d0f14;
        color: #fff;
        border-color: #0d0f14;
        font-weight: 500;
    }

    /* ── Section ── */
    .section {
        max-width: 780px;
        margin: 0 auto;
        padding: 1.75rem 1.5rem 2rem;
        font-family: 'Inter', sans-serif;
    }

    .section-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 1.1rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 600;
        color: #0d0f14;
        margin: 0;
        font-family: 'Inter', sans-serif;
    }

    .count {
        font-size: 0.8rem;
        color: #aab0bb;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 12px;
    }

    .empty {
        font-size: 0.875rem;
        color: #7a8090;
        padding: 2rem 0;
        font-family: 'Inter', sans-serif;
    }
</style>
