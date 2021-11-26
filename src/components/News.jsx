import React,{useState} from 'react'
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';

import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = ({simplified}) => {

    const [newsCategory,setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count:6});

    const {Text, Title} = Typography;
    const {Option}  = Select;

    console.log("Crypto News : ",cryptoNews);

    if(!cryptoNews?.value) return 'Loading ...'
    return (
        <Row gutter={[24,24]}>
            {cryptoNews.value.map((news,i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title">{news.description}</Title>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}

        </Row>
    )
}

export default News
