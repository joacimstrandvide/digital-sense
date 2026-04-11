/* Alla verktyg */
export const toolSections = [
    {
        title: 'Password & Account Security',
        tools: [
            {
                name: 'KeePassXC',
                description:
                    'A free and open-source password manager that securely stores all your passwords in an encrypted, password protected local file fully under your control.',
                url: 'https://keepassxc.org',
                badges: ['FOSS', 'No account'],
                platforms: ['Windows', 'macOS', 'Linux']
            },
            {
                name: 'Aegis Authenticator',
                description:
                    'A free and open-source two-factor authentication app that safely stores your OTP tokens offline on your device.',
                url: 'https://getaegis.app',
                badges: ['FOSS', 'No account', 'Offline'],
                platforms: ['Android']
            }
        ]
    },
    {
        title: 'Productivity & Writing',
        tools: [
            {
                name: 'LibreOffice',
                description:
                    'A free and open-source office suite for documents, spreadsheets, and presentations, offering a strong alternative to Microsoft Office.',
                url: 'https://libreoffice.org',
                badges: ['FOSS', 'No account'],
                platforms: ['Windows', 'macOS', 'Linux']
            },
            {
                name: 'Obsidian',
                description:
                    'A powerful, Markdown-based note-taking app for organizing thoughts, ideas, and knowledge locally on your device.',
                url: 'https://obsidian.md/',
                badges: ['Local storage'],
                platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
            }
        ]
    },
    {
        title: 'Email & Communication',
        tools: [
            {
                name: 'Thunderbird',
                description:
                    'A free and open-source desktop email client that lets you manage multiple email accounts in one place with advanced customization.',
                url: 'https://thunderbird.net',
                badges: ['FOSS', 'No account'],
                platforms: ['Windows', 'macOS', 'Linux']
            },
            {
                name: 'SimpleLogin',
                description:
                    'A privacy service that lets you create email aliases to protect your real address from spam, tracking, and data breaches.',
                url: 'https://simplelogin.io/',
                badges: ['Open source'],
                platforms: ['Web', 'iOS', 'Android']
            },
            {
                name: 'Proton Mail',
                description:
                    'A privacy-focused email provider with end-to-end encryption and strong security to keep your messages protected.',
                url: 'https://proton.me/mail',
                badges: ['E2E encrypted'],
                platforms: ['Web', 'iOS', 'Android']
            },
            {
                name: 'Signal',
                description:
                    'A fully end-to-end encrypted messaging app for private chats, voice calls, and video calls, with a strong focus on privacy and security.',
                url: 'https://signal.org',
                badges: ['FOSS', 'E2E encrypted'],
                platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
            },
            {
                name: 'Session',
                description:
                    'A privacy-focused messaging app inspired by Signal that routes messages over a decentralized network and removes phone-number identifiers.',
                url: 'https://getsession.org',
                badges: ['FOSS', 'No phone number'],
                platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
            }
        ]
    },
    {
        title: 'Web Browsers & Online Privacy',
        tools: [
            {
                name: 'LibreWolf',
                description:
                    'A privacy-enhanced Firefox fork designed to reduce telemetry, tracking, and data collection while browsing the web.',
                url: 'https://librewolf.net',
                badges: ['FOSS', 'No telemetry'],
                platforms: ['Windows', 'macOS', 'Linux']
            },
            {
                name: 'Brave',
                description:
                    'A fast Chromium-based browser that blocks ads and trackers by default, helping make browsing faster, cleaner, and safer.',
                url: 'https://brave.com',
                badges: ['Blocks ads'],
                platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
            },
            {
                name: 'Ladybird',
                description:
                    'An experimental, independent web browser project built with a strong focus on security, performance, and engine transparency.',
                url: 'https://ladybird.dev',
                badges: ['FOSS', 'Experimental'],
                platforms: ['Linux', 'macOS']
            },
            {
                name: 'Tor Browser',
                description:
                    'A browser that routes your traffic through the Tor network to help you browse anonymously and protect your identity online.',
                url: 'https://www.torproject.org',
                badges: ['FOSS', 'Anonymous'],
                platforms: ['Windows', 'macOS', 'Linux', 'Android']
            },
            {
                name: 'uBlock Origin',
                description:
                    'A lightweight and efficient content blocker that removes ads, trackers, and malicious scripts across websites.',
                url: 'https://ublockorigin.com',
                badges: ['FOSS', 'Extension'],
                platforms: ['Firefox', 'Chrome']
            }
        ]
    },
    {
        title: 'Search Engines',
        tools: [
            {
                name: 'DuckDuckGo',
                description:
                    "A privacy-focused search engine that doesn't track your searches or build a personal advertising profile.",
                url: 'https://duckduckgo.com',
                badges: ['No tracking'],
                platforms: ['Web', 'iOS', 'Android']
            },
            {
                name: 'Brave Search',
                description:
                    'A privacy-respecting search engine with its own independent index, available with or without the Brave browser.',
                url: 'https://search.brave.com',
                badges: ['No tracking', 'Own index'],
                platforms: ['Web']
            },
            {
                name: 'Startpage',
                description:
                    'A privacy-centric search engine that delivers Google search results without tracking or profiling users.',
                url: 'https://www.startpage.com/',
                badges: ['No tracking'],
                platforms: ['Web']
            }
        ]
    },
    {
        title: 'VPN',
        tools: [
            {
                name: 'Proton VPN',
                description:
                    'A secure, privacy-focused VPN service with strong encryption and a transparent security-first approach.',
                url: 'https://protonvpn.com/',
                badges: ['Open source', 'Audited'],
                platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
            },
            {
                name: 'Mullvad',
                description:
                    'A highly privacy-focused VPN that avoids user tracking and allows anonymous account creation without emails or personal details.',
                url: 'https://mullvad.net/',
                badges: ['No email needed', 'Audited'],
                platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
            }
        ]
    },
    {
        title: 'File Sharing',
        tools: [
            {
                name: 'LocalSend',
                description:
                    'A simple and secure way to share files between devices on the same network without using the cloud.',
                url: 'https://localsend.org',
                badges: ['FOSS', 'No cloud', 'No account'],
                platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
            }
        ]
    },
    {
        title: 'Media',
        tools: [
            {
                name: 'Photopea',
                description:
                    'A completely free, browser-based image editor that works similarly to Photoshop and supports PSD and other common file formats.',
                url: 'https://www.photopea.com/',
                badges: ['Free'],
                platforms: ['Web']
            },
            {
                name: 'VLC Media Player',
                description:
                    'A great open source media player that can play almost any format.',
                url: 'https://www.videolan.org/',
                badges: ['FOSS', 'No account'],
                platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android']
            }
        ]
    },
    {
        title: 'Third-Party Apps',
        tools: [
            {
                name: 'F-Droid',
                description:
                    'An alternative Android app store focused on free, open-source, and privacy-respecting applications.',
                url: 'https://f-droid.org/',
                badges: ['FOSS', 'No account'],
                platforms: ['Android']
            },
            {
                name: 'Aurora Store',
                description: 'An open source Play Store frontend.',
                url: 'https://auroraoss.com/',
                badges: ['FOSS'],
                platforms: ['Android']
            }
        ]
    }
]
