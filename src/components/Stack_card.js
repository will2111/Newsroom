import { Stack } from "react-bootstrap";

import NewsCard from './Card.js'

export default function Stackcard(props) {
const {articles} = props;

    return (
        <Stack gap={4}>
            {articles.map((obj, idx) =>
          
                    <NewsCard obj={obj} />
            )}
        </Stack>
    )
}