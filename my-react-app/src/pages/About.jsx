import './About.css'

function About() {
  const missionPoints = [
    'To unite healthcare professionals and their families in a welcoming, inclusive, and supportive community.',
    'To promote friendship, collaboration, and professional development among members.',
    'To encourage community welfare through charitable initiatives, health awareness programs, volunteer service, and social outreach.',
    'To celebrate cultural diversity and strengthen family values through meaningful events and shared experiences.',
    'To inspire compassion, leadership, and social responsibility while working together to build a healthier, stronger, and more connected community.',
  ]

  return (
    <section id="about" className="flex-grow w-full">
      {/* Header Hero */}
      <section className="about-hero-modern">
        {/* Dynamic Background Elements */}
        <div className="about-hero-glow shape-1"></div>
        <div className="about-hero-glow shape-2"></div>
        <div className="about-hero-glow shape-3"></div>

        <div className="about-hero-container">
          <div className="about-hero-text-content">
            <div className="about-hero-badge">
              <span className="material-symbols-outlined text-sm">groups</span>
              About Us
            </div>

            <h1 className="about-hero-title">
              Medicare <br />
              <span className="text-gradient">Wellington</span>
            </h1>

            <div className="about-hero-description">
              <p className="lead-text">
                Medicare Wellington is a vibrant, inclusive community that brings together healthcare professionals and their families across the Wellington region.
              </p>
              <p>
                Built on the values of compassion, unity, and service, our organization serves as a platform where members can connect, support one another, celebrate cultural diversity, and contribute meaningfully to the wider community.
              </p>
              <p>
                Beyond professional networking, Medicare Wellington is a family-oriented organization that nurtures lifelong friendships, promotes wellbeing, and creates opportunities for social, cultural, educational, and charitable engagement.
              </p>
              <p>
                Through health awareness initiatives, community outreach, cultural celebrations, and volunteer activities, we strive to make a positive difference in the lives of both our members and the community we serve.
              </p>

              <h3 className="text-xl font-bold text-on-surface mt-4 mb-1">Grand Inauguration</h3>
              <p>
                The <strong>Medicare Wellington Association of Malayalee Health Care Workers and Families</strong> marked the beginning of a remarkable journey with its grand inauguration on <strong>25 October 2025</strong> at the <strong>Indian Association Hall, Kilbirnie</strong>. The event brought together healthcare professionals, their families, and members of the wider community, celebrating unity, culture, and service.
              </p>
              <p>
                The association was officially inaugurated in the esteemed presence of distinguished guests, including <strong>Gurpreet Dhillon</strong>, Upper Hutt Councillor; <strong>Prabharavi</strong>, Lower Hutt Councillor; <strong>Saju Cherian</strong>, NZNO Member and Justice of the Peace (JP); <strong>Deena Sebastian</strong>, Duty Nurse Manager, Wellington Hospital; and <strong>Sharlet Tytus</strong>, Duty Nurse Manager, Wellington Hospital.
              </p>
              <p>
                Their inspiring words highlighted the invaluable contributions of Malayalee healthcare professionals to New Zealand's healthcare system and encouraged the association to continue fostering togetherness, professional excellence, and community spirit.
              </p>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-images">
              <div className="about-img-back">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgJxsAv_CjcyoXZ1ef7RW9LfJuTCuabRANKFdJ3Vnc2rbn9nn2S9N1dRYH0JqhweqYFa87wc8EOwLC5EXSXeSIABSeZGKLz4tiA9R_5DogQ3_TWFbND5O47yMp9Sli4WkMFRi3Jz4VB1opr_f6vhYWe_J969DvfUcQhVJBVyCWjL5hQ_OOhpBFXryDS_-nRkgc1IG7GhK1y1m2kcVMYgtDaKvkhGjU9Po9jNXSgLwVpMKlueLZ1Fy0H3gyOQbo0yHmOez6bSdZDw"
                  alt="Community picnic"
                />
                <div className="glass-overlay"></div>
              </div>
              <div className="about-img-front">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo2ypmcSnpuxm5StEUaIzA0CeYj5s-tMwRIJWZMMbVKu2Qm1mKO3UQ2QgglEmJQvaGMXhORQvYnfuI85vzXWM7l50hxsPCTLusm7F0OLSinOTBV7apfMuzuNWX4cLRqoP60Um1KrheOG3mCCq8OPwqQvTGRkEKHRpgeiPVa81wsYTwogSJBfDHDBgECCNXo4VxwTmCaJs_MdE-nAVgxDjzozhADVrBXUkTfxpW02T63EG_3M4uNqSHRHjfqfscPgRLISp_Jcx9ug"
                  alt="Community event"
                />
                <div className="glass-overlay"></div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
