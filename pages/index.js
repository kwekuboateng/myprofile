
import Layout from '../comps/MyLayout';
import Blog from './blog'


export default function Index (){
  return (
  <div>
    <Layout>
    <p>Hello Next.js</p>
        <Blog />
    </Layout>
  </div>
  );
}
//higher order component usage
// const Page = () => (
//     <p>Hello Next.js</p>
//   );
  
//   export default withLayout(Page);

