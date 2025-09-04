import Blogs from '../../components/Home/Blogs/Blogs';
import Intro from '../../components/Home/Intro/Intro';
import Programs from '../../components/Home/Programs/Programs';
import Reviews from '../../components/Home/Reviews/Reviews';
import Services from '../../components/Home/Services/Services';
import Tutors from '../../components/Home/Tutors/Tutors';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Intro />
      <Services />
      <Programs />
      <Tutors />
      <Reviews />
      <Blogs />
    </>
  );
}
