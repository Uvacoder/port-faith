import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import libs from '../static/data/libs.json';
import { colors, media } from '../style/theme';

const PortfolioImage = ({ data: { images } }) => (
  <>
    <ImageBg data-background={images.desktop} className="swiper-lazy desktop">
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </ImageBg>
    <ImageBg data-background={images.mobile} className="swiper-lazy mobile">
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </ImageBg>
  </>
);
const PortfolioInfo = ({
  data: {
    title, description, link, technologies, screenshots,
  },
}) => (
  <Info flexDirection="column" justifyContent="space-between">
    <Flex className="content" flexDirection="column">
      <Flex className="project-header" justifyContent="space-between" alignItems="center">
        <Box className="project-title">{title}</Box>
        <a href={link} target="_blank" rel="noopener noreferrer nofollow">
          GO TO PROJECT WEBSITE
          {' '}
          <span className="bx bx-chevrons-right" />
        </a>
      </Flex>
      <Box className="description">{description}</Box>
    </Flex>
    <Flex className="detail-wrapper" flexDirection="column">
      <Flex className="detail" alignItems="center">
        <Box className="detail-title">SCREENSHOTS</Box>
        <Flex alignItems="center">
          {screenshots.map((item, index) => (
            <a href={item} target="_blank" rel="noopener noreferrer" key={item}>
              {index + 1}
              {' '}
              <span className="bx bx-link-external" />
            </a>
          ))}
        </Flex>
      </Flex>
      <Flex className="detail" alignItems="center">
        <Box className="detail-title">FRAMEWORKS/LIBS USED</Box>
        <Flex alignItems="center">
          {technologies.map(item => (
            <a
              href={libs[item].website}
              target="_blank"
              rel="noopener noreferrer"
              title={item}
              key={item}
            >
              <img src={libs[item].logo} height="20" alt={item} />
            </a>
          ))}
        </Flex>
      </Flex>
    </Flex>
  </Info>
);

const ImageBg = styled.div`
  width: 100%;
  padding-top: 50%;
  background-position: center;
  background-repeat: no-no-repeat;
  background-size: cover;
  background-color: black;
  &.desktop {
    ${media.phone`
      display:none;
    `};
  }
  &.mobile {
    display: none;
    ${media.phone`
      display: block;
    `};
  }
`;

const Info = styled(Flex)`
  width: 62.5%;
  height: 300px;
  margin: 0 auto;
  background-color: white;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  padding: 30px;
  color: ${colors.font};
  border-top: 1px solid #eee;
  ${media.tablet`
    width: 100%;
  `}
  ${media.phone`
    height: 225px;
    padding: 20px;
  `};
  .project-header {
    width: 100%;
    padding-bottom: 5px;
    ${media.phone`
      flex-direction: column;
      border-bottom: 1px solid #eee;
    `};
    .project-title {
      font-size: 20px;
      font-weight: 700;
      ${media.phone`
        font-size: 18px;
      `};
    }
    a,
    a:visited,
    a:active {
      letter-spacing: 1px;
      font-size: 12px;
      color: #39318e;
      text-decoration: none;
      ${media.phone`
        margin: 10px 0;
      `};
    }
  }
  .description {
    padding: 30px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    ${media.phone`
      display: none;
    `};
  }
  .detail {
    margin-top: 20px;
    ${media.phone`
      flex-direction: column;
    `};
    &-title {
      color: #999;
      font-size: 12px;
      ${media.phone`
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
      `};
    }
    a,
    a:visited,
    a:active {
      margin-left: 15px;
      color: #39318e;
      text-decoration: none;
      display: flex;
      align-items: flex-start;
      ${media.phone`
        margin: 0 7.5px;
      `};
      .bx {
        font-size: 12px;
        margin-left: 2px;
      }
    }
  }
`;

const PortfolioItem = {};
PortfolioItem.Image = PortfolioImage;
PortfolioItem.Info = PortfolioInfo;

export default PortfolioItem;
