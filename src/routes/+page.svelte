<script>
    import ToolCard from '$lib/components/ToolCard.svelte'
    import { toolSections } from '$lib/tools.js'

    /* Börja med första kategorin */
    let selected = 0
</script>

<header>
    <h2>Welcome</h2>
    <h4>
        This website helps people find free, open source and more privacy
        focused tools to use in their everyday lives
    </h4>
</header>

<nav class="tabs">
    {#each toolSections as section, i}
        <button class:selected={i === selected} on:click={() => (selected = i)}>
            {section.title}
        </button>
    {/each}
</nav>

<section>
    <!-- Varje indivuduel kategori -->
    <h2>{toolSections[selected].title}</h2>

    <div class="grid">
        {#each toolSections[selected].tools as tool}
            <ToolCard {...tool} />
        {/each}
    </div>
</section>

<style>
    header {
        margin-bottom: 4rem;
    }
    h4,
    h2 {
        text-align: center;
        font-family: 'Inter', sans-serif;
    }
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
