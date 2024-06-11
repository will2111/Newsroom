import { Stack } from "react-bootstrap";

import NewsCard from './Card.js'

export default function Stackcard(props) {
    const Articles = props.articles.filter((_, i) => i % 3 === props.i_line)
    return (
        <Stack gap={4}>
            {Articles.map((obj, idx) =>
          
                    <NewsCard obj={obj} />
            )}
        </Stack>
    )
}