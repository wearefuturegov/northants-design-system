import React from 'react';
import LazyImage from 'react-lazy-progressive-image';
import { NewsArticleListProps } from './NewsArticleList.types';
import * as Styles from './NewsArticleList.styles';
import NewsArticleDate from '../NewsArticleDate/NewsArticleDate';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

const NewsArticleList: React.FunctionComponent<NewsArticleListProps> = ({ results }) => {
  const extractLength = 140;

  if (results && results.length > 0) {
    return (
      <Styles.Container data-testid="NewsArticleList">
        <Row isList>
          {results.map((article) => (
            <Column isList small="full" medium="full" large="full" key={article.id}>
              <Styles.ArticleContainer href={article.url} title={article.title}>
                {article.image720x405 && (
                  <LazyImage
                    src={article.image720x405}
                    placeholder={article.image72x41}
                    visibilitySensorProps={{
                      partialVisibility: true,
                    }}
                  >
                    {(src) => (
                      <Styles.ImageContainer
                        className="news-article-list__image"
                        background={src}
                        role="img"
                        aria-label={article.imageAltText ? article.imageAltText : 'News article'}
                      ></Styles.ImageContainer>
                    )}
                  </LazyImage>
                )}
                <Styles.ArticleContent withImage={article.image720x405 ? true : false}>
                  <Styles.Title className="news-article-list__title">{article.title}</Styles.Title>
                  {article.excerpt.length > extractLength
                    ? article.excerpt.substr(0, extractLength - 1).trim() + String.fromCharCode(8230)
                    : article.excerpt}
                  <Styles.DateContainer>
                    <NewsArticleDate text={article.date.toString()} format="X" />
                  </Styles.DateContainer>
                </Styles.ArticleContent>
              </Styles.ArticleContainer>
            </Column>
          ))}
        </Row>
      </Styles.Container>
    );
  } else {
    return (
      <Styles.Container data-testid="NewsArticleList">
        <Styles.ResultInfo>No results found</Styles.ResultInfo>
      </Styles.Container>
    );
  }
};

export default NewsArticleList;
