<script>
    import ToolCard from '$lib/components/ToolCard.svelte'
    import { toolSections } from '$lib/tools.js'
</script>

{#each toolSections as section}
    <section>
        <h2>{section.title}</h2>
        <div class="grid">
            {#each section.tools as tool}
                <ToolCard {...tool} />
            {/each}
        </div>
    </section>
{/each}

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1rem;
    }

    section {
        margin-bottom: 2.5rem;
        font-family: 'Inter', sans-serif;
    }
</style>
