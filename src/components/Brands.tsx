import styles from './Brands.module.css';

const brands = [
  { name: 'Dell', logo: '/brands/dell.png' },
  { name: 'VMware', logo: '/brands/vmware.png' },
  { name: 'Microsoft', logo: '/brands/microsoft.png' },
  { name: 'PowerBI', logo: '/brands/powerbi.png' },
  { name: 'Linux', logo: '/brands/linux.png' },
  { name: 'Docker', logo: '/brands/docker.png' },
  { name: 'Intel', logo: '/brands/intel.png', isIntel: true },
  { name: 'AMD', logo: '/brands/amd.png', isWhite: true },
  { name: 'Windows Server', logo: '/brands/windowsserver.png', isWindowsServer: true },
];

const Brands = () => {
  // Duplicamos a lista para criar o efeito de loop infinito sem saltos
  const infiniteBrands = [...brands, ...brands];

  return (
    <section className={styles.brandsSection}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Experiência com tecnologias líderes de mercado</p>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {infiniteBrands.map((brand, index) => (
              <div key={index} className={styles.slide}>
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  title={brand.name}
                  className={`${styles.logo} ${brand.isWhite ? styles.alwaysWhite : ''} ${brand.isIntel ? styles.intelLogo : ''} ${brand.isWindowsServer ? styles.windowsServerLogo : ''}`}
                  onError={(e) => {
                    // Placeholder caso a imagem não exista ainda
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x50/111/fff?text=${brand.name}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
