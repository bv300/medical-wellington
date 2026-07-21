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
    <main className="flex-grow w-full">
      <div className="about-page">
        {/* Header Hero */}
        <section className="about-hero">
          <span className="about-badge">About Us</span>
          <h1 className="about-title">Medicare Wellington</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Fostering connection, service, and excellence within the healthcare professional community.
          </p>
        </section>

        {/* Intro Grid */}
        <section className="about-intro-grid">
          <div className="about-intro-text">
            <p>
              Medicare Wellington is a vibrant, inclusive community that brings together healthcare professionals and
              their families across the Wellington region. Built on the values of compassion, unity, and service, our
              organization serves as a platform where members can connect, support one another, celebrate cultural
              diversity, and contribute meaningfully to the wider community.
            </p>
            <p>
              Beyond professional networking, Medicare Wellington is a family-oriented organization that nurtures
              lifelong friendships, promotes wellbeing, and creates opportunities for social, cultural, educational,
              and charitable engagement.
            </p>
            <p>
              Through health awareness initiatives, community outreach, cultural celebrations, and volunteer activities,
              we strive to make a positive difference in the lives of both our members and the community we serve.
            </p>
          </div>

          <div className="about-image-stack">
            <div className="about-stack-back">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgJxsAv_CjcyoXZ1ef7RW9LfJuTCuabRANKFdJ3Vnc2rbn9nn2S9N1dRYH0JqhweqYFa87wc8EOwLC5EXSXeSIABSeZGKLz4tiA9R_5DogQ3_TWFbND5O47yMp9Sli4WkMFRi3Jz4VB1opr_f6vhYWe_J969DvfUcQhVJBVyCWjL5hQ_OOhpBFXryDS_-nRkgc1IG7GhK1y1m2kcVMYgtDaKvkhGjU9Po9jNXSgLwVpMKlueLZ1Fy0H3gyOQbo0yHmOez6bSdZDw"
                alt="Community picnic"
              />
            </div>
            <div className="about-stack-front">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo2ypmcSnpuxm5StEUaIzA0CeYj5s-tMwRIJWZMMbVKu2Qm1mKO3UQ2QgglEmJQvaGMXhORQvYnfuI85vzXWM7l50hxsPCTLusm7F0OLSinOTBV7apfMuzuNWX4cLRqoP60Um1KrheOG3mCCq8OPwqQvTGRkEKHRpgeiPVa81wsYTwogSJBfDHDBgECCNXo4VxwTmCaJs_MdE-nAVgxDjzozhADVrBXUkTfxpW02T63EG_3M4uNqSHRHjfqfscPgRLISp_Jcx9ug"
                alt="Community event"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards Grid */}
        <section className="about-vm-grid">
          {/* Vision */}
          <div className="about-card">
            <div className="about-card-icon vision">
              <span className="material-symbols-outlined text-[32px]">visibility</span>
            </div>
            <h2 className="about-card-title">Our Vision</h2>
            <p className="about-card-text">
              To build a united and compassionate community of healthcare professionals and their families by inspiring
              excellence in service, fostering lasting relationships, celebrating cultural diversity, and creating a
              meaningful impact through community welfare, collaboration, and collective responsibility.
            </p>
          </div>

          {/* Mission */}
          <div className="about-card">
            <div className="about-card-icon mission">
              <span className="material-symbols-outlined text-[32px]">flag</span>
            </div>
            <h2 className="about-card-title">Our Mission</h2>
            <ul className="mission-list">
              {missionPoints.map((point, index) => (
                <li className="mission-item" key={index}>
                  <span className="material-symbols-outlined mission-item-check text-primary">check_circle</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
