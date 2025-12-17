import Header from "@/components/Header";
import Media from "@/components/Media";
import Footer from "@/components/Footer";

const MediaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Media />
      </main>
      <Footer />
    </div>
  );
};

export default MediaPage;
