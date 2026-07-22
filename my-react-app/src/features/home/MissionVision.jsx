import './MissionVision.css'

/* ============================================================
   Canvas coordinate systems — unit space matches the SVG viewBox
   exactly, so boxes (CSS %) and arrows (SVG units) never drift.
   ============================================================ */

const VISION_W = 900
const VISION_H = 560

const visionBoxes = {
  imgSmall1:  { x: 115, y: 15,  w: 85,  h: 65,  legend: 'external', label: 'IMG', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT5C8t2-BtU2xrjZcU_W_IRt8YGyXvi3mg2i3Z5pQrjOOzC8BExVZdqTsxpGUhcWD11om8FPmeVza8N_jmzJnWBuK_UY6j1JVbLgcxjZEp8diiyQkr72haUxfepiQBkFgIsMzbnbwFVMNMCcrlRL9tjnsa4cF7EXj4bU-WhPTHsgyzCxbxPxnvdJ4oYgO-_VRMusd2FK-jdbAVqbpQHlDrGFqMJTujKjg2SKztA10hBDClo79y_z-4JXJ7TW-xCSwzgPkMmEElDg' },
  imgSmall2:  { x: 210, y: 8,   w: 80,  h: 55,  legend: 'external', label: 'IMG', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_y8DBDhf4jZtLdsnp8RLFSibPfT_W-MSZJlCkLpGU8AG6UC2ru-ALvNDSblwPba9dSOD6ialL2NXQxEK_iRqnyGfokbj1796Z1KmcXbxsnMxffyKgBe6BKCp7-5Sn_pqPEzXkTzDp6zD8s7MXVlqGgQfn-vkYJPGJHEj96OykiOdgcXIPeAOEWenoPJ-eUwDqLsOuriGPqUmcTgfsWH81v14tNmoa5YTRYUOGtE44dOhsirP49OxxtUSrsD6oXeGxjnWb-FPLJA' },
  topBox:     { x: 400, y: 12,  w: 190, h: 95,  legend: 'component', title: 'Compassionate Care', desc: 'Providing empathy, warmth, and patient-first support in everything we do.' },
  imgLarge:   { x: 15,  y: 95,  w: 190, h: 180, legend: 'external', label: 'IMG', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo2ypmcSnpuxm5StEUaIzA0CeYj5s-tMwRIJWZMMbVKu2Qm1mKO3UQ2QgglEmJQvaGMXhORQvYnfuI85vzXWM7l50hxsPCTLusm7F0OLSinOTBV7apfMuzuNWX4cLRqoP60Um1KrheOG3mCCq8OPwqQvTGRkEKHRpgeiPVa81wsYTwogSJBfDHDBgECCNXo4VxwTmCaJs_MdE-nAVgxDjzozhADVrBXUkTfxpW02T63EG_3M4uNqSHRHjfqfscPgRLISp_Jcx9ug' },
  box2:       { x: 445, y: 145, w: 175, h: 95,  legend: 'component', title: 'Strong Connections', desc: 'Building bridges between local healthcare workers, clinics, and families.' },
  imgBubble:  { x: 685, y: 155, w: 120, h: 80,  legend: 'external', label: 'img', round: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPq_bIEJeXbmFL7xAXpGZPio4gTmopfUHMfuvd2T2T1XNKoXEwiSwJwyqkcaQcgMApBT4Gk872S4DH8OAHOQE6SVwrunr_fosP5BzoZwR9nbpVW-r0RDoMPMLlos2RnmWt7fCoAkPi_yNBQ224VYXdtIN0YiHM0zRJwfmpw5U5FN5fy1W8qNX9tp5CTKNzEr8dTI-S6I9tDLMGNYbLrc0t96ccG-IAuDWkMZR4-k2rzsVia9CyFfBC7Y29BAsEUyWgWqmWWaB0fQ' },
  dependBox:  { x: 40,  y: 305, w: 190, h: 95,  legend: 'component', title: 'Resource Sharing', desc: 'Sharing medical guides, clinical tools, and family support resources.' },
  hubBox:     { x: 355, y: 290, w: 245, h: 120, legend: 'main', title: 'United Community', desc: 'Bringing doctors, nurses, healthcare staff, and their families together as one team.' },
  sideBox:    { x: 660, y: 345, w: 180, h: 95,  legend: 'component', title: 'Cultural Harmony', desc: 'Celebrating our diverse heritage and creating inclusive support networks.' },
  bottomBox:  { x: 355, y: 450, w: 225, h: 95,  legend: 'component', title: 'Positive Impact', desc: 'Organizing health camps, blood donation drives, and charity events.' },
}

const visionEdges = [
  { from: ['imgSmall1', 'right', 0.5], to: ['topBox', 'left', 0.4], type: 'dependency' },
  { from: ['imgSmall2', 'right', 0.6], to: ['topBox', 'left', 0.15], type: 'dependency' },
  { from: ['imgLarge', 'bottom', 0.3], to: ['dependBox', 'top', 0.2], type: 'dependency' },
  { from: ['topBox', 'bottom', 0.5], to: ['box2', 'top', 0.5], type: 'sequential' },
  { from: ['box2', 'right', 0.5], to: ['imgBubble', 'left', 0.5], type: 'dependency' },
  { from: ['box2', 'bottom', 0.5], to: ['hubBox', 'top', 0.5], type: 'sequential' },
  { from: ['hubBox', 'left', 0.5], to: ['dependBox', 'right', 0.5], type: 'dependency' },
  { from: ['hubBox', 'right', 0.5], to: ['sideBox', 'left', 0.5], type: 'dependency' },
  { from: ['hubBox', 'bottom', 0.4], to: ['bottomBox', 'top', 0.4], type: 'sequential' },
  { from: ['sideBox', 'bottom', 0.5], to: ['bottomBox', 'right', 0.6], type: 'sequential' },
]

const MISSION_W = 900
const MISSION_H = 420

const missionBoxes = {
  m1:            { x: 40,  y: 20,  w: 200, h: 95,  legend: 'main', title: 'Professional Growth', desc: 'Providing training, workshops, and collaborative tools to help healthcare workers excel.' },
  m2:            { x: 200, y: 150, w: 180, h: 90,  legend: 'component', title: 'Family Support', desc: 'Helping families settle in Wellington with advice on housing, schooling, and local resources.' },
  m3:            { x: 15,  y: 290, w: 190, h: 100, legend: 'main', title: 'Community Trust', desc: 'Creating a safe, supportive network built on shared values of compassion and unity.' },
  imgCloudLeft:  { x: 410, y: 70,  w: 90,  h: 70,  legend: 'external', label: 'img', round: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJxsAv_CjcyoXZ1ef7RW9LfJuTCuabRANKFdJ3Vnc2rbn9nn2S9N1dRYH0JqhweqYFa87wc8EOwLC5EXSXeSIABSeZGKLz4tiA9R_5DogQ3_TWFbND5O47yMp9Sli4WkMFRi3Jz4VB1opr_f6vhYWe_J969DvfUcQhVJBVyCWjL5hQ_OOhpBFXryDS_-nRkgc1IG7GhK1y1m2kcVMYgtDaKvkhGjU9Po9jNXSgLwVpMKlueLZ1Fy0H3gyOQbo0yHmOez6bSdZDw' },
  imgBig:        { x: 505, y: 30,  w: 190, h: 150, legend: 'main', label: 'IMG', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAb5hwlaKbGpqohH7CEASzuBt2K9cy2Y4NdQ0RGQUvowXEtLdQwTDawJMlycL1Gx2WioWCp644m2yG5432joMkD71ZWe8zX-NApCPtxaWCF_1emqtmigIslQ1gyOzBg15wXIqCHqDPQJ1gdLhHlMiXQLMoHldm50Gq61-R9aWpVo940A1ZQYzRoGDXaep_WPiz0p6eGIAEGboVB0abvttzPIlPtaE0Uaj2JphOje4CHR4VRHRVHMBxAnll7lHLpXPHzqLkNz9TLA' },
  imgRight:      { x: 740, y: 95,  w: 140, h: 90,  legend: 'external', label: 'IMG', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR9X4x5Q3QOx9oUaIpaDuZHeQDlnLyfxqxPloiIanyT2EEVmt5Tpor_2nsOc0cWlKlcaUTYGAZvVpXfA-YuTa22pr_dJlhrLnZX2oKG4vmC3KtkZ3fim1AK93TFn4ZkRdwIc8TxpaXuQ7Pvrfkl68u9SlDdIVRxwYwuYofUq67z_YBri7aFuxj1V7vpeOzrJvyOJNbZMPLHDTVusAovZpjriQZPJe-E2_IMzsoEZHlTZ3sNxg0glgn1MrIRuPg_cCE9fnD9xMAwA' },
  imgBottomRight: { x: 630, y: 240, w: 170, h: 110, legend: 'external', label: 'IMG', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC625HUFwRECxMHAyz_BEpbpaDazzXQdmhA8OtpUwE7NrV4jiiJ-u3PNk1YtrltqLFL7eTnd1CadC9bnIOXtmrftUryHT8fM3QhRYHJUfdo6bPoQAlSQb_-XU5XyrM4VAU0Z405QDRrh-sKA_bMHm5esJV64Z3TmEMSWCkomnPUAmajcv8LxhDAIYsARSUSLxF238qYjQMg2JTPuYCidKxEQHEk4kA-HwG03p7F0JysiMQozCBqhnuUFa_ZeUU09fkW7sdiNs5N9g' },
}

const missionEdges = [
  { from: ['m1', 'bottom', 0.5], to: ['m2', 'top', 0.5], type: 'sequential' },
  { from: ['m2', 'bottom', 0.5], to: ['m3', 'top', 0.5], type: 'sequential' },
  { from: ['imgCloudLeft', 'right', 0.5], to: ['imgBig', 'left', 0.3], type: 'dependency' },
  { from: ['imgBig', 'right', 0.4], to: ['imgRight', 'left', 0.5], type: 'dependency' },
  { from: ['imgRight', 'bottom', 0.5], to: ['imgBottomRight', 'top', 0.6], type: 'dependency' },
  { from: ['m2', 'right', 0.5], to: ['imgBottomRight', 'left', 0.3], type: 'dependency' },
]

/* ============================================================
   Geometry helpers
   ============================================================ */

function anchorPoint(boxes, [key, side, t]) {
  const b = boxes[key]
  switch (side) {
    case 'top': return { x: b.x + b.w * t, y: b.y }
    case 'bottom': return { x: b.x + b.w * t, y: b.y + b.h }
    case 'left': return { x: b.x, y: b.y + b.h * t }
    case 'right': return { x: b.x + b.w, y: b.y + b.h * t }
    default: return { x: b.x + b.w / 2, y: b.y + b.h / 2 }
  }
}

/* ============================================================
   Presentational pieces
   ============================================================ */

function CanvasBox({ box, canvasW, canvasH }) {
  const style = {
    left: `${(box.x / canvasW) * 100}%`,
    top: `${(box.y / canvasH) * 100}%`,
    width: `${(box.w / canvasW) * 100}%`,
    minHeight: `${(box.h / canvasH) * 100}%`,
  }

  const isPureImage = box.legend === 'external' || (!box.title && !box.desc)

  if (isPureImage) {
    return (
      <div className={`flow-box flow-box--${box.legend} ${box.round ? 'flow-box--round' : ''}`} style={style}>
        {box.img ? <img src={box.img} alt={box.label || box.title} className="flow-box-img" /> : null}
      </div>
    )
  }

  return (
    <div className={`flow-box flow-box--${box.legend}`} style={style}>
      {box.number && <span className="flow-box-number">{box.number}</span>}
      {box.img && <img src={box.img} alt={box.title} className="flow-box-img flow-box-img--fill" />}
      <div className="flow-box-content">
        {box.title && <h4 className="flow-box-title">{box.title}</h4>}
        {box.desc && <p className="flow-box-desc">{box.desc}</p>}
      </div>
    </div>
  )
}

function CanvasEdges({ boxes, edges, canvasW, canvasH, markerPrefix }) {
  return (
    <svg
      className="flow-canvas-svg"
      viewBox={`0 0 ${canvasW} ${canvasH}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker id={`${markerPrefix}-seq`} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" className="flow-marker flow-marker--sequential" />
        </marker>
        <marker id={`${markerPrefix}-dep`} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" className="flow-marker flow-marker--dependency" />
        </marker>
      </defs>
      {edges.map((edge, i) => {
        const p1 = anchorPoint(boxes, edge.from)
        const p2 = anchorPoint(boxes, edge.to)
        const isSeq = edge.type === 'sequential'
        return (
          <line
            key={i}
            x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
            className={`flow-edge flow-edge--${edge.type}`}
            markerEnd={`url(#${markerPrefix}-${isSeq ? 'seq' : 'dep'})`}
          />
        )
      })}
    </svg>
  )
}


/* Desktop: exact wireframe layout, absolutely positioned + SVG connectors */
function DesktopCanvas({ boxes, edges, canvasW, canvasH, markerPrefix }) {
  return (
    <div className="flow-canvas only-desktop" style={{ aspectRatio: `${canvasW} / ${canvasH}` }}>
      <CanvasEdges boxes={boxes} edges={edges} canvasW={canvasW} canvasH={canvasH} markerPrefix={markerPrefix} />
      {Object.entries(boxes).map(([key, box]) => (
        <CanvasBox key={key} box={box} canvasW={canvasW} canvasH={canvasH} />
      ))}
    </div>
  )
}

/* Mobile: different arrangement — linear reading order, stacked, simple down-arrows */
function MobileStack({ order, boxes, dependencyKeys = [] }) {
  return (
    <div className="flow-mobile-stack only-mobile">
      {order.map((key, i) => {
        const box = boxes[key]
        const isDependency = dependencyKeys.includes(key)
        const isPureImage = box.legend === 'external' || (!box.title && !box.desc)
        return (
          <div className="flow-mobile-item" key={key}>
            {i > 0 && (
              <div className={`flow-mobile-connector ${isDependency ? 'flow-mobile-connector--dependency' : ''}`}>
                <svg viewBox="0 0 10 16" className="flow-mobile-arrow">
                  <line x1="5" y1="0" x2="5" y2="12" />
                  <path d="M0,10 L5,16 L10,10 Z" />
                </svg>
              </div>
            )}
            {isPureImage ? (
              <div className={`flow-box flow-box--${box.legend} flow-box--mobile flow-box--pure-image ${box.round ? 'flow-box--round' : ''}`}>
                {box.img ? <img src={box.img} alt={box.label || box.title} className="flow-box-img" /> : null}
              </div>
            ) : (
              <div className={`flow-box flow-box--${box.legend} flow-box--mobile`}>
                {box.number && <span className="flow-box-number">{box.number}</span>}
                {box.img && <img src={box.img} alt={box.title} className="flow-box-img flow-box-img--fill" />}
                <div className="flow-box-content">
                  {box.title && <h4 className="flow-box-title">{box.title}</h4>}
                  {box.desc && <p className="flow-box-desc">{box.desc}</p>}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ============================================================
   Sections
   ============================================================ */

function VisionFlow() {
  return (
    <div className="flow-section">
      <div className="flow-section-header">
        <span className="flow-dot vision"></span>
        <h3 className="flow-title">Our Vision</h3>
      </div>

      <DesktopCanvas boxes={visionBoxes} edges={visionEdges} canvasW={VISION_W} canvasH={VISION_H} markerPrefix="vision" />

      <MobileStack
        order={['imgLarge', 'imgSmall1', 'imgSmall2', 'topBox', 'box2', 'imgBubble', 'hubBox', 'dependBox', 'sideBox', 'bottomBox']}
        boxes={visionBoxes}
        dependencyKeys={['imgLarge', 'imgSmall1', 'imgSmall2', 'imgBubble', 'dependBox', 'sideBox']}
      />
    </div>
  )
}

function MissionFlow() {
  return (
    <div className="flow-section flow-section--mission">
      <div className="flow-section-header">
        <span className="flow-dot mission"></span>
        <h3 className="flow-title">Our Mission</h3>
      </div>

      <DesktopCanvas boxes={missionBoxes} edges={missionEdges} canvasW={MISSION_W} canvasH={MISSION_H} markerPrefix="mission" />

      <MobileStack
        order={['m1', 'm2', 'm3', 'imgCloudLeft', 'imgBig', 'imgRight', 'imgBottomRight']}
        boxes={missionBoxes}
        dependencyKeys={['imgCloudLeft', 'imgBig', 'imgRight', 'imgBottomRight']}
      />
    </div>
  )
}

function MissionVision() {
  return (
    <>
      <div className="w-full h-24 bg-gradient-to-b from-transparent to-surface-container-low/50 relative overflow-hidden -my-8">
        <svg className="absolute bottom-0 w-full text-surface-container-low" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1440 48">
          <path d="M0,0 C240,48 480,48 720,24 C960,0 1200,0 1440,24 L1440,48 L0,48 Z" />
        </svg>
      </div>

      <section id="mission-vision" className="mv-section">
        <div className="mv-bg-blur-1"></div>
        <div className="mv-bg-blur-2"></div>

        <div className="mv-container">
          <VisionFlow />
          <MissionFlow />
        </div>
      </section>

      <div className="w-full h-24 bg-gradient-to-b from-surface-container-low to-background relative overflow-hidden">
        <svg className="absolute top-0 w-full text-background" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1440 48">
          <path d="M0,48 C240,0 480,0 720,24 C960,48 1200,48 1440,24 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </>
  )
}

export default MissionVision