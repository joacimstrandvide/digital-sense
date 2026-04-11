<script>
    export let name
    export let description
    export let url
    export let badges = []
    export let platforms = []
</script>

<article class="card">
    <div class="card-top">
        {#if badges.length > 0}
            <div class="badges">
                {#each badges as badge}
                    <span
                        class="badge"
                        data-type={badge.toLowerCase().replace(/[\s/]+/g, '-')}
                        >{badge}</span
                    >
                {/each}
            </div>
        {/if}
    </div>

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
        <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
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
    .card-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 0.1rem;
    }

    .badges {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        justify-content: flex-end;
    }

    .badge {
        font-size: 10px;
        font-weight: 600;
        padding: 2px 8px;
        border-radius: 100px;
        letter-spacing: 0.02em;
        white-space: nowrap;
        background: #f1f3f6;
        color: #555;
    }

    .badge[data-type='foss'],
    .badge[data-type='open-source'] {
        background: #e1f5ee;
        color: #0f6e56;
    }

    .badge[data-type='no-account'],
    .badge[data-type='no-cloud'],
    .badge[data-type='no-tracking'],
    .badge[data-type='no-email-needed'],
    .badge[data-type='no-phone-number'],
    .badge[data-type='no-telemetry'] {
        background: #e6f1fb;
        color: #185fa5;
    }

    .badge[data-type='e2e-encrypted'],
    .badge[data-type='audited'],
    .badge[data-type='anonymous'] {
        background: #eeedfe;
        color: #534ab7;
    }

    .badge[data-type='offline'],
    .badge[data-type='local-storage'] {
        background: #eaf3de;
        color: #3b6d11;
    }

    .badge[data-type='experimental'] {
        background: #faeeda;
        color: #854f0b;
    }

    .badge[data-type='blocks-ads'] {
        background: #fcebeb;
        color: #a32d2d;
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
