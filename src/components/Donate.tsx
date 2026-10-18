import { ExternalLink, Github, Heart } from 'lucide-react';

export function Donate() {
  return (
    <div className="pt-24 pb-20 lg:pt-32 min-h-[calc(100vh-200px)] flex flex-col px-6">
      <div className="max-w-3xl mx-auto w-full flex-1">
        <div className="text-center mb-12">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-container text-primary mb-6 shadow-sm">
            <Heart size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background mb-4">
            Support My Work
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            If you find my open-source projects helpful, consider making a donation. 
            Your support helps me maintain and create more tools for the community.
          </p>
        </div>

        <div className="space-y-4">
          <a 
            href="https://ko-fi.com/wirelessalien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all hover:bg-surface-container"
          >
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 rounded-xl bg-[#29abe0] flex items-center justify-center text-white shrink-0">
                <span className="font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">Ko-Fi</h3>
                <p className="text-sm text-on-surface-variant">Buy me a coffee &bull; One-time donation</p>
              </div>
            </div>
            <ExternalLink className="text-primary/50 group-hover:text-primary transition-colors" />
          </a>

          <a 
            href="https://paypal.me/WirelessAlien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all hover:bg-surface-container"
          >
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 rounded-xl bg-[#003087] flex items-center justify-center text-white shrink-0">
                <span className="font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">PayPal</h3>
                <p className="text-sm text-on-surface-variant">Fast &amp; easy transfer</p>
              </div>
            </div>
            <ExternalLink className="text-primary/50 group-hover:text-primary transition-colors" />
          </a>

          <a 
            href="https://liberapay.com/wirelessalien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all hover:bg-surface-container"
          >
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 rounded-xl bg-[#F6C915] flex items-center justify-center text-black shrink-0">
                <span className="font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">Liberapay</h3>
                <p className="text-sm text-on-surface-variant">Open-source funding</p>
              </div>
            </div>
            <ExternalLink className="text-primary/50 group-hover:text-primary transition-colors" />
          </a>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-on-surface-variant text-sm mb-4">
            Not ready to donate? Starring my repositories on GitHub also helps a lot!
          </p>
          <a 
            href="https://github.com/WirelessAlien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Github size={18} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
