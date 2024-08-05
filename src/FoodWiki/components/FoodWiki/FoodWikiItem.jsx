import styled from 'styled-components';
import { useState } from 'react';
import ExampleImg from '../../../FoodWiki/assets/exSearchImg.svg?react';
import { useNavigate } from 'react-router-dom';

const bucketName = 'dontspikeimg';
const region = 'ap-southeast-2';

const FoodWikiItem = props => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = e => {
    setFoodname(e.target.value);
  };

  const handleSearch = () => {
    const fileName = '감자튀김.jpg';
    const url = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
    setImageUrl(url);
    console.log('출력 : ', url);
  };

  const onItemClick = () => {
    // API GET => 존재하는 경우에만 FoodInfoPage로 넘어감
    // navigate(`/foodWiki/search?query=${props.foodname}`);
    handleSearch();
  };

  return (
    <>
      <InfoWrapper onClick={onItemClick}>
        <FoodImg src="https://dontspikeimg.s3.ap-southeast-2.amazonaws.com/감자튀김.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhANJFS8GrMGPCHrd5p5G5d4%2FX2X98DeNycN5HtnNUbYXXAiEAjlrQ6WU3iGHjsGHbLmOzSlrgOohBjxhhvn0tVH4Io5kq7QII1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4OTEzNzcwMTgyNTkiDK%2BjffKkcNr2UtxXGSrBAqb1SGv6Zk61Y%2FZOIGzZjFD1PKwBA7a4Gewy0aFKa0sMjwuzMF7Ge48xtw5kL1PlE4%2FefNpesExkhMyQtfhCzpNXtvgkbqHGFYGczQhl3%2BmE8GNZ6asjR9pV0x12GOJH%2B6R0UdcS1Vwe1emK2Z3clcYAPyv9AAcSi64zGP8hNnaLkPMnFl%2BETbCyCkbm%2Bp2v2H52K6vvUwKrlzzt27jOaIkpijs63lq31fbgbCs4cxRC8koLh0zKmpWj%2B0lp2vaqrYl%2FY7xOaROGOqBhWxLiVsMWjcU4vZX49sUJdHLSXShzC2VJeRLwEAI5E2ygE1tm2fxm0b8WMfiXQ8tSwUv2v47i6Kqf7fqNkJhZavjOsS3cUe9Bx7MrKVL6iOaJcZ81l4KeH48e1%2Fql0K0O6rAWdeb1gNn%2BaZyc6O%2BnFdqVwR8K4TCM5sK1BjqyAgmpr73cq%2B2pUUOxHfoSLnUkXM9hblFQADAZ1zQFbdo9fXjDxtO44qqjdyq811TKevzS1nb3QtKRKXNhRql1H3mWPNvPWBDOAAhjRvtAy4r9O6DPS5%2BrNzIWiVDESNsH6WOiZw59PbC4qmMwppC6NUmSxPgDo3JafSsEu6xGbImyDSfDw8E87%2FCuSmI5u%2Bgzyer0dlPiUcKk2wHGae2uKNUR%2BI1R%2BmQor2GmcJO7NA5Pyubl%2FVoUGHf9U%2FXDjj2pQs5CLikhql6LezkfC9j8kckOrXxkZeZO36itfv5LIg6rFPOlsxYJc%2F%2BRBmTAYRQ1J%2Bf8n6Oa4khkDYHczPVgtNYfDczdWJSFDxlt6iZHXhPzs%2FLZiMx1i9VBLvEqTkmFM84emT1BOjisQwKJWq1YJ2IJtA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240805T122001Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIA47CRV4WJROWETCUF%2F20240805%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=cc424d182305c4024637d31efa87bd0fa1835aec5a55b0d5a3a140b588f3d26c"></FoodImg>
        <FoodTitle>{props.foodname}</FoodTitle>
      </InfoWrapper>
    </>
  );
};

const InfoWrapper = styled.div`
  cursor: pointer;
  width: 90%;
  margin: 0.8rem;
  padding: 0.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  &:hover {
    background-color: #fafff2;
  }
`;

const FoodImg = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  flex-shrink: 0;
  object-fit: cover;
`;
const FoodTitle = styled.div`
  color: #111111;

  font-size: 1rem;
  font-weight: 500;
`;

export default FoodWikiItem;
