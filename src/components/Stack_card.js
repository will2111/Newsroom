import { Stack } from "react-bootstrap";

import NewsCard from './Card.js'

export default function Stackcard(props) {
    
    const {articles,nbline} = props;

    return (
        <Stack className="pt-3" gap={4}>
            {articles.slice(0,nbline).map((obj, idx) =>
          
                    <NewsCard obj={obj} />
            )}
        </Stack>
    )
}