import { Users, Heart, Globe, BookOpen, Target, Star, Award, Church } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We are committed to loving God and loving others as ourselves, creating a community where everyone feels valued and accepted.",
    },
    {
      icon: BookOpen,
      title: "Faith",
      description: "We stand firm in our faith in Jesus Christ, teaching and living out biblical principles in our daily lives.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of fellowship, supporting each other through life's joys and challenges.",
    },
    {
      icon: Globe,
      title: "Cultural Heritage",
      description: "We celebrate our Urdu and Hindi heritage while embracing diversity and welcoming all who seek God.",
    },
  ];

  const milestones = [
    { year: "2010", title: "Foundation", description: "UHCF was established with a small group of believers." },
    { year: "2013", title: "First Building", description: "We moved into our first dedicated worship space." },
    { year: "2016", title: "Youth Ministry", description: "Launched our vibrant youth and children's programs." },
    { year: "2019", title: "Online Presence", description: "Expanded our reach through digital ministry." },
    { year: "2023", title: "Growing Strong", description: "Continuing to grow and serve our community." },
  ];

  const leadership = [
    { name: "Pastor Ahmad Khan", role: "Senior Pastor", description: "Leading our congregation with wisdom and compassion." },
    { name: "Sister Fatima Ali", role: "Worship Leader", description: "Guiding our praise and worship ministry." },
    { name: "Brother Yusuf Malik", role: "Youth Pastor", description: "Nurturing the next generation of believers." },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float delay-200" />
        </div>
        
        <div className="container-custom mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent/20 rounded-full border border-accent/30 animate-fade-in">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-slide-up">
              Our Story & Mission
            </h1>
            <p className="text-lg md:text-xl opacity-90 animate-slide-up delay-100">
              Discover the heart behind UHCF and our commitment to serving God and community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="section-title mt-4 mb-6">A Journey of Faith</h2>
              <div className="gold-divider mb-8 mx-0" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The Urdu Hindi Christian Fellowship began with a simple vision: to create a place where 
                  Urdu and Hindi-speaking believers could worship God in their heart language while building 
                  meaningful relationships with fellow Christians.
                </p>
                <p>
                  What started as a small prayer group has grown into a vibrant community of faith, 
                  welcoming people from diverse backgrounds who share a common love for Christ. 
                  Our journey has been marked by God's faithfulness and the dedication of our members.
                </p>
                <p>
                  Today, UHCF stands as a testament to God's grace, offering worship services, 
                  Bible studies, youth programs, and community outreach initiatives that touch lives 
                  both locally and beyond.
                </p>
              </div>
            </div>
            
            <div className="relative animate-scale-in delay-200">
              <div className="bg-card rounded-3xl p-8 shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <Church className="w-20 h-20 text-primary mb-6 animate-float" />
                <h3 className="text-2xl font-heading font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a beacon of hope and love, bringing the message of Jesus Christ to Urdu and Hindi 
                  speaking communities worldwide, nurturing disciples who transform their families, 
                  workplaces, and neighborhoods with God's love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">What We Believe</span>
            <h2 className="section-title mt-4 mb-6">Our Core Values</h2>
            <div className="gold-divider mb-6" />
            <p className="section-subtitle mx-auto">
              These values guide everything we do and shape who we are as a community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-background p-8 rounded-2xl card-hover text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-gold)" }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 mx-auto mb-8 text-foreground animate-pulse-slow" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              "To glorify God by making disciples of Jesus Christ among Urdu and Hindi speaking people, 
              equipping them to live out their faith and share God's love with the world."
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="section-title mt-4 mb-6">Milestones</h2>
            <div className="gold-divider" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-center gap-8 animate-slide-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-soft inline-block">
                      <span className="text-accent font-bold text-2xl">{milestone.year}</span>
                      <h3 className="text-xl font-heading font-semibold mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-primary items-center justify-center text-primary-foreground font-bold z-10">
                    <Star className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Meet Our Team</span>
            <h2 className="section-title mt-4 mb-6">Leadership</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={leader.name}
                className="group bg-background rounded-2xl overflow-hidden card-hover animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary to-blue-dark flex items-center justify-center">
                  <Award className="w-20 h-20 text-primary-foreground/30" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-semibold mb-1">{leader.name}</h3>
                  <p className="text-accent font-medium mb-3">{leader.role}</p>
                  <p className="text-muted-foreground text-sm">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto text-center">
          <h2 className="section-title mb-6">Want to Know More?</h2>
          <p className="section-subtitle mx-auto mb-8">
            We'd love to meet you and share more about our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">
              Contact Us
            </Link>
            <Link to="/services" className="btn-primary">
              Visit Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
