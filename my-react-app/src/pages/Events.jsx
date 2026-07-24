import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import grandInaguration8Img from '../assets/grand-inaguration-8.jpeg'
import './Events.css'

const newsArticles = [
  {
    id: 1,
    title: 'Medicare Wellington Blood Donation Drive 2026 – A Gift of Life',
    date: '4 March 2026',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
    description: 'Medicare Wellington proudly partnered with the New Zealand Blood Service to organise a successful Blood Donation Drive, reaffirming its commitment to community service and humanitarian values.',
    fullContent: (
      <>
        <p>
          On <strong>4 March 2026</strong>, <strong>Medicare Wellington</strong> proudly partnered with the
          <strong>New Zealand Blood Service</strong> to organise a successful <strong>Blood Donation Drive</strong>,
          reaffirming its commitment to community service and humanitarian values.
        </p>
        <p>
          The initiative received an encouraging response, with <strong>30 Medicare members</strong> voluntarily
          participating in the life-saving campaign. Demonstrating compassion and social responsibility, the
          donors came together with a shared purpose—to give the priceless gift of life to those in need. Their generosity
          reflected the true spirit of Medicare Wellington, where service to the community extends beyond the healthcare profession.
        </p>
        <p>
          The event was conducted smoothly under the guidance of the dedicated team from the New Zealand Blood
          Service, ensuring a safe and comfortable donation experience for every participant. In recognition of their
          valuable contribution, each donor was presented with a <strong>Certificate of Appreciation</strong>, honouring
          their commitment to this noble cause.
        </p>
        <p>
          The blood donation drive stood as a testament to the power of collective action and community spirit. It
          highlighted Medicare Wellington's ongoing mission to promote health, encourage volunteerism, and inspire
          meaningful social engagement among its members.
        </p>
        <p>
          This successful initiative not only strengthened the partnership between Medicare Wellington and the New
          Zealand Blood Service but also served as a reminder that a single act of kindness can make a profound difference
          in someone's life. Medicare Wellington extends its heartfelt gratitude to all the donors and volunteers whose
          wholehearted support made the event a memorable success.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: 'EVE FEST 2026 – A Grand Celebration of Unity, Culture and Talent',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    description: 'EVE FEST 2026 was celebrated with great enthusiasm at P.I.P.C Hall, Newtown, bringing together the festive spirit of Easter, Eid, and Vishu on one vibrant stage. The event reflected the values of unity, cultural diversity, and community togetherness, creating an unforgettable experience for everyone who attended.',
    fullContent: (
      <>
        <p>
          <strong>EVE FEST 2026</strong> was celebrated with great enthusiasm at <strong>P.I.P.C Hall, Newtown</strong>,
          bringing together the festive spirit of <strong>Easter, Eid, and Vishu</strong> on one vibrant stage. The event
          reflected the values of unity, cultural diversity, and community togetherness, creating an unforgettable
          experience for everyone who attended.
        </p>
        <p>
          One of the major highlights of the celebration was the <strong>first-ever Medicare Midukkan and Medicare
            Midukki Competition in Wellington</strong>. The prestigious talent hunt attracted enthusiastic participants
          who competed through <strong>three rounds of selection</strong>, showcasing their confidence, personality,
          communication skills, and unique talents before the finalists competed on the grand stage. The competition
          received an overwhelming response from both participants and the audience.
        </p>
        <p>
          Adding to the excitement were the <strong>Reel Competition</strong> and <strong>Folk Singing Competition</strong>,
          where contestants displayed remarkable creativity, artistic expression, and musical talent. Their outstanding
          performances captivated the audience and made the competitions a resounding success.
        </p>
        <p>
          The cultural segment beautifully showcased Kerala's rich heritage through graceful performances of
          <strong>Margamkali</strong>, <strong>Kaikottikali</strong>, and <strong>Oppana</strong>. These performances
          highlighted the spirit of harmony and cultural inclusiveness, perfectly complementing the celebrations
          of Easter, Eid, and Vishu.
        </p>
        <p>
          To make the occasion even more memorable, <strong>surprise gift vouchers</strong> were presented to Medicare
          members as a token of appreciation for their continued support and participation. The celebration concluded
          with joy, laughter, and a renewed sense of togetherness, leaving everyone with cherished memories.
        </p>
        <p>
          EVE FEST 2026 was more than a cultural event—it was a celebration of friendship, diversity, and community
          spirit. The overwhelming participation and positive response made it one of Medicare Wellington's most
          successful and memorable gatherings, setting a new benchmark for future celebrations.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: 'Luminous Fiesta 2025 – A Grand Celebration of Christmas Spirit',
    date: '29 December 2025',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80',
    description: 'The Medicare Wellington Association of Malayalee Health Care Workers and Families concluded the year on a festive note with Luminous Fiesta 2025, a Christmas celebration bringing together more than 400 attendees.',
    fullContent: (
      <>
        <p>
          The <strong>Medicare Wellington Association of Malayalee Health Care Workers and Families</strong> concluded
          the year on a festive note with <strong>Luminous Fiesta 2025</strong>, a vibrant Christmas celebration held on
          <strong>29 December 2025</strong> at <strong>St Anne's Hall, Newtown</strong>.
        </p>
        <p>
          The event brought together <strong>more than 400 attendees</strong>, creating an evening filled with joy,
          unity, and the true spirit of Christmas. Families, friends, and community members gathered to celebrate the
          season through a variety of entertaining programs and competitions.
        </p>
        <p>
          The celebration featured a series of exciting competitions that received an overwhelming response from the
          community. <strong>The Bottle Art Competition</strong>, organized for the <strong>first time in Wellington</strong>
          by Medicare Wellington, became one of the signature attractions of the event. The competition witnessed an
          impressive number of participants, who transformed ordinary bottles into stunning works of art using innovative
          techniques, vibrant colours, and creative themes.
        </p>
        <p>
          The festive spirit continued with the lively <strong>Santa Dance Competition</strong>, where contestants
          of all ages captivated the audience with energetic performances, and the <strong>Carol Singing Competition</strong>
          which filled the hall with beautiful harmonies.
        </p>
        <p>
          The event was graced by distinguished guests, including <strong>Clifford Raphael</strong>, President of KCC;
          <strong>Fr. Christy</strong>, Vicar of the Orthodox Church; and <strong>Antony</strong> from
          <strong>Manga – The Food Store</strong>, whose presence made the celebration even more special.
        </p>
        <p>
          One of the most memorable highlights of the evening was the <strong>Santa Parade</strong>, where
          <strong>more than 40 young Santas</strong> delighted the audience with their colourful costumes, followed
          by a delicious community dinner.
        </p>
      </>
    )
  },
  {
    id: 4,
    title: "Nurturing Young Creativity – Children's Colouring and Drawing Competition",
    date: '1 December 2025',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    description: "Medicare Wellington organized a Children's Colouring and Drawing Competition on 1 December 2025 at the Polish Hall, Newtown, attracting an enthusiastic participation of over 50 children.",
    fullContent: (
      <>
        <p>
          As part of its efforts to encourage creativity and provide a platform for young talents, the
          <strong>Medicare Wellington Association of Malayalee Health Care Workers and Families</strong> organized a
          <strong>Children's Colouring and Drawing Competition</strong> on <strong>1 December 2025</strong> at the
          <strong>Polish Hall, Newtown</strong>.
        </p>
        <p>
          The event attracted an enthusiastic participation of <strong>over 50 children</strong>, who showcased their
          imagination and artistic abilities through vibrant and creative artwork. The competition was conducted in a
          fun, encouraging, and family-friendly atmosphere, allowing children to express themselves freely while
          enjoying a memorable day with their families.
        </p>
        <p>
          To ensure fair competition, participants were divided into two age categories:
        </p>
        <ul>
          <li><strong>5–8 years</strong></li>
          <li><strong>9–12 years</strong></li>
        </ul>
        <p>
          The artworks reflected remarkable creativity, originality, and talent. Winners from each category were
          honoured with <strong>cash prizes</strong> and <strong>certificates of achievement</strong>. Every participant
          was appreciated for their enthusiasm, making the event a rewarding experience for all.
        </p>
      </>
    )
  },
  {
    id: 5,
    title: 'Empowering the Community Through Financial Awareness',
    date: '1 December 2025',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    description: 'Continuing its commitment to the well-being of the community, Medicare Wellington successfully organized a Financial Investment Seminar at Polish Hall, Newtown, led by Simi Sethu.',
    fullContent: (
      <>
        <p>
          Continuing its commitment to the holistic well-being of Malayalee healthcare professionals and their families,
          the <strong>Medicare Wellington Association of Malayalee Health Care Workers and Families</strong> successfully
          organized a <strong>Financial Investment Seminar</strong> on <strong>1 December 2025</strong> at the
          <strong>Polish Hall, Newtown</strong>.
        </p>
        <p>
          The seminar was led by <strong>Simi Sethu</strong>, Director of <strong>Kripa Financial Solutions</strong>,
          who delivered an insightful presentation on financial planning, wealth creation, and smart investment strategies
          tailored to individuals and families living in New Zealand.
        </p>
        <p>
          The event witnessed the enthusiastic participation of <strong>more than 75 attendees</strong>, reflecting the
          community's growing interest in achieving financial security and making informed investment decisions.
        </p>
        <p>
          One of the highlights of the seminar was the highly interactive question-and-answer session, during which
          participants actively engaged with the speaker. A significant focus was placed on <strong>the current housing
            market trends in New Zealand</strong>, home-buying strategies, mortgage options, and long-term planning.
        </p>
      </>
    )
  },
  {
    id: 6,
    title: 'Medicare Wellington – A Journey Begins (Grand Inauguration)',
    date: '25 October 2025',
    image: grandInaguration8Img,
    description: 'The association marked the beginning of a remarkable journey with its grand inauguration at the Indian Association Hall, Kilbirnie, celebrating unity, culture, and service.',
    fullContent: (
      <>
        <p>
          The <strong>Medicare Wellington Association of Malayalee Health Care Workers and Families</strong> marked the
          beginning of a remarkable journey with its grand inauguration on <strong>25 October 2025</strong> at the
          <strong>Indian Association Hall, Kilbirnie</strong>. The event brought together healthcare professionals, their
          families, and members of the wider community, celebrating unity, culture, and service.
        </p>
        <p>
          The association was officially inaugurated in the esteemed presence of distinguished guests, including
          <strong>Gurpreet Dhillon</strong>, Upper Hutt Councillor; <strong>Prabharavi</strong>, Lower Hutt Councillor;
          <strong>Saju Cherian</strong>, NZNO Member and Justice of the Peace (JP); and Duty Nurse Managers from Wellington
          Hospital, <strong>Deena Sebastian</strong> and <strong>Sharlet Tytus</strong>.
        </p>
        <p>
          The inauguration coincided with the spectacular <strong>Mega Show of M. G. Sreekumar</strong>, making the
          occasion even more memorable. The vibrant musical evening entertained the audience with timeless melodies
          and created an atmosphere of celebration, joy, and cultural pride.
        </p>
        <p>
          The launch represented far more than the formation of an association. It marked the beginning of a shared
          vision—to build a supportive network for Malayalee healthcare workers, preserve heritage, and serve the
          community with dedication and compassion.
        </p>
      </>
    )
  }
]

function Events() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedArticle])

  return (
    <main className="flex-grow w-full">
      <div className="events-page">
        {/* Header Hero */}
        <section className="events-hero">
          <span className="events-badge">Updates & Events</span>
          <h1 className="events-title">News & Highlights</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Stay updated with our latest community initiatives, charity drives, milestones, and family gatherings.
          </p>
        </section>

        {/* Articles Feed */}
        <div className="events-grid">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="event-article-card"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="event-img-frame">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="event-content-body">
                <span className="event-date-lbl">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span> {article.date}
                </span>
                <h3 className="event-article-title">{article.title}</h3>
                <p className="event-article-desc">{article.description}</p>
                <div className="event-read-more">
                  Read Article <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed Article Modal (Portal to document.body) */}
        {selectedArticle && createPortal(
          <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
            <div
              className="modal-content-box"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="modal-img-banner">
                <img src={selectedArticle.image} alt={selectedArticle.title} />
              </div>

              <div className="modal-body">
                <span className="modal-date">
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span> {selectedArticle.date}
                </span>
                <h2 className="modal-title">{selectedArticle.title}</h2>
                <div className="modal-text">
                  {selectedArticle.fullContent}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </main>
  )
}

export default Events
export { newsArticles }
