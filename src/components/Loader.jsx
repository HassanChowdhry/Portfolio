import { SectionWrapper } from '../hoc';

const Loader = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
      <div className='loader'></div>
    </section>
  )
}

export default SectionWrapper(Loader, "loader");