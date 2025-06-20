import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutFranchise from "@/components/AboutFranchise";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <AboutFranchise />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
