export const projectsData = [
  {
    id: 'showcase',
    title: 'ShowCase',
    description: 'A fully free and open-source Android app for exploring and organizing personal collections of films and TV series.',
    longDescription: 'ShowCase (formerly Movie DB) is a fully free and open-source Android application designed for enthusiasts to explore, discover, and organize their personal collection of films and television series. It offers seamless synchronization with TMDB and Trakt accounts, allowing you to sync favorites, watchlists, ratings, and custom lists, as well as track episode progress with offline local database support.',
    features: [
      'TMDB & Trakt Sync: Seamless synchronization for favorites, watchlist, ratings, and custom lists',
      'Flexible Sync Modes: Switch between TMDB, Trakt, or local-only offline tracking modes',
      'Episode Tracking: Track watched episodes, seasons, ratings, and custom reviews for TV shows',
      'Discover & Explore: Browse cast, crew, external ratings (IMDb), recommendations, and collections',
      'Notifications & Reminders: Release notifications, episode reminders, and celebrity follow-ups',
      'Material You Design & Widgets: Modern UI adapting to device themes with "Up Next" home widgets',
      'Data Management: Import/export JSON, CSV, database backups (Local, WebDAV), and Google Drive backup (ShowCase Plus)'
    ],
    link: 'https://github.com/WirelessAlien/MovieDB',
    tags: ['Android', 'Kotlin', 'Open Source'],
    color: 'bg-blue-100',
    type: 'github',
    icon: '/showcase_icon.png'
  },
  {
    id: 'zipxtract',
    title: 'ZipXtract',
    description: 'A fully open-source Android application designed for comprehensive archive management.',
    longDescription: 'ZipXtract is a fully open-source Android application designed for comprehensive archive management. It allows you to effortlessly extract and create a wide variety of archive files directly on your device. Built with a focus on privacy, ZipXtract requires no internet permission, ensuring all archive operations run 100% locally on your device.',
    features: [
      'Wide Format Extraction: RAR (RAR5 & multi-volume), ZIP (password & split), 7z, TAR, GZ, BZ2, XZ, ZST, ISO, CAB, DEB, RPM, DMG, WIM, CHM, LZ4, Brotli, Lzip, JAR, and more',
      'Flexible Archive Creation: Create ZIP, 7z, and TAR archives with multiple compression algorithms and password encryption',
      'Multi-Volume & Split Archives: Extract and create multi-volume RAR/7z and split ZIP archives',
      'Customizable Extraction Paths: Flexible file selection, "Open With" integration, and custom default extraction locations',
      '100% Offline & Private: No internet permission required, guaranteeing complete privacy for your files'
    ],
    link: 'https://github.com/WirelessAlien/ZipXtract',
    tags: ['Android', 'Kotlin', 'Open Source'],
    color: 'bg-indigo-100',
    type: 'github',
    icon: '/zipxtract_icon.png'
  },
  {
    id: 'bhagavadgitaapp',
    title: 'BhagavadGitaApp',
    description: 'A simple open-source Android app for reading and contemplating the Bhagavad Gita.',
    longDescription: 'BhagavadGitaApp is a simple, open-source Android application providing chapter and verse readings from the Bhagavad Gita. Designed for anyone interested in exploring ancient wisdom, it provides verse translations, audio recitations, multi-language commentaries, and additional sacred texts in a clean, distraction-free environment.',
    features: [
      'Complete Chapter & Verse Access: All 18 chapters and 700 verses with translations in Hindi and English',
      'Audio Recitations: On-demand audio playback for verses',
      'Commentaries & Analysis: In-depth commentary support in Hindi and English',
      'Additional Sacred Texts: Includes Hanuman Chalisa and The Ramayana',
      '100% Offline Support: Read and listen anywhere without requiring an active internet connection'
    ],
    link: 'https://github.com/WirelessAlien/BhagavadGitaApp',
    tags: ['Android', 'Kotlin', 'Open Source'],
    color: 'bg-purple-100',
    type: 'github',
    icon: '/gita_icon.png'
  },
  {
    id: 'files',
    title: 'Files',
    description: 'A unified, high-performance tool for managing files, extracting complex archives, securing private data, editing media, and handling PDF documents.',
    longDescription: 'An unified, high-performance tool for managing files, extracting complex archives, securing private data, editing media, and handling PDF documents. Built with a strict focus on privacy and speed, it provides complete file management alongside advanced local utilities—no internet required, and no data tracking.',
    features: [
      'Full-Scale File Management: Complete access to internal storage, SD cards, and USB; core copy, move, rename, delete, share operations with multi-select support, trash bin, and cryptographic checksums (MD5, SHA-1, SHA-256, SHA-512)',
      'Advanced Archive Management: Deep extraction for ZIP, RAR, 7Z, TAR, GZIP, BZIP2, XZ, ISO, CAB, DEB, RPM, DMG, WIM, LZH, LZMA, ZSTD, BROTLI, and multipart archives; creation of encrypted/split ZIP, 7Z, TAR archives',
      'On-Device PDF Tools: Split, merge, rotate, encrypt, decrypt, organize PDFs locally, and integrated physical document scanner',
      'Secure Vault (AES/GCM Encryption): Store private photos, videos, and documents in an AES/GCM encrypted Vault locked with PIN, password, or pattern',
      'Advanced Gallery & On-Device AI: Fluid full-screen media browser, local AI image categorization, OCR, and subject extraction powered by ML Kit, plus image & EXIF editor',
      'Audio Player & Video Editor: MediaStore audio player with playlists, tag editor (ID3), and custom audio/video trimmer with export controls',
      'Smart Search & Storage Analyzer: Deep search by name, content, type, size, or date range, plus comprehensive storage usage insights',
      'Absolute Privacy & Security: 100% local processing for AI tools, OCR, Vault, and PDF operations with zero data collection or tracking'
    ],
    link: 'https://play.google.com/store/apps/details?id=com.wirelessalien.files',
    tags: ['Android', 'Kotlin', 'Closed Source'],
    color: 'bg-emerald-100',
    type: 'playstore',
    icon: '/files_icon.png'
  }
];
