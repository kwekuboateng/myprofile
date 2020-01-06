import css from '../styles.css'
import ContentCard from '../components/contentCard'


export default function Blog() {
    return (
      <ContentCard background={{background: 'red'}}>
        <h1>My Blog</h1>
       </ContentCard>
    );
  }