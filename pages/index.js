import FlexSlider from '../components/FlexSlider/FlexSlider';
import classes from './index.module.scss';

export default function Home() {

  return (
    <>
      <section className={classes.homePage}>
        <FlexSlider />
      </section>
    </>
  )
}
