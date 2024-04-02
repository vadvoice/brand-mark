import logoSrc from '../assets/images/brand.svg';

export const BrandMark = (props) => {
  const { title = 'Default Title', type = 'sticky', src = '/' } = props;

  if (type === 'inline') {
    return (
      <div className="content cursor-pointer">
        <a href={src} className="text-black hover:text-black">
          <img
            className="w-10 border-rounded"
            src={logoSrc}
            alt={title || 'Brand Logo'}
          />
          <h5 className="m-0 w-20 break-words">{title}</h5>
        </a>
      </div>
    );
  }

  if (type === 'sticky') {
    return (
      <div className="brand-mark fixed bottom-1 right-1 opacity-50 hover:opacity-100  transition translate-x-24 hover:translate-x--0">
        <div className="brand-mark__wrapper flex items-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 border-rounded p-2">
          <div className="brand-mark__wrapper__trigger w-5 p-2">←</div>
          <div className="content cursor-pointer">
            <a href={src} className="text-black hover:text-black">
              <img
                className="w-10 border-rounded"
                src={logoSrc}
                alt={title || 'Brand Logo'}
              />
              <h5 className="m-0 w-20 break-words all-decoration-none">{title}</h5>
            </a>
          </div>
        </div>
      </div>
    );
  }
};
