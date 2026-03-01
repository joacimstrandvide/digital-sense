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
    </div>

    <nav class="nav">
        <ul class="nav-links">
            <li><a href="{base}/" class:active={isActive('/')}>Home</a></li>
        </ul>
    </nav>
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

    .nav {
        display: flex;
        justify-content: center;
        padding: 0.5rem 1rem 1rem;
    }

    .nav-links {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
        justify-content: center;
    }

    .nav-links a {
        text-decoration: none;
        color: #000;
        font-weight: 600;
        padding: 0.5rem 0.9rem;
        border-radius: 0.5rem;
    }

    .nav-links a:hover {
        background-color: #f1f5f9;
    }

    .nav-links a.active {
        background-color: #e0f2fe;
        color: #0369a1;
    }

    @media (max-width: 480px) {
        .header-content p {
            font-size: 0.95rem;
        }

        .nav-links a {
            font-size: 1rem;
        }
    }
</style>
