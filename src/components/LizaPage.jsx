import React from 'react';
import Image from 'next/image'; // для Next.js (если используете)
// Если не Next.js, используйте обычный img

export default function Liza() {
  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)'
    },
    backgroundLeft: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0
    },
    backgroundRight: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.15
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.85)',
      zIndex: 1
    },
    content: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '30px',
      boxSizing: 'border-box',
      color: '#333'
    },
    headerSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '30px',
      position: 'relative'
    },
    mainTitle: {
      fontSize: '56px',
      color: '#2c3e50',
      textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: '3px',
      fontWeight: '700'
    },
    threeColumns: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 0.8fr 1.2fr',
      gap: '20px',
      height: 'calc(100% - 100px)',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      height: '100%'
    },
    photoCard: {
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.8)'
    },
    mainPhoto: {
      height: '100%',
      width: '100%'
    },
    smallPhoto: {
      height: '100%',
      width: '100%'
    },
    photoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    photoOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
      zIndex: 1,
      transition: 'opacity 0.3s ease'
    },
    infoBlock: {
      background: 'white',
      padding: '25px',
      borderRadius: '16px',
      height: '100%',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      border: '1px solid rgba(255,255,255,0.9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    infoName: {
      fontSize: '40px',
      margin: '0 0 5px 0',
      color: '#2c3e50',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: '600'
    },
    infoAge: {
      fontSize: '20px',
      color: '#7f8c8d',
      marginBottom: '20px',
      paddingBottom: '15px',
      borderBottom: '2px solid #ecf0f1'
    },
    musicSection: {
      margin: '15px 0',
      background: '#f8fafc',
      padding: '15px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0'
    },
    musicTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#34495e',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    musicPlayer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    playBtn: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #667eea, #764ba2)',
      color: 'white',
      border: 'none',
      fontSize: '18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 10px rgba(102, 126, 234, 0.3)'
    },
    trackList: {
      flex: 1
    },
    trackItem: {
      margin: '6px 0',
      color: '#4a5568',
      fontSize: '15px',
      padding: '6px 12px',
      background: 'white',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      border: '1px solid #edf2f7'
    },
    quoteBlock: {
      marginTop: '20px',
      padding: '15px',
      background: 'linear-gradient(45deg, #f8fafc, #e2e8f0)',
      borderRadius: '12px',
      color: '#2d3748',
      textAlign: 'center',
      border: '1px solid #cbd5e0'
    },
    quoteLine: {
      fontSize: '22px',
      fontWeight: '500',
      margin: '5px 0',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#2c3e50'
    }
  };

  // Состояния для hover эффектов
  const [hoveredMain, setHoveredMain] = React.useState(false);
  const [hoveredSmall1, setHoveredSmall1] = React.useState(false);
  const [hoveredSmall2, setHoveredSmall2] = React.useState(false);
  const [hoveredPlay, setHoveredPlay] = React.useState(false);
  const [hoveredTrack, setHoveredTrack] = React.useState(null);

  // Обработчики для треков
  const tracks = ['Noize MC', 'Nervy', 'Scorpions'];

  return (
    <div style={styles.container}>
      {/* Фоновые изображения через img */}
      <div style={styles.backgroundLeft}>
        <img 
          src="/backLiz.png" 
          alt="background left"
          style={styles.backgroundImage}
        />
      </div>
      <div style={styles.backgroundRight}>
        <img 
          src="/image 314.png" 
          alt="background right"
          style={styles.backgroundImage}
        />
      </div>
      <div style={styles.overlay}></div>
      
      {/* Контент */}
      <div style={styles.content}>
        {/* Заголовок */}
        <div style={styles.headerSection}>
          <h1 style={styles.mainTitle}>About me</h1>
        </div>

        {/* Трехколоночная секция */}
        <div style={styles.threeColumns}>
          {/* Первая колонка - большое фото */}
          <div style={styles.column}>
            <div 
              style={{
                ...styles.photoCard,
                height: '100%',
                transform: hoveredMain ? 'scale(1.02)' : 'scale(1)',
                boxShadow: hoveredMain ? '0 20px 35px rgba(0,0,0,0.15)' : '0 10px 25px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={() => setHoveredMain(true)}
              onMouseLeave={() => setHoveredMain(false)}
            >
              <img 
                src="/imageF.png"
                alt="Main photo"
                style={{
                  ...styles.photoImage,
                  transform: hoveredMain ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div style={{
                ...styles.photoOverlay,
                opacity: hoveredMain ? 0.2 : 0.1
              }}></div>
            </div>
          </div>

          {/* Вторая колонка - два маленьких фото */}
          <div style={styles.column}>
            <div 
              style={{
                ...styles.photoCard,
                height: 'calc(50% - 7.5px)',
                transform: hoveredSmall1 ? 'scale(1.02)' : 'scale(1)',
                boxShadow: hoveredSmall1 ? '0 20px 35px rgba(0,0,0,0.15)' : '0 10px 25px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={() => setHoveredSmall1(true)}
              onMouseLeave={() => setHoveredSmall1(false)}
            >
              <img 
                src="/image 314.png"
                alt="Small photo 1"
                style={{
                  ...styles.photoImage,
                  transform: hoveredSmall1 ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div style={{
                ...styles.photoOverlay,
                opacity: hoveredSmall1 ? 0.2 : 0.1
              }}></div>
            </div>
            <div 
              style={{
                ...styles.photoCard,
                height: 'calc(50% - 7.5px)',
                transform: hoveredSmall2 ? 'scale(1.02)' : 'scale(1)',
                boxShadow: hoveredSmall2 ? '0 20px 35px rgba(0,0,0,0.15)' : '0 10px 25px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={() => setHoveredSmall2(true)}
              onMouseLeave={() => setHoveredSmall2(false)}
            >
              <img 
                src="/imageL.png"
                alt="Small photo 2"
                style={{
                  ...styles.photoImage,
                  transform: hoveredSmall2 ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div style={{
                ...styles.photoOverlay,
                opacity: hoveredSmall2 ? 0.2 : 0.1
              }}></div>
            </div>
          </div>

          {/* Третья колонка - информация */}
          <div style={styles.column}>
            <div style={styles.infoBlock}>
              <h2 style={styles.infoName}>Liza</h2>
              <p style={styles.infoAge}>Age: 18</p>
              
              <div style={styles.musicSection}>
                <p style={styles.musicTitle}>Listen my music</p>
                <div style={styles.musicPlayer}>
                  <button 
                    style={{
                      ...styles.playBtn,
                      transform: hoveredPlay ? 'scale(1.1)' : 'scale(1)',
                      boxShadow: hoveredPlay ? '0 6px 15px rgba(102, 126, 234, 0.4)' : '0 4px 10px rgba(102, 126, 234, 0.3)'
                    }}
                    onMouseEnter={() => setHoveredPlay(true)}
                    onMouseLeave={() => setHoveredPlay(false)}
                  >
                    ▶
                  </button>
                  <div style={styles.trackList}>
                    {tracks.map((track, index) => (
                      <p 
                        key={index}
                        style={{
                          ...styles.trackItem,
                          background: hoveredTrack === index ? 'linear-gradient(45deg, #f0f4ff, #e9e9ff)' : 'white',
                          transform: hoveredTrack === index ? 'translateX(5px)' : 'translateX(0)',
                          borderColor: hoveredTrack === index ? '#667eea' : '#edf2f7'
                        }}
                        onMouseEnter={() => setHoveredTrack(index)}
                        onMouseLeave={() => setHoveredTrack(null)}
                      >
                        {track}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div style={styles.quoteBlock}>
                <p style={styles.quoteLine}>Я НЕ Я</p>
                <p style={styles.quoteLine}>И СУЕТА НЕ МОЯ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}