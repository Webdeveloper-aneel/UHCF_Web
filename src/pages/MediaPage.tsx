import { Youtube, Play, Video, Headphones, Download, ExternalLink } from "lucide-react";

const MediaPage = () => {
  const featuredVideos = [
    {
      title: "Sunday Worship Service",
      description: "Latest worship service from UHCF",
      embedId: "PLhcf5361", // Placeholder - replace with actual video IDs
      category: "Worship",
    },
    {
      title: "Bible Study Series",
      description: "Deep dive into God's Word",
      embedId: "PLhcf5362",
      category: "Teaching",
    },
    {
      title: "Special Easter Program",
      description: "Celebrating the resurrection",
      embedId: "PLhcf5363",
      category: "Special Event",
    },
  ];

  const categories = [
    { name: "All Videos", count: 150 },
    { name: "Worship Services", count: 52 },
    { name: "Bible Studies", count: 48 },
    { name: "Youth Programs", count: 25 },
    { name: "Special Events", count: 25 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float delay-200" />
        </div>
        
        <div className="container-custom mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent/20 rounded-full border border-accent/30 animate-fade-in">
              Media Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-slide-up">
              Watch & Listen
            </h1>
            <p className="text-lg md:text-xl opacity-90 animate-slide-up delay-100">
              Access our sermons, worship sessions, and special programs anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Main Video Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl overflow-hidden shadow-card animate-scale-in">
                <div className="aspect-video bg-foreground/5 relative">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=UU_uhcf5361"
                    title="UHCF YouTube Channel"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-heading font-bold mb-2">Latest from UHCF</h2>
                  <p className="text-muted-foreground">
                    Watch our most recent worship services, Bible studies, and special programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Channel Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-soft animate-slide-up">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-destructive flex items-center justify-center">
                    <Youtube className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">UHCF Channel</h3>
                    <p className="text-sm text-muted-foreground">Subscribe for updates</p>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/@uhcf5361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center flex items-center justify-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  Visit Channel
                </a>
              </div>

              {/* Quick Stats */}
              <div className="bg-card rounded-2xl p-6 shadow-soft animate-slide-up delay-100">
                <h3 className="font-heading font-semibold mb-4">Media Library</h3>
                <div className="space-y-3">
                  {categories.slice(0, 4).map((category) => (
                    <div key={category.name} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{category.name}</span>
                      <span className="font-semibold text-primary">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Access */}
              <div className="bg-gradient-to-br from-primary to-blue-dark rounded-2xl p-6 text-primary-foreground animate-slide-up delay-200">
                <Headphones className="w-10 h-10 mb-4" />
                <h3 className="font-heading font-semibold mb-2">Audio Sermons</h3>
                <p className="text-sm opacity-80 mb-4">Listen to sermons on the go</p>
                <button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Featured Content</span>
            <h2 className="section-title mt-4 mb-6">Popular Videos</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <div
                key={video.title}
                className="group bg-background rounded-2xl overflow-hidden card-hover animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video bg-foreground/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-dark/80 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-foreground text-xs font-medium rounded-full">
                    {video.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Browse</span>
            <h2 className="section-title mt-4 mb-6">Video Categories</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <a
                key={category.name}
                href="https://www.youtube.com/@uhcf5361"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card rounded-xl hover:bg-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Video className="w-8 h-8 text-primary group-hover:text-primary-foreground mb-3 transition-colors" />
                <h3 className="font-semibold group-hover:text-primary-foreground transition-colors">{category.name}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                  {category.count} videos
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Uploads */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Fresh Content</span>
              <h2 className="section-title mt-2">Recent Uploads</h2>
            </div>
            <a
              href="https://www.youtube.com/@uhcf5361"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              View All
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={item}
                className="group bg-background rounded-xl overflow-hidden card-hover animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/60 to-blue-dark/60 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-sm truncate">Service Recording #{item}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Recent upload</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-gold)" }}>
        <div className="container-custom mx-auto relative z-10 text-center">
          <Youtube className="w-16 h-16 mx-auto mb-6 text-foreground animate-bounce" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Subscribe to Our Channel
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Never miss a service or special program. Subscribe to get notified of new uploads.
          </p>
          <a
            href="https://www.youtube.com/@uhcf5361"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Youtube className="w-5 h-5" />
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
