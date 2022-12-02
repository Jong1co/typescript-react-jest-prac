import banner from "../images/banner.jpg";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerBlock>
      <div className='banner__text'>
        <div className='banner__title'>Shop With Us</div>
        <div className='banner__subtitle'>Best Products, High Quality</div>
      </div>
      <div className='banner__container__img'>
        <img src={banner} alt='banner' />
      </div>
    </BannerBlock>
  );
};

export default Banner;

const BannerBlock = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner__text {
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }
  .banner__title {
    font-size: 42px;
  }
  .banner__container__img {
    width: 100%;
  }
  img {
    max-width: 1200px;
    height: 250px;
    width: 100%;
    object-fit: cover;
    object-position: top;
    filter: brightness(65%);
  }
`;
