import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const videos = [
  {
    id: "jvwF0xKYHrc",
    title: "Sunday Worship Service",
    description: "Join us for our weekly worship in Urdu and Hindi",
  },
  {
    id: "3sHZO3eqXJw",
    title: "Christmas Special Service",
    description: "Celebrating the birth of our Lord Jesus Christ",
  },
  {
    id: "p6qJKuqQ2xo",
    title: "Bible Study Session",
    description: "Exploring the Word of God together",
  },
];

const LatestVideos = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Watch & Listen
          </span>
          <h2 className="section-title mt-4 mb-6">Latest Videos</h2>
          <div className="gold-divider mb-6" />
          <p className="section-subtitle mx-auto">
            Catch up on our recent sermons and worship sessions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group bg-background rounded-2xl overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-accent flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    <Play className="w-8 h-8 text-foreground fill-current ml-1" />
                  </a>
                </div>
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

        <div className="text-center mt-12">
          <Link 
            to="/media" 
            className="btn-primary inline-flex items-center gap-2 group"
          >
            View All Videos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
