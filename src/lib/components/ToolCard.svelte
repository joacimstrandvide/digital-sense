<script>
    export let name
    export let description
    export let url
</script>

<article class="card">
    <header>
        <h3>{name}</h3>
    </header>

    <div class="about-card">
        <p>{description}</p>
    </div>

    <a href={url} target="_blank" rel="noopener noreferrer" class="link">
        Visit website
    </a>
</article>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.75rem;
        background: white;
        font-family: 'Inter', sans-serif;
    }

    h3 {
        margin: 0;
        font-size: 1.1rem;
    }

    .link {
        margin-top: auto;
        font-weight: 500;
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }
</style>
