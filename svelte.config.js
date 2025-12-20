import adapter from '@sveltejs/adapter-static'

const repoName = 'digital-sense'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html'
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? `/${repoName}` : ''
        }
    }
}

export default config
