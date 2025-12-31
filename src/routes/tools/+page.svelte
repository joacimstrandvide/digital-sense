<script>
    import ToolCard from '$lib/components/ToolCard.svelte'
    import { toolSections } from '$lib/tools.js'

    let selected = 0
</script>

<nav class="tabs">
    {#each toolSections as section, i}
        <button class:selected={i === selected} on:click={() => (selected = i)}>
            {section.title}
        </button>
    {/each}
</nav>

<section>
    <h2>{toolSections[selected].title}</h2>

    <div class="grid">
        {#each toolSections[selected].tools as tool}
            <ToolCard {...tool} />
        {/each}
    </div>
</section>

<style>
    .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    button {
        padding: 0.55rem 0.9rem;
        border-radius: 10px;
        border: 1px solid #333;
        background: #fff;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
    }

    button:hover {
        background-color: #f1f5f9;
        opacity: 0.5;
    }

    button.selected {
        background-color: #f1f5f9;
        font-weight: 600;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1rem;
    }

    section {
        margin-bottom: 2rem;
        font-family: 'Inter', sans-serif;
    }
</style>
