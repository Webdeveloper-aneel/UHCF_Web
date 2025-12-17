import { Youtube, Play } from "lucide-react";

const Media = () => {
  // YouTube channel embed - showing latest videos
  const youtubeEmbedUrl = "https://www.youtube.com/embed?listType=user_uploads&list=uhcf5361";
  
  // Alternative: specific video IDs from the channel
  const featuredVideos = [
    { id: "videoplayer", title: "UHCF Worship" },
  ];

  return (
    <section id="media" className="section-padding bg-card">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Media & Sermons</h2>
          <div className="gold-divider mb-6" />
          <p className="section-subtitle mx-auto">
            Watch our worship services, sermons, and special events. 
            Stay connected with our community wherever you are.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card bg-foreground/5">
            <iframe
              src="https://www.youtube.com/embed?listType=playlist&list=UUuhcf5361"
              title="UHCF YouTube Channel"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Channel Link Card */}
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left text-primary-foreground">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <Youtube size={32} className="text-accent" />
                <h3 className="text-2xl font-heading font-bold">
                  UHCF YouTube Channel
                </h3>
              </div>
              <p className="opacity-90 max-w-xl">
                Subscribe to our channel for worship sessions, sermons, testimonies, 
                and special event recordings. New content added regularly!
              </p>
            </div>
            <a
              href="https://www.youtube.com/@uhcf5361"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-gold whitespace-nowrap"
            >
              <Play size={20} />
              Visit Channel
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>

        {/* Video Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Latest Videos Embed */}
          <div className="bg-background rounded-2xl overflow-hidden shadow-soft card-hover">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UUuhcf5361"
                title="Recent Uploads"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <h4 className="font-heading font-semibold text-foreground">Recent Uploads</h4>
              <p className="text-sm text-muted-foreground mt-1">Watch our latest videos</p>
            </div>
          </div>

          {/* Placeholder for more videos */}
          <div className="bg-background rounded-2xl overflow-hidden shadow-soft card-hover">
            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
              <div className="text-center p-6">
                <Youtube size={48} className="mx-auto mb-3 text-primary/50" />
                <p className="text-muted-foreground">More videos on our channel</p>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-heading font-semibold text-foreground">Worship Sessions</h4>
              <p className="text-sm text-muted-foreground mt-1">Praise and worship recordings</p>
            </div>
          </div>

          <div className="bg-background rounded-2xl overflow-hidden shadow-soft card-hover">
            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
              <div className="text-center p-6">
                <Youtube size={48} className="mx-auto mb-3 text-primary/50" />
                <p className="text-muted-foreground">More videos on our channel</p>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-heading font-semibold text-foreground">Special Events</h4>
              <p className="text-sm text-muted-foreground mt-1">Christmas, Easter & more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
