<script>
    import '../app.css'
    import favicon from '$lib/assets/phone.png'
    import { page } from '$app/stores'
    import { base } from '$app/paths'

    const isActive = (path) => $page.url.pathname === `${base}${path}`
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="site-header">
    <div class="header-content">
        <h1>Digital Sensibility</h1>
        <p>Find open source and privacy friendly tools</p>
    </div>
</header>

<main>
    <slot />
</main>

<style>
    .header-content {
        text-align: center;
        padding: 1.5rem 1rem 1rem;
        font-family: 'Inter', sans-serif;
    }

    .header-content h1 {
        margin: 0;
    }
</style>
