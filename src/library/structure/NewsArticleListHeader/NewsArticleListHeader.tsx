
import React, { useState, useEffect }  from "react";

import { NewsArticleListHeaderProps } from "./NewsArticleListHeader.types";
import * as Styles from "./NewsArticleListHeader.styles";
import SortBy from "../../components/SortBy/SortBy";
import {countParams, getCheckboxValues, getDropDownValues, deSlug, removeValueFromParam} from './../../helpers/url-helpers.js';
import RemovableTag from "../../components/RemovableTag/RemovableTag";
import { NewsArticleFilterFields } from "./../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText"

const NewsArticleListHeader: React.FC<NewsArticleListHeaderProps> = ({ totalResults, sortBy, sortByOptions }) => {
    
    
    const [count, setCount] = useState(0);
    const [servicesVals, setServicesVals] = useState([]);
    const [articleTypeVals, setArticleTypeVals] = useState([]);

    useEffect(() => {
        setCount(countParams([NewsArticleFilterFields.search.queryParamKey, NewsArticleFilterFields.services.queryParamKey, NewsArticleFilterFields.articleType.queryParamKey, NewsArticleFilterFields.sortBy.queryParamKey]));
        setServicesVals(getDropDownValues(NewsArticleFilterFields.services.queryParamKey));
        setArticleTypeVals(getCheckboxValues(NewsArticleFilterFields.articleType.queryParamKey));
    }, []);   


    const removeFilterValue = (param, value) => {
        removeValueFromParam(param, value);
    }

return (
    <Styles.Container data-testid="NewsArticleListHeader">
        <Styles.LeftCol>{totalResults} articles</Styles.LeftCol>
        <Styles.RightCol><SortBy selected={sortBy} options={sortByOptions} /></Styles.RightCol>
        {count > 0 && 
        <Styles.Filters>
            {servicesVals.length > 0 &&
                <Styles.FilterRow>
                <Styles.FilterTitle>{NewsArticleFilterFields.services.title} shown:</Styles.FilterTitle>
                {servicesVals.map((service, i) => <RemovableTag key={i}clickHandler={() => removeFilterValue(NewsArticleFilterFields.services.queryParamKey, service)} index={i} label={deSlug(service)} value={service} /> )}
                </Styles.FilterRow>
            }

            {articleTypeVals.length > 0 &&
                <Styles.FilterRow>
                <Styles.FilterTitle>{NewsArticleFilterFields.articleType.title}{articleTypeVals.length > 1 && `(s)`} shown: </Styles.FilterTitle>
                {articleTypeVals.map((article, i) => <RemovableTag key={i} clickHandler={() => removeFilterValue(NewsArticleFilterFields.articleType.queryParamKey, article)}  index={i} preposition="and" label={deSlug(article)} value={article} /> )}
                </Styles.FilterRow>
            }
        </Styles.Filters>
        }
    </Styles.Container>
);
}

export default NewsArticleListHeader;

