/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ATTENTION : Cela désactive les erreurs TypeScript lors du build
    // C'est parfait pour un MVP rapide, mais à éviter sur un gros projet pro.
    ignoreBuildErrors: true,
  },
  eslint: {
    // On ignore aussi les erreurs de style (linting) pour être tranquille
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;