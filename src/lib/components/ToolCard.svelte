<script>
    export let name
    export let description
    export let url
    export let platforms = []
</script>

<article class="card">
    <h3>{name}</h3>
    <p class="description">{description}</p>

    {#if platforms.length > 0}
        <div class="platforms">
            {#each platforms as platform}
                <span class="platform">{platform}</span>
            {/each}
        </div>
    {/if}

    <a href={url} target="_blank" rel="noopener noreferrer" class="link">
        Visit website
    </a>
</article>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
        padding: 1.1rem 1.25rem;
        border: 0.5px solid #e2e4e9;
        border-radius: 14px;
        background: #fff;
        transition:
            border-color 0.18s,
            box-shadow 0.18s;
    }

    .card:hover {
        border-color: #c4c7d0;
        box-shadow: 0 2px 14px rgba(0, 0, 0, 0.07);
    }

    h3 {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 600;
        color: #111;
        line-height: 1.3;
    }

    .description {
        margin: 0;
        font-size: 0.82rem;
        color: #565d6b;
        line-height: 1.65;
        flex: 1;
    }

    .platforms {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 0.05rem;
    }

    .platform {
        font-size: 10px;
        padding: 2px 8px;
        border-radius: 100px;
        border: 0.5px solid #dde1e9;
        color: #8a8f9a;
        white-space: nowrap;
    }

    .link {
        margin-top: 0.3rem;
        font-size: 0.82rem;
        font-weight: 500;
        text-decoration: none;
        color: #2563eb;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        width: fit-content;
        transition: color 0.15s;
    }

    .link:hover {
        color: #1d4ed8;
    }
</style>
